// TODO: replace strings with env variables
export const XDAI = {
	name: 'xDAI',
	coinGeckoId: 'xdai',
	ethersId: 'xdai',
	graphUrl:
		'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-xdai',
	togaAddress: '0xb7DE52F4281a7a276E18C40F94cd93159C4A2d22',
	rpcUrl: process.env.REACT_APP_XDAI_RPC_URL,
	getTxLink: (transactionId) =>
		`https://blockscout.com/xdai/mainnet/tx/${transactionId}`,
};
export const MATIC = {
	name: 'Matic',
	coinGeckoId: 'polygon-pos',
	ethersId: 'matic',
	graphUrl:
		'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic',
	togaAddress: '0x6AEAeE5Fd4D05A741723D752D30EE4D72690A8f7',
	rpcUrl: process.env.REACT_APP_MATIC_RPC_URL,
	getTxLink: (transactionId) => `https://polygonscan.com/tx/${transactionId}`,
};
export const OPTIMISM = {
	name: 'Optimism',
	coinGeckoId: 'optimistic-ethereum',
	ethersId: 'optimism',
	graphUrl:
		'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-optimism-mainnet',
	togaAddress: '0xA3c8502187fD7a7118eAD59dc811281448946C8f',
	rpcUrl: process.env.REACT_APP_OPTIMISM_RPC_URL,
	getTxLink: (transactionId) => `https://optimistic.etherscan.io/tx/${transactionId}`,
};
export const ARBITRUM = {
	name: 'Arbitrum-one',
	coinGeckoId: 'arbitrum-one',
	ethersId: 'arbitrum',
	graphUrl:
		'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-arbitrum-one',
	togaAddress: '0xFC63B7C762B10670Eda15cF3ca3970bCDB28C9eF',
	rpcUrl: process.env.REACT_APP_ARBITRUM_RPC_URL,
	getTxLink: (transactionId) => `https://arbiscan.io/tx/${transactionId}`,
};
export const AVALANCHE = {
	name: 'Avalanche',
	coinGeckoId: 'avalanche',
	ethersId: 'avalanche',
	graphUrl:
		'https://thegraph.com/hosted-service/subgraph/superfluid-finance/protocol-v1-avalanche-c',
	togaAddress: '0x3D9A67D5ec1E72CEcA8157e028855056786b6159',
	rpcUrl: process.env.REACT_APP_AVALANCHE_RPC_URL,
	getTxLink: (transactionId) => `https://snowtrace.io/tx/${transactionId}`,
};
export const MUMBAI = {
	name: 'Mumbai',
	ethersId: 'maticmum',
	graphUrl:
		'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-mumbai',
	rpcUrl: process.env.REACT_APP_MUMBAI_RPC_URL,
	getTxLink: (transactionId) =>
		`https://mumbai.polygonscan.com/tx/${transactionId}`,
};
export const GOERLI = {
	name: 'Goerli',
	ethersId: 'goerli',
	togaAddress: '0xa54FC15FC75693447d70a57262F37a70B614721b',
	graphUrl:
		'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli',
	rpcUrl: process.env.REACT_APP_GOERLI_RPC_URL,
	getTxLink: (transactionId) =>
		`https://goerli.etherscan.io/tx/${transactionId}`,
};
export const ROPSTEN = {
	name: 'Ropsten',
	ethersId: 'ropsten',

	graphUrl:
		'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-ropsten',
	rpcUrl: process.env.REACT_APP_ROPSTEN_RPC_URL,
	getTxLink: (transactionId) =>
		`https://ropsten.etherscan.io/tx/${transactionId}`,
};
export const KOVAN = {
	name: 'Kovan',
	ethersId: 'kovan',

	graphUrl:
		'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-kovan',
	rpcUrl: process.env.REACT_APP_KOVAN_RPC_URL,
	getTxLink: (transactionId) =>
		`https://kovan.etherscan.io/tx/${transactionId}`,
};
export const RINKEBY = {
	name: 'Rinkeby',
	ethersId: 'rinkeby',

	graphUrl:
		'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-rinkeby',
	rpcUrl: process.env.REACT_APP_RINKEBY_RPC_URL,
	getTxLink: (transactionId) =>
		`https://rinkeby.etherscan.io/tx/${transactionId}`,
};
export const UNSUPPORTED = { name: 'Unsupported network' };

export const NETWORK_LIST = [
	XDAI,
	MATIC,
	OPTIMISM,
	ARBITRUM,
	AVALANCHE,
	MUMBAI,
	GOERLI,
	ROPSTEN,
	KOVAN,
	RINKEBY,
];

export function getNetworkByEthersId(etherName) {
	console.log("etherName, ", etherName)
	return (
		NETWORK_LIST.find((n) => n.ethersId === etherName.toLowerCase()) ||
		UNSUPPORTED
	);
}
