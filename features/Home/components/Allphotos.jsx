import { useState } from "react";
import MainSinglePhoto from "./Allsingle";
import SinglePhoto from "./Onephoto";
import Allsingle from "./Allsingle";
import Onephoto from "./Onephoto";

export default function Allphotos() {
    const [open, setOpen] = useState(false);
  return (
    <main className="w-[90%] flex flex-col mx-auto  mt-2 ">

        
        <section className="mt-6 flex flex-wrap gap-4 ">
        <Onephoto openTab={()=>setOpen(true)}/>
        <Onephoto openTab={()=>setOpen(true)}/>
        <Onephoto openTab={()=>setOpen(true)}/>
        <Onephoto openTab={()=>setOpen(true)}/>
        <Onephoto openTab={()=>setOpen(true)}/>
        <Onephoto openTab={()=>setOpen(true)}/>
        <Onephoto openTab={()=>setOpen(true)}/>
        <Onephoto openTab={()=>setOpen(true)}/>
        <Onephoto openTab={()=>setOpen(true)}/>
        <Onephoto openTab={()=>setOpen(true)}/>


        </section>
{open &&

        <Allsingle close={()=>setOpen(false)} />
}
  
    
    
    </main>
  )
}