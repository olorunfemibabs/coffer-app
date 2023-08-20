import { useState } from "react";
import MainSinglePhoto from "./Allsingle";
import SinglePhoto from "./Onephoto";
import Allsingle from "./Allsingle";
import Onephoto from "./Onephoto";

export default function Allphotos({data}) {
    const [open, setOpen] = useState(false);
    const [imuri, setImuri]= useState()
  return (
    <main className="w-[93%] flex flex-col mx-auto  mt-2 ml-[34px] lgDesktop:ml-[26px] mobile:ml-0 mobile:w-[96%] mobile:mx-auto">

        
        <section className="mt-6 flex flex-wrap gap-4 ">
          {
            data.map((uri, index)=>(

              <Onephoto uri={uri} openTab={()=>{setOpen(true); setImuri(uri)}}/>
            ))
          }



        </section>
{open &&

        <Allsingle uri={imuri}  close={()=>setOpen(false)} />
}
  
    
    
    </main>
  )
}