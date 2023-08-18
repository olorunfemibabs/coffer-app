import { useState } from "react"
import Allsingle from "./Allsingle";

export default function Onephoto({openTab}) {
   
  return (
    <section>

    <div className="w-[248px] h-[228px] pt-[30px] pl-[20px] rounded-[36px] border-[1px] shadow-md">
        <img src="/../images/Rectangle.png" alt="" className="w-[209px] h-[165px] smDesk:w-[176px] smDesk:h-[160px] tabletAir:w-[230px] tabletAir:h-[200px] surfDuo:w-[120px] surfDuo:h[100px] mobile:w-[90px] mobile:h-[70px] object-cover rounded-[8px]" onClick={openTab}/>
       
    </div>

    {/* {open &&
        <MainSinglePhoto close={()=>setOpen(false)} />
    }
     */}
    </section>
  )
}