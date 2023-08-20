/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";
import { getNetwork } from "@wagmi/core";

import STAKE_ABI from "constant/stake_abi.json";
import TOKEN_ABI from "constant/token-abi.json";
import ICO_ABI from "constant/ico_abi.json";
import IDO_ABI from "constant/ido_abi.json";
import LAUNCH_ICO_ABI from "constant/LAUNCH_ICO.json";
import LAUNCH_IDO_ABI from "constant/LAUNCH_IDO.json";
import MINT_ABI from "constant/MINT_ABI.json";
import IDO_FEE_ABI from "constant/ido-fee-token_abi.json";

const AppContext = createContext();

const providerOptions = {
  injected: {
    display: {
      logo: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM1NSIgdmlld0JveD0iMCAwIDM5NyAzNTUiIHdpZHRoPSIzOTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTIuMDA0NzE3IDEzLjgxMDE5OHYtMTguMDU5NDlsNC4yNDUyODMtNC4yNDkyOTJoMjkuNzE2OTgydjIxLjI0NjQ1OSAxNC44NzI1MjNoLTMxLjgzOTYyNGwtMzkuMjY4ODY4LTE2Ljk5NzE2OXoiIGZpbGw9IiNjZGJkYjIiLz48cGF0aCBkPSJtMTk5LjUyODMwNSAzMjcuMTk1NDcyIDUwLjk0MzM5NyAxMy44MTAxOTh2LTE4LjA1OTQ5bDQuMjQ1MjgzLTQuMjQ5MjkyaDI5LjcxNjk4MXYyMS4yNDY0NTkgMTQuODcyNTIzaC0zMS44Mzk2MjNsLTM5LjI2ODg2OC0xNi45OTcxNjl6IiBmaWxsPSIjY2RiZGIyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA0ODMuOTYyMjcgMCkiLz48cGF0aCBkPSJtMTcwLjg3MjY0NCAyODcuODg5NTIzLTQuMjQ1MjgzIDM1LjA1NjY1NyA1LjMwNjYwNC00LjI0OTI5Mmg1NS4xODg2OGw2LjM2NzkyNSA0LjI0OTI5Mi00LjI0NTI4NC0zNS4wNTY2NTctOC40OTA1NjUtNS4zMTE2MTUtNDIuNDUyODMyIDEuMDYyMzIzeiIgZmlsbD0iIzM5MzkzOSIvPjxwYXRoIGQ9Im0xNDIuMjE2OTg0IDUwLjk5MTUwMjIgMjUuNDcxNjk4IDU5LjQ5MDA4NTggMTEuNjc0NTI4IDE3My4xNTg2NDNoNDEuMzkxNTExbDEyLjczNTg0OS0xNzMuMTU4NjQzIDIzLjM0OTA1Ni01OS40OTAwODU4eiIgZmlsbD0iI2Y4OWMzNSIvPjxwYXRoIGQ9Im0zMC43NzgzMDIzIDE4MS42NTcyMjYtMjkuNzE2OTgxNTMgODYuMDQ4MTYxIDc0LjI5MjQ1MzkzLTQuMjQ5MjkzaDQ3Ljc1OTQzNDN2LTM3LjE4MTMwM2wtMi4xMjI2NDEtNzYuNDg3MjUzLTEwLjYxMzIwOCA4LjQ5ODU4M3oiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtODcuMDI4MzAzMiAxOTEuMjE4MTM0IDg3LjAyODMwMjggMi4xMjQ2NDYtOS41NTE4ODYgNDQuNjE3NTYzLTQxLjM5MTUxMS0xMC42MjMyMjl6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkyLjI4MDQ1NyAzNi4wODQ5MDU4IDMzLjk5NDMzNHYzMy45OTQzMzR6IiBmaWxsPSIjZWE4ZDNhIi8+PHBhdGggZD0ibTEyMy4xMTMyMDkgMjI3LjMzNzExNCA0Mi40NTI4MzEgMTAuNjIzMjI5IDEzLjc5NzE3IDQ1LjY3OTg4OC05LjU1MTg4NiA1LjMxMTYxNS00Ni42OTgxMTUtMjcuNjIwMzk4eiIgZmlsbD0iI2Y4OWQzNSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDI2MS4zMzE0NDgtOC40OTA1NjUgNjUuODY0MDI0IDU2LjI1LTM5LjMwNTk0OXoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTc0LjA1NjYwNiAxOTMuMzQyNzggNS4zMDY2MDQgOTAuMjk3NDUxLTE1LjkxOTgxMi00Ni4yMTEwNDl6IiBmaWxsPSIjZWE4ZTNhIi8+PHBhdGggZD0ibTc0LjI5MjQ1MzkgMjYyLjM5Mzc3MSA0OC44MjA3NTUxLTEuMDYyMzIzLTguNDkwNTY1IDY1Ljg2NDAyNHoiIGZpbGw9IiNkODdjMzAiLz48cGF0aCBkPSJtMjQuNDEwMzc3NyAzNTUuODc4MTkzIDkwLjIxMjI2NjMtMjguNjgyNzIxLTQwLjMzMDE5MDEtNjQuODAxNzAxLTczLjIzMTEzMzEzIDUuMzExNjE2eiIgZmlsbD0iI2ViOGYzNSIvPjxwYXRoIGQ9Im0xNjcuNjg4NjgyIDExMC40ODE1ODgtNDUuNjM2NzkzIDM4LjI0MzYyNy0zNS4wMjM1ODU4IDQyLjQ5MjkxOSA4Ny4wMjgzMDI4IDMuMTg2OTY5eiIgZmlsbD0iI2U4ODIxZSIvPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTYuMjUtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIvPjxwYXRoIGQ9Im0yMjkuMjQ1Mjg2IDMyNy4xOTU0NzIgNTUuMTg4NjgtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTEzLjY3OTI1MiAwKSIvPjxwYXRoIGQ9Im0xMzIuNjY1MDk2IDIxMi40NjQ1OTMtMTEuNjc0NTI4IDI0LjQzMzQyNyA0MS4zOTE1MS0xMC42MjMyMjl6IiBmaWxsPSIjMzkzOTM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyODMuMzcyNjQ2IDApIi8+PHBhdGggZD0ibTIzLjM0OTA1NyAxLjA2MjMyMjk2IDE0NC4zMzk2MjUgMTA5LjQxOTI2NTA0LTI0LjQxMDM3OC01OS40OTAwODU4eiIgZmlsbD0iI2U4OGYzNSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5Ni0xOS4xMDM3NzM5MiA1OC40Mjc3NjI5NCAxMC42MTMyMDc3MiA2My43MzkzNzgxLTcuNDI5MjQ1NDEgNC4yNDkyOTIgMTAuNjEzMjA3NzEgOS41NjA5MDYtOC40OTA1NjYxNyA3LjQzNjI2MSAxMS42NzQ1Mjg0NyAxMC42MjMyMjktNy40MjkyNDU0IDYuMzczOTM4IDE2Ljk4MTEzMjMgMjEuMjQ2NDU5IDc5LjU5OTA1NzctMjQuNDMzNDI4YzM4LjkxNTA5Ni0zMS4xNjE0NzMgNTguMDE4ODY5LTQ3LjA5NjMxOCA1Ny4zMTEzMjItNDcuODA0NTMzLS43MDc1NDgtLjcwODIxNS00OC44MjA3NTYtMzcuMTgxMzAzNi0xNDQuMzM5NjI1LTEwOS40MTkyNjUwNHoiIGZpbGw9IiM4ZTVhMzAiLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzOTkuMDU2NjExIDApIj48cGF0aCBkPSJtMzAuNzc4MzAyMyAxODEuNjU3MjI2LTI5LjcxNjk4MTUzIDg2LjA0ODE2MSA3NC4yOTI0NTM5My00LjI0OTI5M2g0Ny43NTk0MzQzdi0zNy4xODEzMDNsLTIuMTIyNjQxLTc2LjQ4NzI1My0xMC42MTMyMDggOC40OTg1ODN6IiBmaWxsPSIjZjg5ZDM1Ii8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkxLjIxODEzNCA4Ny4wMjgzMDI4IDIuMTI0NjQ2LTkuNTUxODg2IDQ0LjYxNzU2My00MS4zOTE1MTEtMTAuNjIzMjI5eiIgZmlsbD0iI2Q4N2MzMCIvPjxwYXRoIGQ9Im04Ny4wMjgzMDMyIDE5Mi4yODA0NTcgMzYuMDg0OTA1OCAzMy45OTQzMzR2MzMuOTk0MzM0eiIgZmlsbD0iI2VhOGQzYSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDIyNy4zMzcxMTQgNDIuNDUyODMxIDEwLjYyMzIyOSAxMy43OTcxNyA0NS42Nzk4ODgtOS41NTE4ODYgNS4zMTE2MTUtNDYuNjk4MTE1LTI3LjYyMDM5OHoiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtMTIzLjExMzIwOSAyNjEuMzMxNDQ4LTguNDkwNTY1IDY1Ljg2NDAyNCA1NS4xODg2OC0zOC4yNDM2MjZ6IiBmaWxsPSIjZWI4ZjM1Ii8+PHBhdGggZD0ibTE3NC4wNTY2MDYgMTkzLjM0Mjc4IDUuMzA2NjA0IDkwLjI5NzQ1MS0xNS45MTk4MTItNDYuMjExMDQ5eiIgZmlsbD0iI2VhOGUzYSIvPjxwYXRoIGQ9Im03NC4yOTI0NTM5IDI2Mi4zOTM3NzEgNDguODIwNzU1MS0xLjA2MjMyMy04LjQ5MDU2NSA2NS44NjQwMjR6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTI0LjQxMDM3NzcgMzU1Ljg3ODE5MyA5MC4yMTIyNjYzLTI4LjY4MjcyMS00MC4zMzAxOTAxLTY0LjgwMTcwMS03My4yMzExMzMxMyA1LjMxMTYxNnoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTY3LjY4ODY4MiAxMTAuNDgxNTg4LTQ1LjYzNjc5MyAzOC4yNDM2MjctMzUuMDIzNTg1OCA0Mi40OTI5MTkgODcuMDI4MzAyOCAzLjE4Njk2OXoiIGZpbGw9IiNlODgyMWUiLz48cGF0aCBkPSJtMTMyLjY2NTA5NiAyMTIuNDY0NTkzLTExLjY3NDUyOCAyNC40MzM0MjcgNDEuMzkxNTEtMTAuNjIzMjI5eiIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjgzLjM3MjY0NiAwKSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5NiAxNDQuMzM5NjI1IDEwOS40MTkyNjUwNC0yNC40MTAzNzgtNTkuNDkwMDg1OHoiIGZpbGw9IiNlODhmMzUiLz48cGF0aCBkPSJtMjMuMzQ5MDU3IDEuMDYyMzIyOTYtMTkuMTAzNzczOTIgNTguNDI3NzYyOTQgMTAuNjEzMjA3NzIgNjMuNzM5Mzc4MS03LjQyOTI0NTQxIDQuMjQ5MjkyIDEwLjYxMzIwNzcxIDkuNTYwOTA2LTguNDkwNTY2MTcgNy40MzYyNjEgMTEuNjc0NTI4NDcgMTAuNjIzMjI5LTcuNDI5MjQ1NCA2LjM3MzkzOCAxNi45ODExMzIzIDIxLjI0NjQ1OSA3OS41OTkwNTc3LTI0LjQzMzQyOGMzOC45MTUwOTYtMzEuMTYxNDczIDU4LjAxODg2OS00Ny4wOTYzMTggNTcuMzExMzIyLTQ3LjgwNDUzMy0uNzA3NTQ4LS43MDgyMTUtNDguODIwNzU2LTM3LjE4MTMwMzYtMTQ0LjMzOTYyNS0xMDkuNDE5MjY1MDR6IiBmaWxsPSIjOGU1YTMwIi8+PC9nPjwvZz48L3N2Zz4=",
      name: "Metamask",
      description: "Connect to Metamask",
    },
    package: null,
  },
};

