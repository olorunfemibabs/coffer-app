import Layout from "@/components/Layout"
import Card from './components/Card'
import Createfolder from "./components/Createfolder"
import Link from "next/link"
import { useContractRead, useAccount } from 'wagmi'
import contractAbi from '../../../utils/cofferabi.json'
import { useEffect } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from 'ethers';



 
export default function File() {
  const {address} = useAccount(); 
  
  const { data : folderArrayData, isError, isLoading, isSuccess } = useContractRead({
      address: '0xa5f2f0648520709c7d1a343227f32028f47E5D5C',
      abi: contractAbi,
      functionName: 'getFolders',
      args: [address]
    })

  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/5ShvcS43c_Wrsfk_jTMZOU0sXXBKaVXP");
  const contractAddress = "0xa5f2f0648520709c7d1a343227f32028f47E5D5C";

  // const getPhotoNumber = async () => {
  //   const contract = new ethers.Contract(
  //     contractAddress,
  //     contractAbi,
  //     provider
  //   );
  //     try {
  //       const getFolderDetail = await contract.Getfolder();
  //     } catch (error) {
        
  //     }
  // }
    
    const { data : counterData, isError: counterError, isLoading: isCounterLoading, isSuccess: isCounterSuccess } = useContractRead({
      address: '0xa5f2f0648520709c7d1a343227f32028f47E5D5C',
      abi: contractAbi,
      functionName: 'mySharedURI',
      args: [address]
    })

  useEffect(() => {
    if(isCounterSuccess){
      console.log(counterData);
    }
  }, [folderArrayData, isSuccess, counterData, isCounterSuccess])
  
  return (
    <Layout>
        <div className="w-[1200px] mx-auto h-[1000px]">
                <h1 className="side w-[197px] h-[36px] font-[400] text-[32px] leading-[36px] ">Categories</h1>             
                <ConnectButton />
               <div className="flex flex-wrap w-[1180px] space-x-4">
                {folderArrayData.map((item, index) =>{

                    return <Link href={`file/${item}`} ><Card key={index} folderName={item.name}/></Link>
                })}
                  <Createfolder />
               </div>
                
        </div>
  </Layout>
  )
}
