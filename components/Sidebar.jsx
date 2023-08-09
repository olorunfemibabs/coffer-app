import React from 'react'
import Topbar from './Topbar'
import Link from 'next/link';
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const pathname = usePathname();
  const menu =[
    {
      name:"Home",
      href:"/dashboard/home"
    },
    {
      name:"Files",
      href:"/dashboard/files"

    },
    {
      name:"Activity",
      href:"/dashboard/activity"
    }
  ]
  return (
    <main className='bg-[#F5F6FF] min-h-screen'>
      
      <div className="h-full min-h-screen bg-[#5060E9] rounded-r-[60px] pl-[80px] pt-[100px]">
        
<div className="flex flex-col gap-3 text-[#C5CBFD] ">

      {menu.map((item, index)=>{
        const isActive = pathname.startsWith(item.href);
        return(
<Link
href={item.href}
key={index}
className={
  isActive &&"text-[#0E1A87] border-l-[2px] border-[#0E1A87] "
}

>
  <h2 className="">{item.name}</h2>
</Link>
        )
      }

        )
      }
</div>
      </div>
      </main>
  )
}
