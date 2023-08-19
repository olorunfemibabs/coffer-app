import {createContext, useContext, useEffect, useState} from "react"
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import RPC from "@/web3RPC";
import {storage} from "../util/storage"
const AppContext = createContext();

const USER_IMAGE = "profileImage";


export function AppWrapper({children}){
    
  const profile = (userInfo) => {
   if(userInfo){
    storage.set(
      USER_IMAGE,
      userInfo
    );
   }
  }



    return(
        <AppContext.Provider value={profile}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}