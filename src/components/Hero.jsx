import React, { useContext, useState } from "react";
import Image from "next/image";
import { Hero_Image } from "@/public/assets";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { GlobalContext } from "@/context/GlobalContext";
import RPC from "@/web3RPC";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { WalletConnectV1Adapter } from "@web3auth/wallet-connect-v1-adapter";

const Hero = () => {
  const [web3auth, setWeb3auth] = useState(null);
  const { state, dispatch } = useContext(GlobalContext)
  const clientId =
    "BKNEy2rC0a4ddc2vLcG9V-yP6Oq4BH4xliD6sMyR0I21qoyAp5fUT2_nFSYJyTjvpnxyb1YM8CgCEWIh4Be7Hr4";

  const init = async () => {
    try {
      const web3auth = new Web3Auth({
        clientId,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0xaa36a7",
          rpcTarget: "https://endpoints.omniatech.io/v1/eth/sepolia/public",
        },
        web3AuthNetwork: "cyan",
      });

      // adding metamask adapter

      const metamaskAdapter = new MetamaskAdapter({
        clientId,
        sessionTime: 3600, // 1 hour in seconds
        web3AuthNetwork: "cyan",
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0xaa36a7",
          // chainId: "0x11155111",
          rpcTarget: "https://endpoints.omniatech.io/v1/eth/sepolia/public", // This is the public RPC we have added, please pass on your own endpoint while creating an app
        },
      });

      // it will add/update  the metamask adapter in to web3auth class
      web3auth.configureAdapter(metamaskAdapter);

      const walletConnectV1Adapter = new WalletConnectV1Adapter({
        adapterSettings: {
          bridge: "https://bridge.walletconnect.org",
        },
        clientId,
      });

      web3auth.configureAdapter(walletConnectV1Adapter);
      setWeb3auth(web3auth);
      await web3auth.initModal();

      if (web3auth.connected) {
        setLoggedIn(true);
      }
      return web3auth
    } catch (error) {
      console.error(error);
    }
  };

  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC();
    const address = await rpc.getAccounts();
    dispatch({
      type: "SET_ADDRESS",
      payload: address?.code ? null : address
    })
  };

  const login = async () => {
    // if (!web3auth) {
    //   console.log("web3auth not initialized yet");
    //   return;
    // }
    init().then(async (res) => {
      try {
        const web3authProvider = await res.connect();
        setProvider(web3authProvider ?? "https://eth-sepolia.g.alchemy.com/v2/PN7ox_cWivKpFnRnE5YKoJ5Vyp8-Bx5j");
        getAccounts();
      } catch (error) {
        console.log(error)
      }
    })
  }
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6 sm-px-16 px- side gap-16 bg-[#F5F6FF]">
      <div className="flex-2 flex justify-center items-start flex-col xl:px-0 sm:px-6 px-6">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-normal sm:text-[64px] text-[44px] text-[rgb(1,1,1)] sm:leading-[100.8px] leading-[75px] side">
            Unleash Your Memories: <br className="sm:block hidden" />{" "}
            <p>
              Easy <span className="text-[#1b2ab8]">Photo Storage</span>
            </p>{" "}
          </h1>
        </div>

        <h1 className=" font-normal sm:text-[64px] text-[44px] text-[#010101] sm:leading-[100.8px] leading-[75px] w-full side">
          with Coffer.
        </h1>
        <p className="font-normal grotesk text-[#010101] text-[18px] leading-[30.8px] max-w-[889px] mt-5">
          The safest solution for storing your precious memories. your photos
          are securely stored on the blockchain, ensuring unparalleled privacy
          and accessibility.
        </p>
        <div className="mt-8">
          {state?.address === null &&
            // <ConnectButton />
            <button
              onClick={login}
              className=" bg-[#1321A0] text-[#F5F6FF] rounded-[20px] py-[12px] px-[24px] w-fit h-[47px] flex justify-center items-center border-[2px]"
            >
              Connect Wallet
            </button>
          }
          {state?.address !== null &&
            <span className="bg-[#1321A0] text-[#F5F6FF] hover:cursor-default rounded-[20px] py-[12px] px-[24px] w-fit h-[47px] flex justify-center items-center border-[2px]">Account Connected</span>
          }
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center hidden xl:block md:my-0 my-10 relative ">
        <Image
          src={Hero_Image}
          alt="hero-image"
          width={570}
          height={640}
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
