import Image from "next/image"
import Rectangle from '../../../../assets/Rectangle.png'
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useState } from "react";


const Photos = (props) => {
 const [shareDialog, setShareDialog] = useState(false)

 const handleClick = () =>{
    setShareDialog(!shareDialog);
 }
 
 return (
    <div className="w-[1186px] mx-auto h-[96px] rounded-[16px] border-[#C5CBFD] mt-[14px]">
        <div className="flex justify-between py-[10px] px-[35px]">
            <div className="flex space-x-6">
                <Image src={Rectangle} alt='photo' width={70} height={60}  className="rounded-[8px] cursor-pointer"/>
                <h1 className="side font-[400] text-[24px] w-[197px] h-[44px] mt-[10px]">{props.name}</h1>
             </div>  

             <div className="flex space-x-[170px] mt-[20px]">
                <div className="flex space-x-[100px]">
                <h1 className="w-[36px] h-[20px] font-[400] text-[16px] text-[#010101] ">Date</h1>
                 <h1 className="w-[36px] h-[20px] font-[400] text-[16px] text-[#010101] ">Time</h1>
                </div>
                <BiDotsVerticalRounded className="w-[24px] h-[24px] text-[#010101] ml-10" onClick={handleClick} />
             </div> 
        </div>     
       {/* {shareDialog && <div className="w-[223px] h-[250px] rounded-[16px] bg-[#F5F6FF] absolute left-[80%]">

</div>  }        */}
    </div>
  )
}

export default Photos