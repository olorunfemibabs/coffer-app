/** @format */

import Image from "next/image";
import Rectangle from "../../../../assets/Rectangle.png";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useEffect, useState } from "react";
import SharePhoto from "@/components/SharePhoto";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { contractAddress } from "@/constants/contract";
import ABI from "@/constants/ABI/url.json";
import { toast } from "react-toastify";

const Photos = ({ uri, name, address }) => {
  const [shareDialog, setShareDialog] = useState(false);
  const [openShare, setOpenShare] = useState(false);

  console.log("nam", name);
  const imguri = `https://ipfs.io/ipfs/${uri}`;
  const handleClick = () => {
    setShareDialog(!shareDialog);
  };
  const handleDownload = async () => {
    const short = uri?.substring(0, 5);
    try {
      const response = await fetch(imguri);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${short}.jpg`; // Specify the desired filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: ABI,
    functionName: "deleteURI",
    args: [address, name, uri],
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
      toast.success("Image Deleted");

      setShareDialog(false);
    },
  });

  const handleDelete = (e) => {
    e.preventDefault();

    cwriteWrite?.();
  };

  useEffect(() => {
    if (isError) {
      toast.error("Error Occur, try again");
    }
  }, [isError]);

  return (
    <div className="">
      <div className="w-[190px] h-[190px] lgDesktop:w-[148.5px] lgDesktop:h-[140px] smDesktop:w-[135.5px] smDesktop:h-[129px] smDesk:w-[148.6px] smDesk:h-[140px] tabletAir:w-[125px] tablet:w-[124px] tabletAir:h-[120px] mobile:w-[109.4px] mobile:h-[98px] minmobile:w-[90px] relative">
        <img
          src={imguri}
          alt="photo"
          // width={100%}
          className="rounded-[8px] cursor-pointer w-[100%] h-[100%] "
        />
        <div
          className={`absolute top-0 right-0 z-1 w-[24px] h-[24px] bg-[#f5f6ff]  rounded-full flex justify-center items-center ${
            shareDialog && "z-40"
          }`}
        >
          <BiDotsVerticalRounded
            className="w-[18px] h-[18px]  text-black"
            onClick={handleClick}
          />
          {shareDialog && (
            <div className="">
              <div className="w-[153px] tabletAir:w-[140px] h-[150px] rounded-[16px] bg-[#F5F6FF] absolute right-1 tabletAir:right-0 mobile:w-[130px] mobile:-right-6 top-8 z-[10]">
                <div className="w-[80%] mx-auto  flex flex-col gap-3 mt-6">
                  <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => setOpenShare(true)}
                  >
                    <Image
                      src="/../Icon/shareOutline.svg"
                      alt=""
                      height={18}
                      width={18}
                    />
                    <h2 className="text-[16px] mobile:text-[12px]">Share</h2>
                  </div>
                  <div
                    onClick={handleDownload}
                    className="flex gap-2 items-center cursor-pointer"
                  >
                    <Image
                      src="/../Icon/download.svg"
                      alt=""
                      height={18}
                      width={18}
                    />
                    <h2 className="text-[16px] mobile:text-[12px]">Download</h2>
                  </div>
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={handleDelete}
                  >
                    <Image
                      src="/../Icon/delete.svg"
                      alt=""
                      height={18}
                      width={18}
                    />

                    {cwriteLoading || isLoading ? (
                      "Deleting..."
                    ) : (
                      <h2 className="text-[16px] mobile:text-[12px]">Delete</h2>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {openShare && (
        <div
          className={`absolute bg-[#f5f6ff] opacity-[90%] left-0 z-[90] } absolute top-0 right-0 w-[100%] h-[100%]`}
        >
          <SharePhoto uri={uri} close={() => setOpenShare(false)} />
        </div>
      )}
      <div
        className={` ${
          shareDialog
            ? "absolute bg-[#f5f6ff] opacity-[50%] left-0 z-20"
            : "hidden"
        } absolute top-0 right-0 w-[100%] h-[100%]`}
      ></div>
    </div>
  );
};

export default Photos;
