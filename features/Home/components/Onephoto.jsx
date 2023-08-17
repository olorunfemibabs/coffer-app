import { useState } from "react"
import Allsingle from "./Allsingle";

export default function Onephoto({openTab}) {
   
  return (
    <section>

    <div>
        <img src="/../images/Rectangle.png" alt="" className="w-[200px] h-[168px] smDesk:w-[176px] smDesk:h-[160px] tabletAir:w-[230px] tabletAir:h-[200px] surfDuo:w-[120px] surfDuo:h[100px] mobile:w-[90px] mobile:h-[70px] object-cover rounded-2xl" onClick={openTab}/>
       
    </div>

    {/* {open &&
        <MainSinglePhoto close={()=>setOpen(false)} />
    }
     */}
    </section>
  )
}