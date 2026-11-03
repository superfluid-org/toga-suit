// Wagmi replaces metadata `name` ("xdai-mainnet" becomes "Gnosis") and sets `id`.
// Metadata `chainId` survives that merge. `id` covers a chain object that only has `id`.

// TOGA was redeployed on 2026-09-08 on these six networks. Metadata lists only
// the new contract. A bond or a custodied balance stayed on the previous one,
// so the recovery panel reads this map and lets that PIC stream the bond out
// or withdraw custody, then stake on the current TOGA. Other networks were
// not redeployed.
export const LEGACY_TOGA_BY_CHAIN_ID = {
	100: '0xb7DE52F4281a7a276E18C40F94cd93159C4A2d22',
	137: '0x6AEAeE5Fd4D05A741723D752D30EE4D72690A8f7',
	10: '0xA3c8502187fD7a7118eAD59dc811281448946C8f',
	42161: '0xFC63B7C762B10670Eda15cF3ca3970bCDB28C9eF',
	43114: '0x3D9A67D5ec1E72CEcA8157e028855056786b6159',
	56: '0xFCD84210f5d51Cd40a30443d44d6A5500d5D10dF',
};

const LEGACY_CHAIN_IDS = Object.keys(LEGACY_TOGA_BY_CHAIN_ID).map(Number);

export function getNetworkChainId(network) {
	if (!network || typeof network !== 'object') {
		return undefined;
	}
	const raw = network.chainId ?? network.id;
	const chainId = Number(raw);
	if (!Number.isInteger(chainId)) {
		return undefined;
	}
	return chainId;
}

export function isLegacyTogaNetwork(chainId) {
	return LEGACY_CHAIN_IDS.includes(Number(chainId));
}

export function resolveLegacyTogaAddress(network) {
	const chainId = getNetworkChainId(network);
	if (!isLegacyTogaNetwork(chainId)) {
		return undefined;
	}
	return LEGACY_TOGA_BY_CHAIN_ID[chainId];
}

export function resolveOfflineActiveTogaAddress(network) {
	return network?.contractsV1?.toga;
}
