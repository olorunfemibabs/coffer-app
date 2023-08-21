import React from 'react'
import Topbar from './Topbar'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Image from 'next/image';
export default function Sidebar() {
  const pathname = usePathname();
  const menu =[
    {
      name:"Home",
      href:"/dashboard/home"
    },
    {
      name:"Files",
      href:"/dashboard/file"

    },
    {
      name:"Activity",
      href:"/dashboard/activity"
    }
  ]
  return (
    <main className='bg-[#F5F6FF] tablet:hidden'>
      
      <div className="h-full min-h-screen max-h-screen overflow-y-hidden smDesk:h-screen bg-[#5060E9] rounded-tr-[60px] pl-[80px] pt-[100px] ">
        
<div className="flex flex-col gap-3 text-[#C5CBFD] font-normal text-[16px] side">

      {menu.map((item, index)=>{
        const isActive = pathname?.startsWith(item?.href);
        return(
<Link
href={item?.href}
key={index}
className={
  isActive &&"text-[#0E1A87] border-l-[2px] pl-2 border-[#0E1A87] font-bold "
}

>
  <h2 className="">{item?.name}</h2>
</Link>
        )
      }

        )
      }
</div>
<div className="mt-[250px] smDesktop:mt-[100px] smDesk:mt-[600px] tabletAir:mt-[500px]">

<div className="flex w-[140px] -ml-[40px] pl-[20px] font-normal py-[8px]     border-[1px] rounded-xl text-[16px] text-[#0E1A87] gap-2 bg-[#F5F6FF]">
  <h5 className="">
  Upgrade
  </h5>
  <Image src='/../images/scaling.svg'  alt='upgrade' width={20} height={20}/>
</div>
</div>
      </div>
      </main>
  )
}
