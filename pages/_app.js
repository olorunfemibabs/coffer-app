"use client"
import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, zora, sepolia, lineaTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import GlobalProvider from "@/context/GlobalContext";
import { Provider } from "react-redux";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { store } from "@/Redux/app/store";
import  { AppWrapper } from "@/hooks/AppContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from "react";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora, sepolia, lineaTestnet],
  [alchemyProvider({ apiKey: '5ShvcS43c_Wrsfk_jTMZOU0sXXBKaVXP' }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Coffer App",
  projectId: "1a7e15dc71f5d3b03fb155264c5d3a74",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
 
});
const client = new QueryClient()

export default function App({ Component, pageProps }) {
  
 

  return (
    <Provider store={store}>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      <ChakraProvider>
        <QueryClientProvider client={client}>
        <GlobalProvider>
            <Component {...pageProps} />
          </GlobalProvider>
        <ToastContainer />
      </QueryClientProvider>
      </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>

    </Provider>
  );
}
