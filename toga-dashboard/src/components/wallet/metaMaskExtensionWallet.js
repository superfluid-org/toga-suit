import { createConnector } from 'wagmi';
import { injected, walletConnect } from 'wagmi/connectors';

// RainbowKit's MetaMask wallet constructs wagmi's `metaMask` connector, which
// imports @metamask/sdk. This one connects the extension directly. Claiming
// `rdns` makes wagmi skip its own discovered MetaMask connector, so the
// provider has to be resolved here, including EIP-6963. WalletConnect is only
// the fallback when that provider is not there.
const metaMaskIcon =
	'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2228%22%20fill%3D%22none%22%20viewBox%3D%220%200%2028%2028%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h28v28H0z%22%2F%3E%3Cg%20clip-path%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23ff5c16%22%20d%3D%22m24.024%2023.824-4.846-1.434-3.655%202.172-2.55-.001-3.656-2.171-4.844%201.434L3%2018.88l1.473-5.488L3%208.751%204.473%203l7.569%204.496h4.413L24.024%203l1.473%205.751-1.473%204.64%201.473%205.488z%22%2F%3E%3Cpath%20fill%3D%22%23ff5c16%22%20d%3D%22m4.474%203%207.57%204.499-.302%203.087zm4.844%2015.881%203.33%202.522-3.33.987zm3.064-4.17-.64-4.123-4.097%202.804h-.002v.001l.013%202.886%201.661-1.567zM24.024%203l-7.57%204.499.3%203.087zM19.18%2018.881l-3.33%202.522%203.33.987zm1.674-5.488v-.002zl-4.097-2.804-.64%204.124h3.064l1.662%201.567z%22%2F%3E%3Cpath%20fill%3D%22%23e34807%22%20d%3D%22m9.317%2022.39-4.844%201.434L3%2018.881h6.317zm3.064-7.68.925%205.962-1.282-3.315-4.37-1.078%201.662-1.568zm6.799%207.68%204.844%201.434%201.473-4.943H19.18zm-3.064-7.68-.925%205.962%201.282-3.315%204.37-1.078-1.663-1.568z%22%2F%3E%3Cpath%20fill%3D%22%23ff8d5d%22%20d%3D%22m3%2018.88%201.473-5.489h3.169l.012%202.887%204.37%201.078%201.282%203.314-.659.73-3.33-2.522H3zm22.497%200-1.473-5.489h-3.17l-.01%202.887-4.371%201.078-1.282%203.314.659.73%203.33-2.522h6.317zM16.455%207.495h-4.413l-.3%203.087%201.565%2010.084h1.884l1.565-10.084z%22%2F%3E%3Cpath%20fill%3D%22%23661800%22%20d%3D%22M4.473%203%203%208.751l1.473%204.64h3.169l4.1-2.805zm6.992%2012.908H10.03l-.781.761%202.776.685-.56-1.447M24.024%203l1.473%205.751-1.473%204.64h-3.17l-4.098-2.805zm-6.99%2012.908h1.437l.782.762-2.78.686.56-1.45zm-1.512%206.687.328-1.193-.66-.73h-1.885l-.659.73.327%201.192%22%2F%3E%3Cpath%20fill%3D%22%23c0c4cd%22%20d%3D%22M15.522%2022.594v1.969h-2.548v-1.969z%22%2F%3E%3Cpath%20fill%3D%22%23e7ebf6%22%20d%3D%22m9.318%2022.388%203.658%202.174v-1.969l-.328-1.192zm9.862%200-3.658%202.174v-1.969l.328-1.192z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M3%203h22.5v21.563H3z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E';

const metaMaskWalletConnectUri = (uri) =>
	`https://metamask.app.link/wc?uri=${encodeURIComponent(uri)}`;

// Other wallets set `isMetaMask`. These are the ones wagmi's built-in target
// misses, plus Brave and Rainbow, which this dashboard also shows.
function injectedMetaMaskProvider(provider) {
	if (!provider?.isMetaMask) {
		return undefined;
	}
	if (provider.isBraveWallet && !provider._events && !provider._state) {
		return undefined;
	}
	if (
		provider.isCoinbaseWallet ||
		provider.isRainbow ||
		provider.isTrust ||
		provider.isTrustWallet
	) {
		return undefined;
	}
	return provider;
}

function providerAnnouncedAsMetaMask() {
	if (typeof window === 'undefined' || !window.addEventListener) {
		return undefined;
	}
	let provider;
	const onAnnounce = (event) => {
		if (event?.detail?.info?.rdns !== 'io.metamask') {
			return;
		}
		provider = event.detail.provider;
	};
	window.addEventListener('eip6963:announceProvider', onAnnounce);
	window.dispatchEvent(new Event('eip6963:requestProvider'));
	window.removeEventListener('eip6963:announceProvider', onAnnounce);
	return provider;
}

function metaMaskProvider() {
	const announced = providerAnnouncedAsMetaMask();
	if (announced) {
		return announced;
	}
	const ethereum = window?.ethereum;
	return (
		injectedMetaMaskProvider(ethereum) ||
		ethereum?.providers?.find((provider) => injectedMetaMaskProvider(provider))
	);
}

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
	const provider = metaMaskProvider();
	const link = metaMaskWalletConnectUri;
	return {
		id: 'metaMask',
		name: 'MetaMask',
		rdns: 'io.metamask',
		iconUrl: metaMaskIcon,
		iconAccent: '#f6851a',
		iconBackground: '#fff',
		installed: provider ? true : undefined,
		downloadUrls: {
			android:
				'https://play.google.com/store/apps/details?id=io.metamask',
			ios: 'https://apps.apple.com/us/app/metamask/id1438144202',
			mobile: 'https://metamask.io/download',
			qrCode: 'https://metamask.io/download',
			chrome:
				'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
			edge: 'https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm',
			firefox: 'https://addons.mozilla.org/firefox/addon/ether-metamask',
			opera: 'https://addons.opera.com/extensions/details/metamask-10',
			browserExtension: 'https://metamask.io/download',
		},
		qrCode: provider ? undefined : { getUri: link },
		mobile: provider ? undefined : { getUri: link },
		createConnector: provider
			? (walletDetails) =>
					injectedMetaMaskConnector(provider, walletDetails)
			: (walletDetails) =>
					walletConnectMetaMaskConnector(options, walletDetails),
	};
};
