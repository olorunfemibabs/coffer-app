import React, { useEffect, useState } from "react";

import { navLinks } from "../constants";
import { COFFER } from "../../public/assets";
import Image from "next/image";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useRouter } from "next/router";

import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import RPC from "@/web3RPC";

const clientId =
  "BKNEy2rC0a4ddc2vLcG9V-yP6Oq4BH4xliD6sMyR0I21qoyAp5fUT2_nFSYJyTjvpnxyb1YM8CgCEWIh4Be7Hr4";

const Navbar = () => {
  const router = useRouter();

  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [chainId, setChainId] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x11155111",
            rpcTarget: "https://rpc.ankr.com/eth",
          },
        });

        setWeb3auth(web3auth);
        await web3auth.initModal();
        setProvider(web3auth.provider);
      } catch (error) {
        console.error(error);
      }
    };

    init();

    window.localStorage.setItem("provider", JSON.stringify(provider));
  }, [provider]);

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
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
    setAddress(address);
    console.log(address);
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

  return (
    <div>
      <div className=" flex items-center justify-between text-[#010101] text-base font-medium">
        <Link href="/">
          <Image
            src={COFFER}
            alt="coffer-logo"
            width={150}
            height={48}
            className=" object-contain"
          />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className=" text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <MdOutlineClose /> : <HiMenuAlt3 />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[100] right-4  w-[70%] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open ? "top-20 bg-[#98A1F9] rounded-2xl shadow-lg" : "top-[-490px]"
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="md:ml-[32px] text-base md:my-0 my-7 mb-[10px]"
            >
              <Link
                href={link.address}
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
            <button
              onClick={login}
              className=" bg-[#1321A0] text-[#F5F6FF] rounded-[20px] py-[12px] px-[24px] w-[169px] h-[47px] border-[2px]"
            >
              Login
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
