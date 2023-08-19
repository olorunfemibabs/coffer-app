/** @format */

import  { useRef, useState } from "react";

export default function Upload() {
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState([]);

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <main className="w-[80%] smDesktop:w-[85%]  mx-auto smDesk:w-[90%] tabletAir:w-[100%]">
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
            <button className="flex items-center border-[1px] rounded-full w-[133px] mobile:w-[90px] h-[36px] text-center justify-center bg-[#0E1A87]">
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
            <p className="text-[14px] leading-5 font-normal px-2 text-[#64748B] py-2">Folder name</p>
          </div>
        </div>
        </section>
      </section>
    </main>
  );
}
