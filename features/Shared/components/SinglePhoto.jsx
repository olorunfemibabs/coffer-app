import { useState } from "react"
import MainSinglePhoto from "./MainSinglePhoto";
import url from "@/constants/ABI/url.json"
import { ethers } from "ethers";

export default  function SinglePhoto({openTab}) {
  //  const provide = JSON.parse(localStorage.getItem("provider"))
  // const signer = provide?.getSigner();
  // const contractAddress = "0x396764f15ed1467883a9a5b7d42acfb788cd1826";
  // // const provider = new ethers.providers.Web3Provider(web3authProvider);

  // const contract = new ethers.Contract(contractAddress, url, signer);

  // const message =  contract.name();

  // console.log("name",message)

  
  return (
    <section>

    <div>
        <img src="/../images/pics.png" alt="" className="w-[200px] h-[168px] smDesk:w-[176px] smDesk:h-[160px] tabletAir:w-[230px] tabletAir:h-[200px] surfDuo:w-[120px] surfDuo:h[100px] mobile:w-[90px] mobile:h-[70px] object-cover rounded-2xl" onClick={openTab}/>
       
    </div>

    {/* {open &&
        <MainSinglePhoto close={()=>setOpen(false)} />
    }
     */}
    </section>
  )
}
