import { useState } from "react"
import MainSinglePhoto from "./MainSinglePhoto";


export default  function SinglePhoto({openTab, id, uri, show}) {

  const imguri = `https://ipfs.io/ipfs/${uri}`
  
  return (
    <section>

    <div key={id}>
        <img src={imguri} alt="" className="w-[200px] h-[168px] smDesk:w-[176px] smDesk:h-[160px] tabletAir:w-[230px] tabletAir:h-[200px] surfDuo:w-[120px] surfDuo:h[100px] mobile:w-[90px] mobile:h-[70px] object-fill rounded-2xl" onClick={openTab}/>
       
    </div>
    </section>
  )
}
