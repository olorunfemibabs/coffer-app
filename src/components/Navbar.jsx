import React, { useContext, useEffect, useState } from "react";

import { navLinks } from "../constants";
import { COFFER } from "../../public/assets";
import Image from "next/image";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useRouter } from "next/router";

import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import RPC from "@/web3RPC";

// Adapters
import { WalletConnectV1Adapter } from "@web3auth/wallet-connect-v1-adapter";
import { shortenHexWithEllipsis } from "../utils";
import { GlobalContext } from "@/context/GlobalContext";
import { useAccount } from "wagmi";

const clientId =
  "BKNEy2rC0a4ddc2vLcG9V-yP6Oq4BH4xliD6sMyR0I21qoyAp5fUT2_nFSYJyTjvpnxyb1YM8CgCEWIh4Be7Hr4";

const Navbar = () => {
  const router = useRouter();

  const { state, dispatch } = useContext(GlobalContext);
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [balance, setBalance] = useState("");
  const [chainId, setChainId] = useState("");
  const [userData, setUserData] = useState({});
  const {address: acc} = useAccount();
  
  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const web3auth = new Web3Auth({
  //         clientId,
  //         chainConfig: {
  //           chainNamespace: CHAIN_NAMESPACES.EIP155,
  //           chainId: "0x1",
  //           rpcTarget: "https://rpc.ankr.com/eth",
  //         },
  //       });

  //       setWeb3auth(web3auth);
  //       await web3auth.initModal();
  //       setProvider(web3auth.provider);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   init();

    
  // }, [provider]);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId, 
          web3AuthNetwork: "testnet", // mainnet, aqua,  cyan or testnet
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
        setProvider(
          web3auth.provider ??
            "https://eth-sepolia.g.alchemy.com/v2/PN7ox_cWivKpFnRnE5YKoJ5Vyp8-Bx5j"
        );
        await web3auth.initModal();

        if (web3auth.connected) {
          setLoggedIn(true);
        }
        // getAccounts()
      } catch (error) {
        console.error(error);
      }
    };

    init();

    window.localStorage.setItem("provider", web3auth?.provider);
  }, [provider]);

  const login = async () => {
    setOpen(false);
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    try {
      const web3authProvider = await web3auth.connect();
      setProvider(
        web3authProvider ??
          "https://eth-sepolia.g.alchemy.com/v2/PN7ox_cWivKpFnRnE5YKoJ5Vyp8-Bx5j"
      );
      getAccounts();
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.logout();
    setProvider(web3authProvider);
    setBalance("");
    setAddress("");
    setUserData({});
    setChainId("");
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    setUserData(user);
    console.log(user);
  };

  const getChainId = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
    setChainId(chainId);
  };
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    setAddress(address?.code ? null : address);
    dispatch({
      type: "SET_ADDRESS",
      payload: address?.code ? null : address,
    });
  };

  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    setBalance(balance);
    console.log(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    console.log(receipt);
  };
  const sendContractTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendContractTransaction();
    console.log(receipt);
  };

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    console.log(privateKey);
  };

  let [open, setOpen] = useState(false);

  useEffect(()=>{
    if(acc){
      router.push('/dashboard/home');
    }
  },[acc])

  return (
    <div>
      <div className="flex items-center justify-between text-[#010101] text-base font-medium">
        <Link href="/">
          <h2 className="text-black text-3xl uppercase orbitron">Coffer</h2>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className=" text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <MdOutlineClose /> : <HiMenuAlt3 />}
        </div>

        <ul
          className={`md:flex bg-white md:bg-transparent md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[100] right-4  w-[70%] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open ? "top-20 rounded-2xl shadow-lg" : "top-[-490px]"
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="lg:ml-[32px] md:ml-[2px] text-base md:my-0 my-7 mb-[10px]"
            >
              <Link
                href={link.address}
                onClick={() => setOpen(false)}
                className={` border border-transparent ${
                  router.pathname == link.address
                    ? "text-[#010101] border !border-[#010101] rounded-2xl px-[24px] py-[8px]"
                    : ""
                }  hover:border hover:text-[#F5F6FF] hover:bg-[#010101] rounded-2xl px-[24px] py-[8px] duration-500 ease-in-out`}
              >
                {link.title}
              </Link>
            </li>
          ))}

          <div className="md:ml-6 md:my-0 my-7 mb-[10px]">
            <ConnectButton />
            {/* {state?.address === null &&
              JSON.parse(state?.token)?.idToken === undefined && (
                <button
                  onClick={login}
                  className=" bg-[#1321A0] text-[#F5F6FF] rounded-[20px] py-[12px] px-[24px] w-[169px] h-[47px] flex justify-center items-center border-[2px]"
                >
                  Login
                </button>
              )}
            {(state?.address !== null ||
              JSON.parse(state?.token)?.idToken !== undefined) && (
              <p className="bg-[#1321A0] text-[#F5F6FF] hover:cursor-default rounded-[20px] py-[12px] px-[24px] w-[169px] h-[47px] flex justify-center items-center border-[2px]">
                {state?.address !== null
                  ? shortenHexWithEllipsis(state?.address, 12)
                  : JSON.parse(state?.token)?.name}
              </p>
            )} */}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
