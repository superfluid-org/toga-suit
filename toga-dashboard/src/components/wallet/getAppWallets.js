import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
	braveWallet,
	walletConnectWallet,
	coinbaseWallet,
	rainbowWallet,
	injectedWallet,
	safeWallet,
} from '@rainbow-me/rainbowkit/wallets';
import mockConnector from './mockConnector/mockConnector';
import { metaMaskExtensionWallet } from './metaMaskExtensionWallet';

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
					metaMaskExtensionWallet,
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
