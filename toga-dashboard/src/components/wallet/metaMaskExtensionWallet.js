import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { createConnector } from 'wagmi';
import { injected, walletConnect } from 'wagmi/connectors';

// RainbowKit's MetaMask check. Wagmi's built-in `metaMask` target misses
// several wallets that set `isMetaMask`, including Coinbase and Trust, and
// then returns whichever of those appears first.
const METAMASK_IMPOSTORS = [
	'isApexWallet',
	'isAvalanche',
	'isBackpack',
	'isBifrost',
	'isBitKeep',
	'isBitski',
	'isBinance',
	'isBlockWallet',
	'isCoinbaseWallet',
	'isCoin98',
	'isCTRL',
	'isDawn',
	'isEnkrypt',
	'isExodus',
	'isFrame',
	'isFrontier',
	'isGamestop',
	'isHyperPay',
	'isImToken',
	'isKuCoinWallet',
	'isMathWallet',
	'isMEWwallet',
	'isNestWallet',
	'isOkxWallet',
	'isOKExWallet',
	'isOneInchIOSWallet',
	'isOneInchAndroidWallet',
	'isOpera',
	'isPhantom',
	'isPortal',
	'isRabby',
	'isRainbow',
	'isSafeheron',
	'isSafePal',
	'isStatus',
	'isTalisman',
	'isTally',
	'isTokenPocket',
	'isTokenary',
	'isTrust',
	'isTrustWallet',
	'isUniswapWallet',
	'isWigwam',
	'isZeal',
	'isZerion',
	'isZilPay',
	'isxPortal',
	'__seif',
];

function isMetaMaskProvider(provider) {
	if (!provider?.isMetaMask) {
		return false;
	}
	if (provider.isBraveWallet && !provider._events && !provider._state) {
		return false;
	}
	return !METAMASK_IMPOSTORS.some((flag) => provider[flag]);
}

function findMetaMaskProvider(targetWindow) {
	const ethereum = targetWindow?.ethereum;
	if (!ethereum) {
		return undefined;
	}
	if (ethereum.providers) {
		return ethereum.providers.find((provider) => isMetaMaskProvider(provider));
	}
	return isMetaMaskProvider(ethereum) ? ethereum : undefined;
}

// RainbowKit opens MetaMask through the MetaMask SDK whenever the extension is
// already injected or the browser is mobile. That SDK's analytics client loads
// openapi-fetch's `.cjs` build, which Create React App emits as a file URL, so
// constructing the client throws "default is not a function".
//
// An installed extension is that provider, passed to wagmi's injected
// connector. Everywhere else, WalletConnect is the public connector, and
// MetaMask's universal link is the mobile deeplink RainbowKit already uses.
const metaMaskWalletConnectUri = (uri) =>
	`https://metamask.app.link/wc?uri=${encodeURIComponent(uri)}`;

function injectedMetaMaskConnector(walletDetails) {
	return createConnector((config) => ({
		...injected({
			target: () => ({
				id: 'metaMask',
				name: 'MetaMask',
				provider: findMetaMaskProvider(globalThis.window),
			}),
		})(config),
		...walletDetails,
	}));
}

function walletConnectMetaMaskConnector(options, walletDetails) {
	return createConnector((config) => ({
		...walletConnect({
			showQrModal: false,
			customStoragePrefix: 'metaMask',
			...options.walletConnectParameters,
			projectId: options.projectId,
		})(config),
		...walletDetails,
	}));
}

export const metaMaskExtensionWallet = (options) => {
	const wallet = metaMaskWallet(options);
	if (findMetaMaskProvider(globalThis.window)) {
		return {
			...wallet,
			qrCode: undefined,
			mobile: undefined,
			createConnector: (walletDetails) =>
				injectedMetaMaskConnector(walletDetails),
		};
	}
	const link = wallet.qrCode?.getUri ?? metaMaskWalletConnectUri;
	return {
		...wallet,
		qrCode: {
			...(wallet.qrCode ?? {}),
			getUri: link,
		},
		mobile: { getUri: link },
		createConnector: (walletDetails) =>
			walletConnectMetaMaskConnector(options, walletDetails),
	};
};
