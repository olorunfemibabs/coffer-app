import Image from "next/image";
import React from "react";
import { shelf_design } from "@/public/assets";

const Objective = () => {
  return (
    <div className="md:flex gap-10 justify-start items-start sm:py-16 py-6 sm-px-16 px-6">
      <Image
        src={shelf_design}
        alt="shelf"
        width={600}
        height={400}
        className="md:w-[40%] w-full hidden sm:block object-fill"
      />
      <div className="md:w-[60%] px-5 sm:px-0 text-white">
        <h2 className="flex justify-end text-[#C5CBFD] gap-2 leading-6 sm:text-2xl text-[32px] font-secondary mb-12 sm:mb-6">
          Who <span className="text-[#5060E9] font-bold">we</span> are
        </h2>
        <div className="text-base side font-normal leading-normal text-black sm:text-white">
          <p className="pb-3 text-justify">
            The Safest and Most Convenient Photo Storage Decentralized Application
            in todays digital age, we capture countless precious moments with our
            cameras and smartphones. From birthdays and vacations to milestones
            and celebrations, our photos hold a treasure trove of memories.
            However, as our collections grow, so does the need for a reliable and
            secure photo storage solution.</p>
          <p className="pb-3 text-justify">Hence our cutting-edge Photo Storage Decentralized application, the revolutionary app that ensures the safety, privacy, and easy accessibility of all your cherished memories. With our state-of-the-art technology, you can now store your photos securely on the blockchain, providing you with unparalleled peace of mind.</p>
          <p className="text-justify">Join us, and together, lets preserve, relive, and connect with the moments that matter most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Objective;
