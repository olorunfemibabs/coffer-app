import Layout from "@/components/Layout"
import Card from './components/Card'
import Createfolder from "./components/Createfolder"
import Link from "next/link"
import { useContractRead, useAccount } from 'wagmi'

import { useEffect } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from 'ethers';
import { useState } from "react"
import { contractAddress } from "@/constants/contract";
import ABI from "@/constants/ABI/url.json";



 
export default function File() {
  const {address} = useAccount(); 
  const [cards, setCards] = useState([]);
  // const [photoNumber, setPhotoNumber] = useState('');
  
  const { data : folderArrayData, isError, isLoading, isSuccess } = useContractRead({
      address: contractAddress,
      abi: ABI,
      functionName: 'getFolders',
      args: [address]
    })

  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/5ShvcS43c_Wrsfk_jTMZOU0sXXBKaVXP");
  

  const getPhotoNumber = async (_name, _address) => {
    const contract = new ethers.Contract(
      contractAddress,
      ABI,
      provider
    );
      try {
        const getFolderDetail = await contract.Getfolder(_name, _address);          
        return Number(getFolderDetail[1])
      } catch (error) {
        console.error('error retrieving', error);
      }
  }
    
  useEffect(() => {
    if (folderArrayData) {
      const promises = folderArrayData.map((item, index) => {
        if (item) {
          return getPhotoNumber(item, address)
            .then(result => {
              return (
                <Link href={`file/${item}`} key={index}>
                    <Card folderName={item} photoNum={result} />
                </Link>
              );
            })
            .catch(error => {
              console.error('Error in getPhotoNumber', error);
              return null;
            });
        }
        return null;
      });
      Promise.all(promises).then(resolvedCards => {
        setCards(resolvedCards.filter(card => card !== null));
      });
    }
  }, [folderArrayData, address]);

  return (
    <Layout>
        <div className="w-[1200px] mx-auto h-[1000px]">
                <h1 className="side w-[197px] h-[36px] font-[400] text-[32px] leading-[36px] ">Categories</h1>             
                {/* <ConnectButton /> */}
               <div className="flex flex-wrap w-[1180px] space-x-4">
                   {cards}
                  <Createfolder />
               </div>
                
        </div>
  </Layout>
  )
}
