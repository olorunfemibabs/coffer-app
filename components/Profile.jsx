/** @format */

import React, { useState } from "react";
import Image from "next/image";
import ProfileDropDown from "./ProfileDropDown";

export default function Profile() {
  const [open, setOpen] = useState(false);
  c
  return (
    <div className="">
      <div className="w-[80px] h-[80px] cursor-pointer" onClick={()=>setOpen(!open)}>
        <Image
          src="/../images/Rectangle.png"
          alt="Picture of the author"
          width={80}
          height={80}

          className="rounded-full cursor-pointer"

        />
      </div>
      <div className="">

{
!open &&
    <ProfileDropDown />
}
      </div>
    </div>
  );
}
