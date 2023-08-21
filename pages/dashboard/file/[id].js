/** @format */

import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Sharetab from "./components/Sharetab";
import Photos from "./components/Photos";
import { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import { contractAddress } from "@/constants/contract";
import URI from "@/constants/ABI/url.json";
import Link from "next/link";

const FolderItem = () => {
  const router = useRouter();
  const { id } = router.query;
const name = id?.toString()


  const [detail, setDetail] = useState([]);
  const { address } = useAccount();
  const [singleURI, setSingleURI] = useState("")

  const { data, isError, isLoading, isSuccess } = useContractRead({
    address: contractAddress,
    abi: URI,
    functionName: "Getfolder",
    args: [name,address],
  });

  useEffect(() => {
    if (isSuccess) {
      setDetail(data?.uri);
    }
  }, [isSuccess, data]);
  console.log('me',detail.uri)
  
  return (
    <Layout>
      <div className="w-[100%] mx-auto">
        <div className="flex items-center justify-between w-[96%] tablet:w-[90%] mx-auto">
          <h1 className="side font-[400] text-[32px] leading-[36px] ">{id}</h1>
          <Link href={`/dashboard/file/dynamic/${name}`}>
          <button className="bg-[#5060E9] flex w-[189px] h-[48px] mobile:w-[150px] mobile:h-[38px] rounded-xl items-center  text-[#FEFEFE] mobile:text-[12px] justify-center side gap-2">
            <p>Upload Photo</p>
            <img
              src="/../Icon/upload.svg"
              alt=""
              className="w-[24px] h-[24px] mobile:w-[18px] mobile:h-[18px] "
            />
          </button>
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 w-[93%] tablet:w-[90%] mx-auto -z-[10] mobile:items-center minmobile:gap-6">
          {/* <Sharetab /> */}
          {detail?.map((item, index) => {
            return (<Photos name={name} address={address} uri={item} key={index} />);
          })}
        </div>
      </div>
    </Layout>
  );
};

export default FolderItem;
