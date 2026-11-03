import { constants, utils } from 'ethers';
import { resolveOfflineActiveTogaAddress } from './constants.js';

const GOVERNANCE_IFACE = new utils.Interface([
	'function getRewardAddress(address host, address token) view returns (address)',
]);

export async function resolveActiveTogaAddress(network, provider) {
	const governance = network.contractsV1?.governance;
	const host = network.contractsV1?.host;
	if (provider && governance && host) {
		try {
			const data = GOVERNANCE_IFACE.encodeFunctionData('getRewardAddress', [
				host,
				constants.AddressZero,
			]);
			const result = await provider.call({ to: governance, data });
			const rewardAddress = GOVERNANCE_IFACE.decodeFunctionResult(
				'getRewardAddress',
				result,
			)[0];
			if (rewardAddress && rewardAddress !== constants.AddressZero) {
				return rewardAddress;
			}
		} catch (error) {
			console.error('getRewardAddress failed; using the offline TOGA address', error);
		}
	}
	return resolveOfflineActiveTogaAddress(network);
}
