import Image from "next/image"
import files from '../../../../assets/files.png'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';

// 
const Card = (props) => {
  return (
    <div className="w-[350px] h-[280px] lgDesktop:w-[290px] smDesktop:w-[217px] smDesktop:h-[200px] lgDesktop:h-[250px]  tabletAir:w-[245px] tablet:w-[208px] tablet:h-[190px] mobile:w-[144px] mobile:h-[120px] rounded-[16px] border-[2px] border-[#C5CBFD] mt-[20px] mx-auto">
            <div className="flex">
                <Image src={files} alt="file" className="w-[200px] lgDesktop:w-[170px] lgDesktop:h-[170px] smDesktop:w-[120px] smDesktop:h-[120px]  h-[200px] tablet:w-[100px] tablet:h-[100px] mobile:w-[60px] mobile:h-[60px]" />
                <h1 className="side font-[400] text-[20px] w-[113px] h-[26px] mt-[48px] mobile:text-[17px] tablet:mt-8 mobile:mt-[10px] side">{props.folderName}</h1>
            </div>
            <div className='flex w-[90%] mx-auto justify-between h-[46px] mt-[15px] px-[10px] mobile:h-[30px] border-l border-l-[#010101]'>
                <h1 className="side w-[103px] text-center my-[10px] h-[46px] mobile:h-[26px] text-[#010101] font-[500] text-[17px] mobile:-ml-2 ">{props.photoNum} Photos</h1>
                <MdOutlineDriveFileRenameOutline className="text-[#010101] h-[24px] w-[24px] my-[10px]" />
            </div>
    </div>
  )
}

export default Card