import { chainInfo, chainInfokeys, supportedChains } from "constant/constants";

import WalletConnectProvider from "@walletconnect/web3-provider";
import { toast } from "react-toastify";
import {
  useAccount,
  useContractRead,
  useContractReads,
  useDisconnect,
} from "wagmi";
import { formatEther } from "viem";

const provider = new WalletConnectProvider({
  rpc: {
    1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    47: "https://ds1.exx.network/",
    56: "https://bsc-dataseed1.defibit.io/",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    42161: "https://arbitrum-one.public.blastapi.io",
  },
});
const walletConnectweb3 = new Web3(provider);
const web3BscTest = new Web3(chainInfo.bsc_testnet.rpc);
const web3EXXTest = new Web3(chainInfo.exx_testnet.rpc);
const web3BSC = new Web3(chainInfo.bsc.rpc);
const web3Arbitrum = new Web3(chainInfo.arbitrum.rpc);
const web3Eth = new Web3(chainInfo.eth.rpc);

import { useWalletClient } from "wagmi";

export function AppWrapper({ children }) {
  let networkId = 0;
  let walletName = "";
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { chain: chain_ } = getNetwork();
  const [cardData, setCardData] = useState({
    stake: 0,
    stakers: 0,
    rank: 0,
    totalValue: "",
    countDown: 0,
  });
  const [walletConnected, setWalletConnected] = useState(isConnected);
  const [accountAddress, setAccountAddress] = useState(address);
  const [chainID, setChainID] = useState(chain_?.id);
  // const [web3, setWeb3] = useState(walletConnectweb3);
  const [ethBal, setEthBal] = useState(0);
  const [EXXBAl, setEXXBal] = useState(0);
  const [USDTBal, setUSDTBal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [chain, setChain] = useState(chain_?.network);
  const [chainUtilInfo, setChainUtilInfo] = useState(chainInfo.bsc_testnet);
  const [webExt, setWebExt] = useState(walletConnectweb3);
  const [isActiveStake, setIsActiveStake] = useState(false);
  const web3 = new Web3(Web3.givenProvider);

  useEffect(async () => {
    setDataset(chain_?.network);
    setChainID(chain_?.id);
    setChain(chain_?.network);
    setAccountAddress(address);
  }, [address, chain_]);

  const setDataset = (chain_) => {
    switch (chain_) {
      case "bsc":
        setChain("bsc");
        setChainUtilInfo(chainInfo.bsc);
        networkId = 56;
        setWebExt(web3BSC);
        break;
      case "bsc-testnet":
        setChain("bsc-testnet");
        setChainUtilInfo(chainInfo.bsc_testnet);
        networkId = 97;
        setWebExt(web3BscTest);
        break;
      case "eth":
        setChain("eth");
        setChainUtilInfo(chainInfo.eth);
        networkId = 1;
        setWebExt(web3Eth);
        break;
      case "exx_testnet":
        setChain("exx_testnet");
        setChainUtilInfo(chainInfo.exx_testnet);
        networkId = 47;
        setWebExt(web3EXXTest);
        break;
      case "arbitrum":
        setChain("arbitrum");
        setChainUtilInfo(chainInfo.arbitrum);
        networkId = 42161;
        setWebExt(web3Arbitrum);
        break;
      default:
        setChain("arbitrum");
        setChainUtilInfo(chainInfo.arbitrum);
        networkId = 42161;
        setWebExt(web3BSC);
        break;
    }
  };

  const walletConnect = async () => {
    try {
      await provider.enable();
      const accounts = await walletConnectweb3.eth.getAccounts();

      //  Get Network Id
      const networkId = await walletConnectweb3.eth.net.getId();
      if (supportedChains.includes(networkId)) {
        walletName = "walletconnect";
        setDataset(chainInfokeys[networkId].chain);
      } else {
        toast.error(
          "Error Chain not supported, please switch to supported chain",
          {
            autoClose: false,
          }
        );
      }

      setWalletConnected(true);
      setWeb3(walletConnectweb3);
      setAccountAddress(accounts[0]);
      localStorage.setItem(
        "UserConnected",
        JSON.stringify({
          isLogIn: true,
          address: accounts[0],
          chainId: networkId,
        })
      );
      // signUp({
      //   walletAddress: accounts[0],
      // });
      // const signatureMsg = await getSignatureMsg({
      //   walletAddress: accounts[0],
      // });

      // if (signatureMsg) {
      //   const signature = await walletConnectweb3.eth.sign(
      //     signatureMsg,
      //     accounts[0]
      //   );

      //   // if (signature) {
      //   const result = await axios.post(`${baseURL}/auth`, {
      //     walletAddress: accounts[0],
      //     signature,
      //   });
      //   console.log("LOGIN_RESULT", result);
      //   if (result.status === 201) {
      //     toast.success("Sign in successfully");
      //     localStorage.setItem("token", result?.data?.access_token);
      //     localStorage.setItem("userType", result?.data?.user?.role);
      //   }
      //   // }
      // }
    } catch (error) {
      console.log(error);
      console.log("Error", "user rejected", "error");
    }
  };

  // Account and Network change

  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(Web3.givenProvider);
      setWeb3(web3);
      const account = await web3.eth.getAccounts();
      console.log(account, "accounts");
      if (account) {
        let _chainId = Number.parseInt(
          window.ethereum.chainId?.replace(/0x/g, ""),
          16
        );
        if (supportedChains.includes(_chainId)) {
          setDataset(chainInfokeys[_chainId].chain);
        } else {
          toast.error(
            "Error Chain not supported, please switch to supported chain",
            {
              autoClose: false,
            }
          );
        }

        setWalletConnected(true);
        setAccountAddress(account[0]);
        if (_chainId == chainUtilInfo?.id) {
          await updateBal();
          setChainID(_chainId);
        }

        localStorage.setItem(
          "UserConnected",
          JSON.stringify({
            isLogIn: true,
            address: account[0],
            chainId: _chainId,
          })
        );

        let ethereum = window.ethereum;
        ethereum.on("accountsChanged", async (accounts) => {
          localStorage.removeItem("userType");
          localStorage.removeItem("token");
          try {
            const account = await web3.eth.getAccounts();
            setWalletConnected(true);

            setAccountAddress(account[0]);
            localStorage.setItem(
              "UserConnected",
              JSON.stringify({
                isLogIn: true,
                address: account[0],
                chainId: _chainId,
              })
            );
            console.log(account);
            await updateBal();
            // console.log(ethereum.chainId);
            location.reload();
          } catch (e) {}
        });

        ethereum.on("chainChanged", async (chainId) => {
          try {
            // debugger;
            let _chainId = Number.parseInt(chainId?.replace(/0x/g, ""), 16);
            if (supportedChains.includes(_chainId)) {
              setDataset(chainInfokeys[_chainId].chain);
            } else {
              toast.error(
                "Error Chain not supported, please switch to supported chain",
                {
                  autoClose: false,
                }
              );
            }
            if (_chainId == networkId) {
              setWalletConnected(true);
              setAccountAddress(account[0]);
              await updateBal();
              location.reload();
              setChainID(chainId);
            } else {
              setChainID(_chainId);
              await switchChain(chainUtilInfo.idHex);
            }
          } catch (e) {}
        });
        // console.log(listener);
      }
    } else {
      console.log("Error", "Metamask not Installed!", "error");
    }
  };

  const stakeContract = {
    address: chainUtilInfo.STAKE,
    abi: STAKE_ABI,
  };

  const tokenContract = {
    address: chainUtilInfo.TOKEN,
    abi: TOKEN_ABI,
    args: [address],
  };

  const launchPresaleContract = {
    address: chainUtilInfo.LAUNCH,
    abi: LAUNCH_ICO_ABI,
  };

  const launchIdoContract = {
    address: chainUtilInfo.LaunchIDO,
    abi: LAUNCH_IDO_ABI,
  };

  const presaleContract = (address) => {
    let presaleContractObject = {
      address: address,
      abi: ICO_ABI,
    };
    return presaleContractObject;
  };
  const idoContract = (address) => {
    let idoContractObject = {
      address: address,
      abi: IDO_ABI,
    };
    return idoContractObject;
  };

  const getTokenBalance = useContractRead({
    address: chainUtilInfo.TOKEN,
    abi: TOKEN_ABI,
    args: [address],
    functionName: "balanceOf",
    onSuccess(data) {
      setEXXBal(formatEther(data));
      console.log("Success", data);
    },
    enabled: Boolean(address),
  });

  const fetchUserData = async () => {
    const web3 = new Web3(Web3.givenProvider);
    let stakeContract = new web3.eth.Contract(STAKE_ABI, chainUtilInfo.STAKE);
    try {
      if (address) {
        let yourStake = await stakeContract.methods
          .getStakeAmount(accountAddress)
          .call();

        let rank = await stakeContract.methods.getRank(accountAddress).call();
        let totalStakers = await stakeContract.methods
          .getTotalActiveStakers()
          .call();
        let remainingDuration = await stakeContract.methods
          .getEndDate(accountAddress)
          .call();
        let activeStakeStatus = await stakeContract.methods
          .getStakeActive(accountAddress)
          .call();
        setIsActiveStake(activeStakeStatus);

        setCardData({
          ...cardData,
          stake: Math.floor(Number(yourStake) / 10 ** 18),
          rank: rank,
          stakers: totalStakers,
          countDown: remainingDuration,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (address) {
      getTokenBalance;
      fetchUserData();
    }
  }, [address, chainID]);

  async function onDisconnect() {
    // Check if wallet is connected
    disconnect();
    localStorage.clear();
    setAccountAddress("0x0");
    setWalletConnected(false);
  }

  const [count, setCount] = useState(0);

  let sharedState = {
    connectWallet,
    walletConnect,
    walletConnected,
    accountAddress,
    chainID,
    web3,
    EXXBAl,
    ethBal,
    chain,
    chainUtilInfo,
    setDataset,
    onDisconnect,
    USDTBal,
    walletConnectweb3,
    cardData,
    count,
    setCount,
    stakeContract,
    tokenContract,
    launchIdoContract,
    launchPresaleContract,
    presaleContract,
    idoContract,
    address,
    webExt,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
