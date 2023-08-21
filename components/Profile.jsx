/** @format */

import React, { useState } from "react";
import Image from "next/image";
import ProfileDropDown from "./ProfileDropDown";
import { useAccount } from "wagmi";

export default function Profile() {
  const{ address} = useAccount()
 
  const [open, setOpen] = useState(false);

  const handleclick=()=>{
    if(open === true){
      setOpen(false)
    }
    else{
      setOpen(true)
    }
  }
  return (
    <div className="" >
      <div className="w-[80px] relative h-[80px] cursor-pointer" >
        <img
          src="/../Icon/av.png"
          alt="Picture of the author"
          
          onClick={handleclick}
          className="rounded-full w-[100%] h-[100%] cursor-pointer object-cover relative"

        />
        <div className="flex absolute top-6 left-2 text-[gray] font-bold justify-center items-center z-1  ">

        <p className="">{address?.substring(0, 2)}</p>...
        <p className="">{address?.substring(29, 32)}</p>
        </div>
      </div>
      <div className="">

{
open &&
    <ProfileDropDown />
}
      </div>
    </div>
  );
}
