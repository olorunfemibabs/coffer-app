/** @format */

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BiLogIn } from "react-icons/bi";

export default function ProfileDropDown() {
  return (
    <div className="w-[90%] mx-auto">
      <div className="w-[223px] bg-white absolute rounded-2xl  -ml-[9.4%] smDesktop:-ml-[143px] mt-4">
        <div className="w-[90%] mx-auto">
          <div className="flex gap-2 my-[35px] items-center font-normal text-[16px] text-[#010101]">
            <BiLogIn />
            <ConnectButton accountStatus="avatar" label="Logout" chainStatus="none" />
            <h3 className="">Logout</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
