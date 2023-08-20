import Image from "next/image";
import React from "react";

const Social = ({ name, icon }) => {
  return (
    <div>
      <span className="grotesk text-xs flex gap-1 items-center text-center font-normal border border-[#C5CBFD] py- px-2 block text-base rounded-2xl  tracking-[0.156px] w-fit">
        <Image
          src={icon}
          alt="socials"
          className="w-3 h-3 object-cover"
        />
        {name}
      </span>
    </div>
  )
};

export default Social;
