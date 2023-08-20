import Image from "next/image";
import React from "react";

const Social = ({ name, icon }) => {
  return (
    <div>
      <span className="grotesk text-xs flex gap-1 items-center text-center font-normal border border-[#C5CBFD] py- px-1 block text-base rounded-2xl  tracking-[0.156px] w-fit">
        <Image
          src={icon}
          className="w-6 h-6 object-cover"
        />
        {name}
      </span>
    </div>
  )
};

export default Social;
