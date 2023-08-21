import Image from "next/image"
import create from '../../../../assets/CreateFolder.png'




const Createfolder = ({open}) => {
  return (
    <div onClick={open} className="w-[350px] lgDesktop:w-[300px] lgDesktop:h-[250px] h-[280px] smDesktop:w-[217px] smDesktop:h-[200px] tabletAir:w-[245px] tablet:w-[208px] tablet:h-[190px] mobile:w-[144px] border-[#C5CBFD] rounded-2xl border-[1px] mt-[20px] mobile:h-[120px] ">
        <Image src={create} alt="create" className="mt-[20px] lgDesktop:w-[170px] lgDesktop:h-[170px] smDesktop:w-[120px] smDesktop:h-[120px] tablet:w-[100px] tablet:h-[100px] mobile:w-[60px] mobile:h-[60px] "/>
        <h1 className="side w-[216px] tablet:w-[100%] text-center my-[10px] h-[48px] mobile:h-[26px] mobile:text-[17px] side text-[#010101] font-[400] text-[20px] mobile:text-left mobile:ml-1 mobile:w-[100%]">Create Folder</h1>
    </div>
  )
}

export default Createfolder