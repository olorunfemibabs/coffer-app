import Image from "next/image";
import React from "react";
import { flow_design } from "@/public/assets";

const Exist = () => {
  return (
    <div className="md:flex gap-10 justify-start items-start sm:py-16 py-6 sm-px-16 px-6">
      <div className="md:w-[60%] px-5 sm:px-0">
        <div className="flex justify-start text-[#3849DD] gap-2 leading-6 sm:text-2xl text-[32px] font-secondary mb-12 sm:mb-6">
          Why <span className="text-white font-bold">we</span> exist
        </div>
        <div className="text-base side font-normal leading-normal text-white sm:text-black">
          <p className="pb-3 text-justify">
            Capturing Life's Moments: A Storage Photo Decentralised App Made to Preserve Your Memories</p>
          <p className="pb-3 text-justify">In this fast-paced digital age, moments come and go in the blink of an eye. Every day, we create memories that define who we are, but too often, these precious moments are forgotten or lost amidst the overwhelming sea of data. That's where our storage photo Decentralised app comes in – we exist to capture and preserve life's most treasured moments, ensuring that no memory is ever forgotten.</p>
          <p className="text-justify">The safest and most convenient solution for storing your precious memories. your photos are securely stored on the blockchain, ensuring unparalleled privacy and accessibility. Enjoy decentralized storage, enhanced security, unlimited capacity, easy accessibility from any device, and streamlined organization and search features. Keep your memories safe and relive them with just a few taps or clicks.
          </p>
        </div>
      </div>
      <Image
        src={flow_design}
        alt="shelf"
        width={600}
        height={400}
        className="md:w-[40%] w-full hidden sm:block object-fill"
      />
    </div>
  );
};

export default Exist;
