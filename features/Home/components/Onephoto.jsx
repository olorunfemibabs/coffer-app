import { useState } from "react"
import Allsingle from "./Allsingle";

export default function Onephoto({openTab}) {
   
  return (
    <section>

    <div className="w-[220px] h-[200px] lgDesktop:w-[180px] lgDesktop:h-[160px] smDesktop:w-[170px] smDesktop:h-[146px] smDesk:w-[140px] smDesk:h-[116px] tabletAir:w-[170px] tabletAir:h-[150px] tablet:w-[158px] tablet:h-[140px] mobile:w-[103.4px] mobile:h-[90px] rounded-[36px] lgDesktop:rounded-[28px] mobile:rounded-[16px] border-[1px] shadow-md bg-white ">
        <img src="/../images/Rectangle.png" alt="" className="w-[86%] h-[78%]  object-cover my-[20px] lgDesktop:mt-[18px] smDesk:mt-[13px] tabletAir:mt-[16px] mobile:mt-[9px] mx-auto rounded-lg " onClick={openTab}/>
       
    </div>
    
    </section>
  )
}