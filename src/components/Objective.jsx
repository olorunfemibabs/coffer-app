import Image from "next/image";
import React from "react";
import { shelf_design } from "@/public/assets";

const Objective = () => {
  return (
    <div className=" flex justify-start items-center sm:py-16 py-6 sm-px-16 px-6">
      <div>
        <Image
          src={shelf_design}
          alt="shelf"
          width={600}
          height={400}
          className=" object-contain"
        />
      </div>
      <div>
        <h2>
          Who <span>we</span> are
        </h2>
        <p>
          The Safest and Most Convenient Photo Storage Decentralised Application
          in todays digital age, we capture countless precious moments with our
          cameras and smartphones. From birthdays and vacations to milestones
          and celebrations, our photos hold a treasure trove of memories.
          However, as our collections grow, so does the need for a reliable and
          secure photo storage solution. <br></br> Hence our cutting-edge Photo
          Storage Decentralised application, the revolutionary app that ensures
          the safety, privacy, and easy accessibility of all your cherished
          memories. With our state-of-the-art technology, you can now store your
          photos securely on the blockchain, providing you with unparalleled
          peace of mind.<br></br> Join us, and together, lets preserve, relive,
          and connect with the moments that matter most.
        </p>
      </div>
    </div>
  );
};

export default Objective;
