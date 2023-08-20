import Image from "next/image"
import create from '../../../../assets/CreateFolder.png'




const Createfolder = () => {
  return (
    <div className="w-[370px] h-[280px] rounded-[16px]border-[2px] border-[#C5CBFD] mt-[20px]">
        <Image src={create} alt="create" className="mt-[20px]"/>
        <h1 className="side w-[216px] text-center my-[10px] h-[48px] text-[#010101] font-[400] text-[20px] ">Create Folder</h1>
    </div>
  )
}

export default Createfolder