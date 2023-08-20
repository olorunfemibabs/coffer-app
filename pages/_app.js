import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {sepolia, mainnet, polygon, optimism, arbitrum, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Provider } from "react-redux";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { store } from "@/Redux/app/store";
import  { AppWrapper } from "@/hooks/AppContext";
import dotenv from "dotenv"
dotenv.config()

const { chains, publicClient} = configureChains(
  [sepolia, mainnet, polygon, optimism, arbitrum],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        // http: `https://eth-sepolia.g.alchemy.com/v2/5ShvcS43c_Wrsfk_jTMZOU0sXXBKaVXP`,
        http: `https://eth-sepolia.g.alchemy.com/v2/K3WQD6pWbUy8xzRs3s8OVYppcMyoCWjE`,
        WebSocket: `wss://eth-sepolia.g.alchemy.com/v2/K3WQD6pWbUy8xzRs3s8OVYppcMyoCWjE`,
      }),
    }),

  ]
  // [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
 
});

export default function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      {/* <AppWrapper> */}
        <Component {...pageProps} />
      {/* </AppWrapper> */}
      </RainbowKitProvider>
    </WagmiConfig>

    // </Provider>
  );
}
