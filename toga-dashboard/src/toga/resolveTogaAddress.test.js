import { describe, expect, it, vi } from 'vitest';
import sfMeta from '@superfluid-finance/metadata';
import { constants, utils } from 'ethers';
import { resolveActiveTogaAddress } from './resolveTogaAddress.js';
import {
	ACTIVE_TOGA_BY_CHAIN_ID,
	LEGACY_TOGA_BY_CHAIN_ID,
	resolveLegacyTogaAddress,
	resolveOfflineActiveTogaAddress,
} from './constants.js';

const LEGACY_NETWORKS = [
	'xdai-mainnet',
	'polygon-mainnet',
	'optimism-mainnet',
	'arbitrum-one',
	'avalanche-c',
	'bsc-mainnet',
];

function networkByName(name) {
	const network = sfMeta.networks.find((item) => item.name === name);
	if (!network) {
		throw new Error(`missing network ${name}`);
	}
	return network;
}

function appNetwork(name, wagmiName) {
	const metadata = networkByName(name);
	return { ...metadata, id: metadata.chainId, name: wagmiName };
}

describe('resolveOfflineActiveTogaAddress', () => {
	it.each(LEGACY_NETWORKS)(
		'%s uses the active TOGA while metadata still has the previous one',
		(name) => {
			const network = networkByName(name);
			expect(resolveOfflineActiveTogaAddress(network)).toBe(
				ACTIVE_TOGA_BY_CHAIN_ID[network.chainId],
			);
			expect(network.contractsV1.toga.toLowerCase()).toBe(
				LEGACY_TOGA_BY_CHAIN_ID[network.chainId].toLowerCase(),
			);
		},
	);

	it('keeps eth-mainnet on the metadata address', () => {
		const network = networkByName('eth-mainnet');
		expect(resolveOfflineActiveTogaAddress(network)).toBe(
			network.contractsV1.toga,
		);
	});

	it('still resolves after wagmi overwrites the network name', () => {
		const network = appNetwork('xdai-mainnet', 'Gnosis');
		expect(network.name).toBe('Gnosis');
		expect(resolveOfflineActiveTogaAddress(network)).toBe(
			ACTIVE_TOGA_BY_CHAIN_ID[100],
		);
		expect(resolveLegacyTogaAddress(network)).toBe(LEGACY_TOGA_BY_CHAIN_ID[100]);
	});
});

describe('resolveActiveTogaAddress', () => {
	it('prefers getRewardAddress when the call succeeds', async () => {
		const onChain = '0x1111111111111111111111111111111111111111';
		const provider = {
			call: vi.fn().mockResolvedValue(
				utils.defaultAbiCoder.encode(['address'], [onChain]),
			),
		};
		const address = await resolveActiveTogaAddress(
			networkByName('xdai-mainnet'),
			provider,
		);
		expect(address).toBe(utils.getAddress(onChain));
		expect(provider.call).toHaveBeenCalled();
	});

	it('ignores a zero reward address and uses the offline table', async () => {
		const provider = {
			call: vi.fn().mockResolvedValue(
				utils.defaultAbiCoder.encode(['address'], [constants.AddressZero]),
			),
		};
		const address = await resolveActiveTogaAddress(
			networkByName('xdai-mainnet'),
			provider,
		);
		expect(address).toBe(ACTIVE_TOGA_BY_CHAIN_ID[100]);
	});

	it('falls back to the table when the call fails', async () => {
		const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
		const provider = { call: vi.fn().mockRejectedValue(new Error('rpc down')) };
		const address = await resolveActiveTogaAddress(
			appNetwork('polygon-mainnet', 'Polygon'),
			provider,
		);
		expect(address).toBe(ACTIVE_TOGA_BY_CHAIN_ID[137]);
		errorSpy.mockRestore();
	});

	it('uses metadata for a network outside the six', async () => {
		const network = networkByName('base-mainnet');
		expect(await resolveActiveTogaAddress(network, null)).toBe(
			network.contractsV1.toga,
		);
	});
});
