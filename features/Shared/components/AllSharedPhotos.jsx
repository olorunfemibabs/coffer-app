/** @format */

import { useEffect, useState } from "react";
import MainSinglePhoto from "./MainSinglePhoto";
import SinglePhoto from "./SinglePhoto";
import { useAccount, useContractRead } from "wagmi";
import { contractAddress } from "@/constants/contract";
import URI from "@/constants/ABI/url.json";
import NoActivity from "@/features/Activity/components/NoActivity";

export default function AllSharedPhotos() {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const { address } = useAccount();
  const [singleURI, setSingleURI] = useState("")

  const { data, isError, isLoading, isSuccess } = useContractRead({
    address: contractAddress,
    abi: URI,
    functionName: "returnSharedURI",
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
    detail?.length === 0 ?
    <NoActivity/>

    :
    <main className="w-[90%] flex flex-col mx-auto pl-[40px] mt-6 tablet:pl-[0px]">
      {/* <div className="flex items-center gap-4">
            <img src="/../Icon/backArrow.svg" alt="" className="w-[28px] h-[28px] mobile:w-[24px] mobile:h-[24px]"/>
            <h2 className="text-[24px] mobile:text-[20px] font-normal leading-9 side">Shared Photos</h2>
        </div> */}

      <section className="pl-4 mt-4 flex flex-wrap gap-4">
        {detail.map((uri, index) => {
          return (
            <SinglePhoto uri={uri} id={index} openTab={() =>{ setOpen(true); setSingleURI(uri)}} />
          );
        })}
      </section>
      {open && <MainSinglePhoto close={() => setOpen(false)} uri={singleURI} />}
    </main>
  }

</main>

  );
}
