/** @format */

import React, { useEffect, useState } from "react";
import Allphotos from "./Allphotos";
import NoPhoto from "./NoPhoto";
import { useAccount, useContractRead } from "wagmi";
import URI from "@/constants/ABI/url.json";
import { contractAddress } from "@/constants/contract";

export default function HomeWithPhotos() {
  const { address } = useAccount();

  const [detail, setDetail] = useState([]);
  const { data, isError, isLoading, isSuccess } = useContractRead({
    address: contractAddress,
    abi: URI,
    functionName: "returnMyURI",
    args: [address],
  });

  useEffect(() => {
    if (isSuccess) {
      setDetail(data);
    }
  }, [isSuccess, data]);

  return (
    <main className="">
      {
        detail.length === 0 ?
        <NoPhoto />
        :
      <div>
        <h4 className="text-[32px] tracking-[0.25%] text-justify font-normal leading-30 gap-10 pl-[70px] pt-[10px] side tablet:text-[28px] mobile:text-[20px] mobile:pl-[20px]">
          My Photos
        </h4>

        <div className="flex flex-wrap gap-4 w-[93%] smDesktop:w-[90%] mx-auto font-medium text-[17px] tabletAir:text-[14px] leading-7 tracking-[0.5%] text-justify font-Space-Grotesk border-[#C5CBFD] border-[1px] rounded-[8px]  mt-[20px] py-[16px] ml-[34px] mobile:hidden">
          <div className="w-[95%] mx-auto flex gap-6 ">
            <h3 className="">547 Photo Uploaded</h3>
            <h3>9353 Photo Space left</h3>
            <h3>Basic Plan</h3>
          </div>
        </div>
        <div className="hidden mobile:flex mobile:justify-between w-[90%] mx-auto mt-6">
          <div className="flex gap-2">
            <img src="/../Icon/loop.svg" alt="" />
            <h2 className="">647</h2>
          </div>
          <div className="flex gap-2">
            <img src="/../Icon/space.svg" alt="" />
            <h2 className="">9353</h2>
          </div>
          <div className="flex gap-2">
            <img src="/../Icon/plan.svg" alt="" />
            <h2 className="capitalize">basic</h2>
          </div>
        </div>
        <div className="ml-[10px] mobile:ml-[20px] ">
          <Allphotos data={detail} />
        </div>
      </div>
      }
    </main>
  );
}
