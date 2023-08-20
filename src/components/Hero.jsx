import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Hero_Image } from "@/public/assets";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { GlobalContext } from "@/context/GlobalContext";

const Hero = () => {

  const { state, dispatch } = useContext(GlobalContext)
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6 sm-px-16 px- side gap-16 bg-[#F5F6FF]">
      <div className="flex-2 flex justify-center items-start flex-col xl:px-0 sm:px-6 px-6">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-normal sm:text-[64px] text-[44px] text-[rgb(1,1,1)] sm:leading-[100.8px] leading-[75px] side">
            Unleash Your Memories: <br className="sm:block hidden" />{" "}
            <p>
              Easy <span className="text-[#1b2ab8]">Photo Storage</span>
            </p>{" "}
          </h1>
        </div>

        <h1 className=" font-normal sm:text-[64px] text-[44px] text-[#010101] sm:leading-[100.8px] leading-[75px] w-full side">
          with Coffer.
        </h1>
        <p className="font-normal grotesk text-[#010101] text-[18px] leading-[30.8px] max-w-[889px] mt-5">
          The safest solution for storing your precious memories. your photos
          are securely stored on the blockchain, ensuring unparalleled privacy
          and accessibility.
        </p>
        <div className="mt-8">
          {state?.address === null ?
            <ConnectButton />
            :
            <span className="bg-[#1321A0] text-[#F5F6FF] hover:cursor-default rounded-[20px] py-[12px] px-[24px] w-fit h-[47px] flex justify-center items-center border-[2px]">Wallet Connected</span>
          }
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center hidden xl:block md:my-0 my-10 relative ">
        <Image
          src={Hero_Image}
          alt="hero-image"
          width={570}
          height={640}
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
