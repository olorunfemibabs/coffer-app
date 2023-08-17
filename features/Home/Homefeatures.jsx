import React from 'react';
import Allphotos from "./components/Allphotos";

export default function Homefeatures() {
  return (
    <main className="items-center side">
      

      <h4 className="text-[32px] tracking-[0.25%] text-justify font-normal leading-30 gap-10 pl-[70px] pt-[10px] side">My Photos</h4>
    
      

      <div className='flex flex-wrap gap-4 w-[95%] mx-auto font-medium text-[17px] leading-7 tracking-[0.5%] text-justify font-Space-Grotesk border-[#C5CBFD] border-[1px] rounded-[8px] mr-12 mt-[20px] py-[16px] ml-8'>
        <div className='w-[95%] mx-auto flex gap-6 '>
        <h3>547 Photo Uploaded</h3>
        <h3>9353 Photo Space left</h3>
        <h3>Basic Plan</h3>
        </div>
      </div>

      <div className=''>
      <Allphotos />
      </div>
      
    </main>
  )
}
