import sfMeta from '@superfluid-finance/metadata';
import * as wagmiChains from 'wagmi/chains';
const PROVIDER_URL_TEMPLATE = `https://rpc-endpoints.superfluid.dev/{{network}}`;

export const UNSUPPORTED = { name: 'Unsupported network' };

// wagmi 1.4 does not ship Arc. Native gas on Arc is USDC with 18 decimals.
const ARC_MAINNET_CHAIN = {
	id: 5042,
	network: 'arc',
	name: 'Arc',
	nativeCurrency: { name: 'USDC', symbol: 'USDC', decimals: 18 },
	rpcUrls: {
		default: { http: ['https://rpc.mainnet.arc.io'] },
		public: { http: ['https://rpc.mainnet.arc.io'] },
	},
	blockExplorers: {
		default: { name: 'Arc', url: 'https://explorer.arc.io' },
	},
};

function wagmiChainFor(metadataNetwork) {
	const known = Object.values(wagmiChains).find(
		(item) => item.id === metadataNetwork.chainId,
	);
	if (known) {
		return known;
	}
	if (metadataNetwork.chainId === ARC_MAINNET_CHAIN.id) {
		return ARC_MAINNET_CHAIN;
	}
	return undefined;
}

export const NETWORK_LIST = sfMeta.networks
	.map((n) => {
		if (n.contractsV1?.toga === undefined) {
			return null;
		}
		const wagmiChain = wagmiChainFor(n);
		if (!wagmiChain) {
			console.error(`No wagmi chain found for ${n.name}`);
			return null;
		}
		return {
			...n,
			...wagmiChain,
			rpcUrls: {
				// merge wagmi provided rpc url's with superfluid's
				...wagmiChain.rpcUrls,
				superfluid: `https://rpc-endpoints.superfluid.dev/${n.name}`,
			},
			subgraphUrl: `https://${n.name}.subgraph.x.superfluid.dev`,
		};
	})
	.filter((n) => n !== null && n.contractsV1.toga !== undefined);

export const tryFindNetwork = (networks, value) => {
	const asNumber = Number(value);
	if (isFinite(asNumber)) {
		return networks.find((x) => x.id === asNumber);
	}
	return undefined;
};

export const findNetworkOrThrow = (networks, value) => {
	const network = tryFindNetwork(networks, value);
	if (!network) {
		throw new Error(
			`Network ${value}  not found. This should never happen.`,
		);
	}
	return network;
};

export function getNetworkByName(name) {
	return NETWORK_LIST.find((n) => n.name === name) || UNSUPPORTED;
}

export function getNetworkByChainId(chainId) {
	return NETWORK_LIST.find((n) => n.id === chainId) || UNSUPPORTED;
}

export function getPrimaryProviderUrl(networkName) {
	return PROVIDER_URL_TEMPLATE.replace('{{network}}', networkName);
}
