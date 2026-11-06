import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';

const sdk = vi.hoisted(() => ({ loaded: false }));

vi.mock('@metamask/sdk', () => {
	sdk.loaded = true;
	return {
		default: class MetaMaskSDK {
			init() {
				return Promise.resolve();
			}
			getProvider() {
				return undefined;
			}
		},
	};
});

const desktopUserAgent =
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36';
const iPhoneUserAgent =
	'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1';

const config = {
	chains: [],
	emitter: { on() {}, emit() {} },
};

function installWindow({ provider, userAgent = desktopUserAgent } = {}) {
	globalThis.window = {
		ethereum: provider,
		location: { origin: 'https://toga.superfluid.org' },
	};
	Object.defineProperty(globalThis, 'navigator', {
		configurable: true,
		value: {
			userAgent,
			platform: userAgent.includes('iPhone') ? 'iPhone' : 'Linux',
			maxTouchPoints: 0,
		},
	});
}

function metaMaskProvider() {
	return {
		isMetaMask: true,
		on() {},
		removeListener() {},
		request() {
			return Promise.resolve([]);
		},
	};
}

let getAppWallets;

beforeAll(async () => {
	installWindow();
	({ getAppWallets } = await import('./getAppWallets.js'));
});

afterEach(() => {
	sdk.loaded = false;
});

function metaMaskConnector({ provider, userAgent } = {}) {
	installWindow({ provider, userAgent });
	return getAppWallets({
		appName: 'Toga Dashboard',
		projectId: 'test-project',
	})
		.map((create) => create(config))
		.find((connector) => connector.rkDetails?.id === 'metaMask');
}

describe('MetaMask wallet', () => {
	it('uses the injected provider and does not load the MetaMask SDK', async () => {
		const provider = metaMaskProvider();
		const connector = metaMaskConnector({ provider });

		expect(connector.type).toBe('injected');
		expect(connector.id).toBe('metaMask');
		await connector.setup();
		await expect(connector.getProvider()).resolves.toBe(provider);
		expect(connector.rkDetails.qrCode).toBeUndefined();
		expect(connector.rkDetails.mobile?.getUri).toBeUndefined();
		expect(sdk.loaded).toBe(false);
	});

	it('uses WalletConnect on desktop when the extension is absent', () => {
		const connector = metaMaskConnector();

		expect(connector.type).toBe('walletConnect');
		expect(sdk.loaded).toBe(false);
	});

	it('deeplinks WalletConnect to the MetaMask app on a phone', () => {
		const connector = metaMaskConnector({ userAgent: iPhoneUserAgent });

		expect(connector.type).toBe('walletConnect');
		expect(connector.rkDetails.mobile.getUri('wc:abc')).toBe(
			`https://metamask.app.link/wc?uri=${encodeURIComponent('wc:abc')}`,
		);
		expect(sdk.loaded).toBe(false);
	});

	it('uses an injected phone provider without waiting for a WalletConnect URI', async () => {
		const provider = metaMaskProvider();
		const connector = metaMaskConnector({
			provider,
			userAgent: iPhoneUserAgent,
		});

		expect(connector.type).toBe('injected');
		await expect(connector.getProvider()).resolves.toBe(provider);
		expect(connector.rkDetails.mobile?.getUri).toBeUndefined();
		expect(sdk.loaded).toBe(false);
	});

	it('uses WalletConnect when MetaMask is only listed under ethereum.providers', () => {
		const connector = metaMaskConnector({
			provider: {
				isMetaMask: false,
				providers: [{ isRabby: true }, metaMaskProvider()],
			},
		});

		expect(connector.type).toBe('walletConnect');
		expect(sdk.loaded).toBe(false);
	});

	it('does not treat Coinbase as MetaMask', () => {
		const connector = metaMaskConnector({
			provider: { isMetaMask: true, isCoinbaseWallet: true },
		});

		expect(connector.type).toBe('walletConnect');
		expect(sdk.loaded).toBe(false);
	});
});
