import { describe, expect, it, vi } from 'vitest';
import sfMeta from '@superfluid-finance/metadata';
import { constants, utils } from 'ethers';
import { resolveActiveTogaAddress } from './resolveTogaAddress.js';
import {
	LEGACY_TOGA_BY_CHAIN_ID,
	resolveLegacyTogaAddress,
	resolveOfflineActiveTogaAddress,
} from './constants.js';

const CURRENT_TOGA_BY_CHAIN_ID = {
	100: '0x177Ab68dc7B0032Fce7d64d5BD28a5983bD42B3B',
	137: '0xeF3cB64Ab9021E400f4331929d8d02A47b333Af1',
	10: '0x91b577553B5390d47A1984eE500663EE7671DcE6',
	42161: '0xD09302C533Ca020E02FF4F70BBa606e3C2b3F4a6',
	43114: '0xD226e7C591F6aE719079b8A31654221d980DB5ce',
	56: '0xAb6e2f343C1909258580e4E6A149E24CbB3D2AEd',
};

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
		'%s metadata lists the current TOGA, not the deprecated one',
		(name) => {
			const network = networkByName(name);
			expect(network.contractsV1.toga).toBe(
				CURRENT_TOGA_BY_CHAIN_ID[network.chainId],
			);
			expect(network.contractsV1.toga.toLowerCase()).not.toBe(
				LEGACY_TOGA_BY_CHAIN_ID[network.chainId].toLowerCase(),
			);
			expect(resolveOfflineActiveTogaAddress(network)).toBe(
				network.contractsV1.toga,
			);
		},
	);

	it('keeps eth-mainnet on the metadata address', () => {
		const network = networkByName('eth-mainnet');
		expect(resolveOfflineActiveTogaAddress(network)).toBe(
			network.contractsV1.toga,
		);
	});

	it('still resolves the legacy contract after wagmi overwrites the network name', () => {
		const network = appNetwork('xdai-mainnet', 'Gnosis');
		expect(network.name).toBe('Gnosis');
		expect(resolveOfflineActiveTogaAddress(network)).toBe(
			CURRENT_TOGA_BY_CHAIN_ID[100],
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

	it('ignores a zero reward address and uses metadata', async () => {
		const provider = {
			call: vi.fn().mockResolvedValue(
				utils.defaultAbiCoder.encode(['address'], [constants.AddressZero]),
			),
		};
		const network = networkByName('xdai-mainnet');
		const address = await resolveActiveTogaAddress(network, provider);
		expect(address).toBe(network.contractsV1.toga);
	});

	it('falls back to metadata when the call fails', async () => {
		const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
		const provider = { call: vi.fn().mockRejectedValue(new Error('rpc down')) };
		const network = appNetwork('polygon-mainnet', 'Polygon');
		const address = await resolveActiveTogaAddress(network, provider);
		expect(address).toBe(network.contractsV1.toga);
		errorSpy.mockRestore();
	});

	it('uses metadata for a network outside the six', async () => {
		const network = networkByName('base-mainnet');
		expect(await resolveActiveTogaAddress(network, null)).toBe(
			network.contractsV1.toga,
		);
	});
});
