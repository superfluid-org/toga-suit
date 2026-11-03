import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
	metaMaskWallet,
	braveWallet,
	walletConnectWallet,
	coinbaseWallet,
	rainbowWallet,
	injectedWallet,
	safeWallet,
} from '@rainbow-me/rainbowkit/wallets';
import mockConnector from './mockConnector/mockConnector';

export const getAppWallets = ({ appName, projectId }) => {
	const needsMock =
		typeof window !== 'undefined' &&
		typeof window.mockSigner !== 'undefined';

	return connectorsForWallets(
		[
			{
				groupName: 'Popular',
				wallets: [
					injectedWallet,
					safeWallet,
					braveWallet,
					metaMaskWallet,
					walletConnectWallet,
					coinbaseWallet,
					rainbowWallet,
					...(needsMock ? [mockConnector] : []),
				],
			},
		],
		{ appName, projectId },
	);
};
