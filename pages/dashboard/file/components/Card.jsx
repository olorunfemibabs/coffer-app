import Image from "next/image"
import files from '../../../../assets/files.png'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';

// 
const Card = (props) => {
  return (
    <div className="w-[370px] h-[280px] rounded-[16px] border-[2px] border-[#C5CBFD] mt-[20px] mx-auto">
            <div className="flex">
                <Image src={files} alt="file" />
                <h1 className="side font-[400] text-[20px] w-[113px] h-[26px] mt-[48px]">{props.folderName}</h1>
            </div>
            <div className='flex w-[342px] mx-auto justify-between h-[46px] mt-[15px] px-[10px] border-l border-l-[#010101]'>
                <h1 className="side w-[103px] text-center my-[10px] h-[46px] text-[#010101] font-[500] text-[17px] ">{props.photoNum} Photos</h1>
                <MdOutlineDriveFileRenameOutline className="text-[#010101] h-[24px] w-[24px] my-[10px]" />
            </div>
    </div>
  )
}

export default Card