import {
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import { getAppWallets } from "./getAppWallets";
import { NETWORK_LIST } from "../../constants/networks";
import { useContext } from "react";
import { NetworkContext } from "../context";
import AddressAvatar from "./AddressAvatar";

const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: NETWORK_LIST,
  connectors: getAppWallets({
    appName: "Toga Dashboard",
    projectId: process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID,
  }),
  transports: Object.fromEntries(
    NETWORK_LIST.map((network) => [network.id, http(network.rpcUrls.superfluid)]),
  ),
});

const WagmiManager = ({ children }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default WagmiManager;

const Disclaimer = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you accept our{" "}
    <Link href="https://www.superfluid.finance/termsofuse/">Terms of Use</Link>
    {" and "}
    <Link href="https://www.iubenda.com/privacy-policy/34415583/legal">
      Privacy Policy
    </Link>
  </Text>
);

export const RainbowKitManager = ({ children }) => {
  const { selectedNetwork: network } = useContext(NetworkContext);

  const initialChainId = network?.chainId || NETWORK_LIST[0].id;

  return (
    <RainbowKitProvider
      initialChain={initialChainId}
      avatar={AddressAvatar}
      appInfo={{ disclaimer: Disclaimer }}
      theme={
        lightTheme({
          borderRadius: "medium",
        })
      }
    >
      {children}
    </RainbowKitProvider>
  );
};
