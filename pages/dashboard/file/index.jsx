import Layout from "@/components/Layout"
import Card from './components/Card'
import Createfolder from "./components/Createfolder"
import Link from "next/link"
import { useContractRead, useAccount } from 'wagmi'
import contractAbi from '../../../utils/cofferabi.json'
import { useEffect } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from 'ethers';
import { useState } from "react"
import CreateFolder from "../../../components/CreateFolder"



 
export default function File() {
  const {address} = useAccount(); 
  const [cards, setCards] = useState([]);
  const [openFolder, setOpenFolder] = useState(false)
  // const [photoNumber, setPhotoNumber] = useState('');
  
  const { data : folderArrayData, isError, isLoading, isSuccess } = useContractRead({
      address: '0xE4C20BED2dd5B397f422ab9133A96318bA9c4f6F',
      abi: contractAbi,
      functionName: 'getFolders',
      args: [address]
    })

  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/5ShvcS43c_Wrsfk_jTMZOU0sXXBKaVXP");
  const contractAddress = "0xE4C20BED2dd5B397f422ab9133A96318bA9c4f6F";

  const getPhotoNumber = async (_name, _address) => {
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi,
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
        <div className="w-[90%] mx-auto ">
                <h1 className="side w-[197px] h-[36px] font-[400] text-[32px] leading-[36px] ">Categories</h1>             
                {/* <ConnectButton /> */}
               <div className="flex flex-wrap w-[96%] gap-6 lgDesktop:gap-4 mx-auto mobile:pb-24">
                   {cards}
                  <Createfolder open={()=>setOpenFolder(true)} />

                  {  openFolder &&

                  <div
          className={`absolute bg-[#f5f6ff] opacity-[90%] left-0 z-[90] } absolute top-0 right-0 w-[100%] h-[100%]`}
        >
          <CreateFolder close={() =>setOpenFolder(false)} />
        </div>
                  }
               </div>
                
        </div>
  </Layout>
  )
}
