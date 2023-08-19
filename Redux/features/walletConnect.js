import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import RPC from "@/web3RPC";

const clientId="BKNEy2rC0a4ddc2vLcG9V-yP6Oq4BH4xliD6sMyR0I21qoyAp5fUT2_nFSYJyTjvpnxyb1YM8CgCEWIh4Be7Hr4";
const initialState={
    web3auth: null,
    provider: null,
    address: "",
    balance: "",
    chainId: "",
    userData:{}
}

// export const init = async()=>{

// }
const walletConnectSlice = createSlice({
    name:"walletConnectSlice",
    initialState,
  
    reducers:{
        init:(state, action)=>{
            const web3auth = new Web3Auth({clientId, chainConfig:{
                chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x1",
            rpcTarget: "https://rpc.ankr.com/eth",
            }})
            state.web3auth=web3auth;
            web3auth.initModal();
            state.provider= web3auth.provider;
        },
        login:async (state, action) =>{
            const web3authProvider = await action.web3auth.connect;
            state.provider = web3authProvider;
        }
    }
})

export const {init, login} = walletConnectSlice.actions;

export default walletConnectSlice.reducer
