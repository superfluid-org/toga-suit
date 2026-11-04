import { createConnector } from 'wagmi';
import { NETWORK_LIST, findNetworkOrThrow } from '../../../constants/networks';

const mockConnector = () => ({
	id: 'mock',
	name: 'Mock',
	shortName: 'Mock',
	iconUrl: '/icons/icon-96x96.png',
	iconBackground: '#000000',
	createConnector: (walletDetails) =>
		createConnector((config) => {
			const provider = window.mockBridge;
			const mockWallet = window.mockWallet;
			const chain = findNetworkOrThrow(NETWORK_LIST, mockWallet.chainId);

			return {
				id: 'mock',
				name: 'Mock',
				type: 'mock',
				async connect() {
					const accounts = [mockWallet.getAddress()];
					return { accounts, chainId: chain.id };
				},
				async disconnect() {},
				async getAccounts() {
					return [mockWallet.getAddress()];
				},
				async getChainId() {
					return chain.id;
				},
				async getProvider() {
					return provider;
				},
				async isAuthorized() {
					return true;
				},
				async switchChain({ chainId }) {
					const next = findNetworkOrThrow(NETWORK_LIST, chainId);
					config.emitter.emit('change', { chainId: next.id });
					return next;
				},
				onAccountsChanged() {},
				onChainChanged() {},
				onDisconnect() {},
				...walletDetails,
			};
		}),
});

export default mockConnector;
