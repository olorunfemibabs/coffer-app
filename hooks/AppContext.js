import {createContext, useContext, useEffect} from "react"
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import RPC from "@/web3RPC";

const AppContext = createContext();


export function AppWrapper({children}){

    const [web3auth, setWeb3auth] = useState(null);
    const [provider, setProvider] = useState(null);
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");
    const [chainId, setChainId] = useState("");
    const [userData, setUserData] = useState({});


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

    let shared ={
        web3auth,
        provider,
        address,
        balance,
        chainId,
        userData,
        logout,
        getUserInfo,
        getChainId,
        getAccounts,
        getBalance,
        sendTransaction,
        sendContractTransaction,
        getPrivateKey

    }

    useEffect(() => {
        const init = async () => {
          try {
            const web3auth = new Web3Auth({
              clientId,
              chainConfig: {
                chainNamespace: CHAIN_NAMESPACES.EIP155,
                chainId: "0x1",
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
    
    
      }, []);

    return(
        <AppContext.Provider value={shared}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}