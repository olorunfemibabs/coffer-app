import { useEffect, useState } from "react";
import MainSinglePhoto from "./MainSinglePhoto";
import SinglePhoto from "./SinglePhoto";
import { useAccount, useContractRead } from 'wagmi'
import { contractAddress } from "@/constants/contract";
import URI from '@/constants/ABI/url.json'


export default function AllSharedPhotos() {
    const [open, setOpen] = useState(false);
    const {address} = useAccount();

    const { data, isError, isLoading, isSuccess } = useContractRead({
      address: contractAddress,
      abi: URI,
      functionName: 'mySharedURI',
      args: [address]
    })
  useEffect(()=>{
if(isSuccess){

  console.log(data);
}
  },[isSuccess,data])

  return (
    <main className="w-[90%] flex flex-col mx-auto pl-[40px] mt-2 tablet:pl-[0px]">

        {/* <div className="flex items-center gap-4">
            <img src="/../Icon/backArrow.svg" alt="" className="w-[28px] h-[28px] mobile:w-[24px] mobile:h-[24px]"/>
            <h2 className="text-[24px] mobile:text-[20px] font-normal leading-9 side">Shared Photos</h2>
        </div> */}
        <section className="pl-4 mt-4 flex flex-wrap gap-4">
        <SinglePhoto openTab={()=>setOpen(true)}/>
        <SinglePhoto openTab={()=>setOpen(true)}/>
        <SinglePhoto openTab={()=>setOpen(true)}/>
        <SinglePhoto openTab={()=>setOpen(true)}/>
        <SinglePhoto openTab={()=>setOpen(true)}/>
        <SinglePhoto openTab={()=>setOpen(true)}/>
        <SinglePhoto openTab={()=>setOpen(true)}/>
        <SinglePhoto openTab={()=>setOpen(true)}/>
        <SinglePhoto openTab={()=>setOpen(true)}/>
        <SinglePhoto openTab={()=>setOpen(true)}/>


        </section>
{open &&

        <MainSinglePhoto close={()=>setOpen(false)} />
}
  
    
    
    </main>
  )
}
