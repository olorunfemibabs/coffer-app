/** @format */

import  { useRef, useState, useEffect } from "react";
import main from '../Upload/ipfs.mjs'
import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi'
import { contractAddress } from "@/constants/contract";
import ABI from "@/constants/ABI/url.json";
import Loading from '../../components/Loading.js'


export default function Upload(prop) {

  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState('');
  const [uri, setURi] = useState('')
  const {address} = useAccount();
  const [loadState, setLoadstate] = useState(false);

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
  };

  const handleClick =  (event) => {
    hiddenFileInput.current.click();
    
  };
  const handleIPFSUpload = async () =>{
    setLoadstate(true);
    await main(file, 'image', 'Image upload').then((data) => {
      setURi(data.ipnft);
      console.log(data.ipnft)
  })
  }

  const { data, isLoading, isSuccess, write: callUpload } = useContractWrite({
    address: contractAddress,
    abi: ABI,
    functionName: 'uploadURI',
    args: [address,prop.Foldername,uri]
  })
  useEffect(() => {
    if(uri != ''){
      callUpload?.();
      setLoadstate(false);
    }
  }, [uri])
  

  return (
    <main className="w-[80%] smDesktop:w-[85%]  mx-auto smDesk:w-[90%] tabletAir:w-[100%]">
      {loadState && <Loading />}
      <section className="w-[80%] smDesktop:w-[94%] mr-auto tabletAir:w-[96%] tablet:mr-0 tablet:w-[100%]">
        <section className="flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-[24px] mobile:text-[16px] font-normal leading-8 side">
              Upload Photos
            </h2>
            <img
              src="/../Icon/CloudFolder.svg"
              alt=""
              className="w-[32px] h-[32px] mobile:w-[20px] mobile:h-[20px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center border-[1px] rounded-full w-[133px] mobile:w-[90px] h-[36px] justify-center border-[#0E1A87]">
              <p className="text-[16px] mobile:text-[12px] text-[#0E1A87] leading-6 font-medium">
                Cancel
              </p>
              <img
                src="/../Icon/close.svg"
                alt=""
                className="w-[24px] h-[24px] mobile:w-[16px] mobile:h-[16px]"
              />
            </button>
            <button onClick={handleIPFSUpload} className="flex items-center border-[1px] rounded-full w-[133px] mobile:w-[90px] h-[36px] text-center justify-center bg-[#0E1A87]">
              <p className="text-[16px] mobile:text-[12px]  text-[white] leading-6 font-medium">
                Save
              </p>
            </button>
          </div>
        </section>

        <section className="border-[2px] border-dashed  border-[#010101] mt-2 ">
          <div className="py-10 flex flex-col justify-center items-center">
            <img
              src="/../Icon/up.svg"
              alt="upload image"
              className="w-[160px] h-[160px]"
            />
            <p className="text-[17px] font-normal leading-6 mt-2">
              Upload your photos in here
            </p>
            <button onClick={handleClick} className="text-[16px] bg-[#0E1A87] text-white w-[146px] h-[36px] rounded-full mt-8 ">
              Browse Files
            </button>
            <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{display: 'none'}} 
      />
          </div>
        </section>

        <section className=" flex justify-between items-center mt-4">
        <div className="w-[40%] mobile:w-[45%]">
          <h2 className="text-[16px] leading-7 font-normal text-[#64748B] ">Title</h2>
          <div className="border-[1px] bg-white h-[36px] w-[100%]">
            <p className="text-[14px] leading-5 font-normal px-2 text-[#64748B] py-2">{file.name}</p>
          </div>
        </div>
        <div className="w-[40%] mobile:w-[45%]">
          <h2 className="text-[16px] leading-7 font-normal text-[#64748B] ">Category</h2>
          <div className="border-[1px] bg-white h-[36px] w-[100%]">
            <p className="text-[14px] leading-5 font-normal px-2 text-[#64748B] py-2">{prop.Foldername}</p>
          </div>
        </div>
        </section>
      </section>
    </main>
  );
}
