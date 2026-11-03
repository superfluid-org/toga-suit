import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { describe, expect, it } from 'vitest';
import { ethers } from 'ethers';
import sfMeta from '@superfluid-finance/metadata';
import { LEGACY_TOGA_BY_CHAIN_ID } from './constants.js';
import {
	bidMethodFromBytecode,
	scanBytecodeCapabilities,
} from './bytecodeCapabilities.js';

const gnosisFixture = readFileSync(
	join(dirname(fileURLToPath(import.meta.url)), '__fixtures__/gnosis-active-toga-code.hex'),
	'utf8',
).trim();

async function providerFor(networkName) {
	const meta = sfMeta.networks.find((network) => network.name === networkName);
	const urls = [
		...(meta.publicRPCs || []),
		`https://rpc-endpoints.superfluid.dev/${networkName}`,
	];
	let lastError;
	for (const url of urls) {
		try {
			const provider = new ethers.providers.JsonRpcProvider(url);
			await provider.getBlockNumber();
			return { provider, meta };
		} catch (error) {
			lastError = error;
		}
	}
	throw lastError;
}

describe('live chain reads', () => {
	it('Gnosis reward address matches the active TOGA and its bytecode', async () => {
		const { provider, meta } = await providerFor('xdai-mainnet');
		const governance = new ethers.Contract(
			meta.contractsV1.governance,
			['function getRewardAddress(address host, address token) view returns (address)'],
			provider,
		);
		const reward = await governance.getRewardAddress(
			meta.contractsV1.host,
			ethers.constants.AddressZero,
		);
		expect(reward).toBe(ethers.utils.getAddress(meta.contractsV1.toga));
		const code = await provider.getCode(reward);
		expect(scanBytecodeCapabilities(code)).toEqual(
			scanBytecodeCapabilities(gnosisFixture),
		);
		expect(bidMethodFromBytecode(code)).toBe('erc777-send');
	});

	it('Optimism deprecated TOGA can withdraw custody and the active one cannot', async () => {
		const { provider, meta } = await providerFor('optimism-mainnet');
		const legacy = await provider.getCode(LEGACY_TOGA_BY_CHAIN_ID[10]);
		const active = await provider.getCode(meta.contractsV1.toga);
		expect(scanBytecodeCapabilities(legacy).hasWithdrawFundsInCustody).toBe(true);
		expect(scanBytecodeCapabilities(active).hasWithdrawFundsInCustody).toBe(false);
		expect(bidMethodFromBytecode(active)).toBe('erc777-send');
	});
});
