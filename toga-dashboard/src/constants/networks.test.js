import { describe, expect, it } from 'vitest';
import { configureChains } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { NETWORK_LIST, findNetworkOrThrow } from './networks.js';

describe('NETWORK_LIST', () => {
	it('includes Arc mainnet even though wagmi 1.4 does not', () => {
		const arc = NETWORK_LIST.find((network) => network.chainId === 5042);
		expect(arc).toMatchObject({
			name: 'Arc',
			humanReadableName: 'Arc',
			chainId: 5042,
			contractsV1: {
				toga: '0x1bF9D75d50fD828a93f69ECB06f2B85767792CEB',
			},
		});
		expect(arc.rpcUrls.superfluid).toBe(
			'https://rpc-endpoints.superfluid.dev/arc-mainnet',
		);
	});

	it('accepts Arc in the wagmi chain config', () => {
		const { chains } = configureChains(NETWORK_LIST, [
			jsonRpcProvider({
				rpc: (chain) => ({
					http: findNetworkOrThrow(NETWORK_LIST, chain.chainId).rpcUrls
						.superfluid,
				}),
			}),
		]);
		expect(chains.map((chain) => chain.id)).toContain(5042);
	});
});
