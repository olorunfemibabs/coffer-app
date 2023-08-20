import Business from "@/src/components/Business";
import Clients from "@/src/components/Clients";
import Deals from "@/src/components/Deals";
import Footer from "@/src/components/Footer";
import Goal from "@/src/components/Goal";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Objective from "@/src/components/Objective";
import Testimonials from "@/src/components/Testimonials";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useEffect, useState } from "react";
// import { Web3Auth } from "@web3auth/modal";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import RPC from "@/web3RPC";
import { useDispatch } from "react-redux";
import { init, login } from "@/Redux/features/walletConnect";
import { useAppContext } from "@/hooks/AppContext";

// const clientId =
//   "BKNEy2rC0a4ddc2vLcG9V-yP6Oq4BH4xliD6sMyR0I21qoyAp5fUT2_nFSYJyTjvpnxyb1YM8CgCEWIh4Be7Hr4";

export default function Home() {
  const app = useAppContext();
  // const dispatch = useDispatch()
  // const [web3auth, setWeb3auth] = useState(null);
  // const [provider, setProvider] = useState(null);
  // const [address, setAddress] = useState("");
  // const [balance, setBalance] = useState("");
  // const [chainId, setChainId] = useState("");
  // const [userData, setUserData] = useState({});

  let styles = {
    button: {
      width: "100%",
      maxWidth: 200,
      cursor: "pointer",
      background: "#8347E5",
      border: "1px solid #8347E5",
      boxSizing: "border-box",
      borderRadius: "15px",
      fontSize: 16,
      color: "#000000",
      fontWeight: 700,
      padding: "12px 30px 12px 30px",
      marginTop: 15,
      display: "flex",
      justifyContent: "center",
    },
  };

  // useEffect(() => {
  //   // const init = async () => {
  //   //   try {
  //   //     const web3auth = new Web3Auth({
  //   //       clientId,
  //   //       chainConfig: {
  //   //         chainNamespace: CHAIN_NAMESPACES.EIP155,
  //   //         chainId: "0x1",
  //   //         rpcTarget: "https://rpc.ankr.com/eth",
  //   //       },
  //   //     });

  //   //     setWeb3auth(web3auth);
  //   //     await web3auth.initModal();
  //   //     setProvider(web3auth.provider);
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }
  //   // };

  //   // init();
  //   dispatch(init())

  // }, [init]);

  
  // const login = async () => {
  //   if (!web3auth) {
  //     console.log("web3auth not initialized yet");
  //     return;
  //   }
  //   const web3authProvider = await web3auth.connect();
  //   setProvider(web3authProvider);
  // };
  // const logout = async () => {
  //   if (!web3auth) {
  //     console.log("web3auth not initialized yet");
  //     return;
  //   }
  //   const web3authProvider = await web3auth.logout();
  //   setProvider(web3authProvider);
  //   setBalance("");
  //   setAddress("");
  //   setUserData({});
  //   setChainId("");
  // };

  // const getUserInfo = async () => {
  //   if (!web3auth) {
  //     console.log("web3auth not initialized yet");
  //     return;
  //   }
  //   const user = await web3auth.getUserInfo();
  //   setUserData(user);
  //   console.log(user);
  // };

  // const getChainId = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const chainId = await rpc.getChainId();
  //   console.log(chainId);
  //   setChainId(chainId);
  // };
  // const getAccounts = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const address = await rpc.getAccounts();
  //   setAddress(address);
  //   console.log(address);
  // };

  // const getBalance = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const balance = await rpc.getBalance();
  //   setBalance(balance);
  //   console.log(balance);
  // };

  // const sendTransaction = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const receipt = await rpc.sendTransaction();
  //   console.log(receipt);
  // };
  // const sendContractTransaction = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const receipt = await rpc.sendContractTransaction();
  //   console.log(receipt);
  // };

  // const getPrivateKey = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const privateKey = await rpc.getPrivateKey();
  //   console.log(privateKey);
  // };

  const loggedInView = (
    <>
      <button onClick={app.getUserInfo} className="card" style={styles.button}>
        Get User Info
      </button>
      <button onClick={app.getChainId} className="card" style={styles.button}>
        Get Chain ID
      </button>
      <button onClick={app.getAccounts} className="card" style={styles.button}>
        Get Accounts
      </button>
      <button onClick={app.getBalance} className="card" style={styles.button}>
        Get Balance
      </button>
      <button onClick={app.sendTransaction} className="card" style={styles.button}>
        Send Transaction
      </button>
      <button
        onClick={app.sendContractTransaction}
        className="card"
        style={styles.button}
      >
        Send Approve Transaction
      </button>

      <button onClick={app.getPrivateKey} className="card" style={styles.button}>
        Get Private Key
      </button>
      <button onClick={app.logout} className="card" style={styles.button}>
        Logout
      </button>

      <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}></p>
      </div>
    </>
  );

  const unloggedInView = (
    <button onClick={app.login} className="card" style={styles.button}>
      Login
    </button>
  );

  return (
    <main className=" w-screen h-screen bg-[#F5F6FF]">
      <div className=" sm:px-16 px-6 py-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center bg-[#F5F6FF] items-start sm:px-16 px-6 py-6">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className=" bg-[#F5F6FF] flex justify-center items-start w-screen">
        <Clients />
      </div>

      <div className="bg-[#F5F6FF] sm:px-16 px-6 py-6 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Business />
        </div>
      </div>

      <div className=" bg-[#0e1a87] flex justify-center items-start w-screen">
        <Objective />
      </div>

      <div className="bg-[#F5F6FF] sm:px-16 px-6 py-6 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Goal />
          <Deals />
          <Testimonials />
          <Footer />
        </div>
      </div>

      <div
        className="container"
        style={{
          textAlign: "center",
          color: "white",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <h3 style={{ textAlign: "center", marginTop: 30 }}>
          Web3Auth React Example
        </h3>
        <div className="row">
          <div className="col-md-3">
            {" "}
            <div className="grid">
              {app.provider ? loggedInView : unloggedInView}
            </div>
          </div>
          <div className="col-md-9">
            <div style={{ marginTop: 20, textAlign: "left" }}>
              address: {app.address}
              <br />
              <br />
              chainId: {app.chainId}
              <br />
              <br />
              balance: {app.balance}
              <br />
              <br />
              user:{" "}
              <span style={{ fontSize: 12 }}>{JSON.stringify(app.userData)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
