import { describe, expect, it } from 'vitest';
import { createConfig, http } from 'wagmi';
import { arc } from 'wagmi/chains';
import { NETWORK_LIST } from './networks.js';

describe('NETWORK_LIST', () => {
	it('includes Arc from viem', () => {
		expect(arc).toMatchObject({
			id: 5042,
			name: 'Arc',
			nativeCurrency: { symbol: 'USDC', decimals: 18 },
		});
		const network = NETWORK_LIST.find((item) => item.chainId === 5042);
		expect(network).toMatchObject({
			name: 'Arc',
			humanReadableName: 'Arc',
			chainId: 5042,
			id: 5042,
			contractsV1: {
				toga: '0x1bF9D75d50fD828a93f69ECB06f2B85767792CEB',
			},
		});
		expect(network.rpcUrls.superfluid).toBe(
			'https://rpc-endpoints.superfluid.dev/arc-mainnet',
		);
		expect(network.rpcUrls.default.http).toContain(
			'https://rpc.mainnet.arc.io',
		);
		expect(network.iconBackground).toBe('#0d1b2f');
		expect(network.iconUrl).toMatch(/\/icons\/network\/arc\.png$/);
	});

	it('accepts Arc in the wagmi config', () => {
		const config = createConfig({
			chains: NETWORK_LIST,
			transports: Object.fromEntries(
				NETWORK_LIST.map((network) => [
					network.id,
					http(network.rpcUrls.superfluid),
				]),
			),
		});
		expect(config.chains.map((chain) => chain.id)).toContain(5042);
	});
});
