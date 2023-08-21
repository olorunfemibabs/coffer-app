import React, { useContext, useState } from "react";
import Image from "next/image";
import { Hero_Image } from "@/public/assets";
import { GlobalContext } from "@/context/GlobalContext";
import RPC from "@/web3RPC";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { WalletConnectV1Adapter } from "@web3auth/wallet-connect-v1-adapter";
// import { ColorRing } from "react-loader-spinner";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Star_1 } from "@/public/assets";

const Hero = () => {
  const [web3auth, setWeb3auth] = useState(null);
  const { state, dispatch } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  // const clientId =
  //   "BKNEy2rC0a4ddc2vLcG9V-yP6Oq4BH4xliD6sMyR0I21qoyAp5fUT2_nFSYJyTjvpnxyb1YM8CgCEWIh4Be7Hr4";

  // const init = async () => {
    // try {
    //   const web3auth = new Web3Auth({
    //     clientId,
    //     chainConfig: {
    //       chainNamespace: CHAIN_NAMESPACES.EIP155,
    //       chainId: "0xaa36a7",
    //       rpcTarget: "https://endpoints.omniatech.io/v1/eth/sepolia/public",
    //     },
    //     web3AuthNetwork: "cyan",
    //   });

      // adding metamask adapter

      // const metamaskAdapter = new MetamaskAdapter({
      //   clientId,
      //   sessionTime: 3600, // 1 hour in seconds
      //   web3AuthNetwork: "cyan",
      //   chainConfig: {
      //     chainNamespace: CHAIN_NAMESPACES.EIP155,
      //     chainId: "0xaa36a7",
      //     // chainId: "0x11155111",
      //     rpcTarget: "https://endpoints.omniatech.io/v1/eth/sepolia/public", // This is the public RPC we have added, please pass on your own endpoint while creating an app
      //   },
      // });

      // it will add/update  the metamask adapter in to web3auth class
      // web3auth.configureAdapter(metamaskAdapter);

      // const walletConnectV1Adapter = new WalletConnectV1Adapter({
      //   adapterSettings: {
      //     bridge: "https://bridge.walletconnect.org",
      //   },
      //   clientId,
      // });

  //     web3auth.configureAdapter(walletConnectV1Adapter);
  //     setWeb3auth(web3auth);
  //     await web3auth.initModal();

  //     if (web3auth.connected) {
  //       setLoggedIn(true);
  //     }
  //     return web3auth;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const getAccounts = async () => {
  //   const rpc = new RPC();
  //   const address = await rpc.getAccounts();
  //   setLoading(false);
  //   dispatch({
  //     type: "SET_ADDRESS",
  //     payload: address?.code ? null : address,
  //   });
  // };

  const login = async () => {
    setLoading(true);
    init().then(async (res) => {
      try {
        setLoading(false);
        const web3authProvider = await res.connect();
        console.log(Object.keys(web3authProvider));
        if (Object.keys(web3authProvider).length === 0) {
          dispatch({
            type: "SET_TOKEN",
            payload:
              typeof window !== "undefined" &&
              localStorage.getItem("openlogin_store"),
          });
        } else getAccounts();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    });
  };
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6 sm-px-16 px- side gap-16 bg-[#F5F6FF] z-20">
      <div className=" w-4/5 flex justify-center items-start flex-col xl:px-0 sm:px-6 px-6">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-normal sm:text-[57px] text-[44px] text-[rgb(1,1,1)] sm:leading-[100.8px] leading-[75px] side">
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
          <ConnectButton />
          {/* {state?.address === null &&
            JSON.parse(state?.token)?.idToken === undefined && (
              <button
                onClick={login}
                className="flex items-center gap-2 bg-[#1321A0] text-[#F5F6FF] rounded-[20px] py-[12px] px-[24px] w-fit h-[47px]  justify-center border-[2px]"
              >
                Connect Wallet
                {loading && (
                  <ColorRing
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                )}
              </button>
            )} */}
          {/* {(state?.address !== null ||
            JSON.parse(state?.token)?.idToken !== undefined) && (
            <span className="bg-[#1321A0] text-[#F5F6FF] hover:cursor-default rounded-[20px] py-[12px] px-[24px] w-fit h-[47px] flex justify-center items-center border-[2px]">
              Account Connected
            </span>
          )} */}
        </div>

        <div className=" md:flex just justify-start items-center hidden mt-10">
          <Image
            src={Star_1}
            alt="ellipse"
            width={20}
            height={20}
            className=" ml-36"
          />
        </div>
      </div>

      <div className=" w-[570] md:flex items-center justify-center hidden xl:block md:my-0 my-10 relative ">
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
