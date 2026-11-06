import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { createConnector } from 'wagmi';
import { injected, walletConnect } from 'wagmi/connectors';

// RainbowKit opens MetaMask through the MetaMask SDK whenever its own check
// finds an injected provider, or the browser is mobile. That SDK's analytics
// client loads openapi-fetch's `.cjs` build, which Create React App emits as a
// file URL, so constructing the client throws "default is not a function".
//
// `installed` is that check. The provider it accepted is `window.ethereum`.
// On desktop the extension itself is the EIP-6963 connector for this wallet's
// rdns, `io.metamask`. Everywhere else, WalletConnect is wagmi's public
// connector and MetaMask's universal link is the deeplink.
const metaMaskWalletConnectUri = (uri) =>
	`https://metamask.app.link/wc?uri=${encodeURIComponent(uri)}`;

function injectedMetaMaskConnector(provider, walletDetails) {
	return createConnector((config) => ({
		...injected({
			target: () => ({
				id: 'metaMask',
				name: 'MetaMask',
				provider,
			}),
		})(config),
		...walletDetails,
	}));
}

function walletConnectMetaMaskConnector(options, walletDetails) {
	return createConnector((config) => ({
		...walletConnect({
			showQrModal: false,
			customStoragePrefix: 'metaMask',
			...options.walletConnectParameters,
			projectId: options.projectId,
		})(config),
		...walletDetails,
	}));
}

export const metaMaskExtensionWallet = (options) => {
	const wallet = metaMaskWallet(options);
	if (wallet.installed) {
		return {
			...wallet,
			qrCode: undefined,
			mobile: undefined,
			createConnector: (walletDetails) =>
				injectedMetaMaskConnector(
					globalThis.window?.ethereum,
					walletDetails,
				),
		};
	}
	const link = wallet.qrCode?.getUri ?? metaMaskWalletConnectUri;
	return {
		...wallet,
		qrCode: {
			...(wallet.qrCode ?? {}),
			getUri: link,
		},
		mobile: { getUri: link },
		createConnector: (walletDetails) =>
			walletConnectMetaMaskConnector(options, walletDetails),
	};
};
