/** @format */

import React, { useEffect, useState } from "react";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { contractAddress } from "@/constants/contract";
import ABI from "@/constants/ABI/url.json";
import { CiSearch } from "react-icons/ci";
import Profile from "./Profile";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";

export default function Topbar() {
  const router = useRouter();
  const { address } = useAccount();
  const [state, setState] =useState(false);

  const {
    data: readData,
    isError: readIsError,
    isLoading: readIsLoading,
    isSuccess: readIsSucess,
  } = useContractRead({
    address: contractAddress,
    abi: ABI,
    functionName: "checkAccountStatus",
    args: [address],
  });

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: ABI,
    functionName: "CreateAccount",
  });

  const {
    data: cwriteData,
    isLoading: cwriteLoading,
    write: cwriteWrite,
  } = useContractWrite(config);

  const { data, isError, isLoading } = useWaitForTransaction({
    hash: cwriteData?.hash,
    onSuccess(data) {
      // console.log('Success', data)
      toast.success("Account Created Succesfully");
    },
  });

  const handlesubmit = (e) => {
    e.preventDefault();

    cwriteWrite?.();
  };

  useEffect(() => {
    if (!address) {
      router.push("/");
    }
    if (isError) {
      toast.error("Error Occur, try again");
    }
    setState(readData)
   
  }, [address, isError, readData]);
  return (
    <main>
      <section className="w-[90%] mx-auto">
        <div className="flex justify-between items-center pt-5">
          <h1 className="text-[32px] font-semibold leading-[48px] logo">
            <a href="/dashboard/home"> COFFER</a>
          </h1>
          <div className="tablet:hidden w-[50%]  pl-[8px] flex border-[1px] items-center rounded-lg h-[45px] border-[#C5CBFD] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2">
            <CiSearch size={20} className="text-[#3849DD] mr-2" />
            <input
              type="text"
              placeholder="Search your photos"
              className="h-full border-none w-full focus:outline-none focus:border-none focus:ring-none focus:ring-0 rounded-lg text-[16px] font-normal text-[#C5CBFD] bg-transparent"
            />
          </div>
          {!state ? (
            <button
              onClick={handlesubmit}
              className={` ${!state &&"z-10"} w-[140px] h-[47px] bg-[#3849DD] text-[white] rounded-2xl font-[500] hover:bg-[#0E1A87] `}
            >
              {cwriteLoading || isLoading ? "Creating..." : "Create Acccount"}
            </button>
          ) : (
            <Profile />
          )}
        </div>
      </section>
    </main>
  );
}
