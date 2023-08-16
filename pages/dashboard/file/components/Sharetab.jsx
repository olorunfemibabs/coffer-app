import { AiOutlineShareAlt, AiOutlineDownload } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';



const Sharetab = () => {
  return (
    <div className="mt-[30px] w-[1100px] flex justify-end space-x-6 mx-auto ">
            <AiOutlineShareAlt className="text-[#010101] h-[24px] w-[24px]" />
            <RiDeleteBinLine className="text-[#010101] h-[24px] w-[24px]" />
            <AiOutlineDownload className="text-[#010101] h-[24px] w-[24px]" />

    </div>
  )
}

export default Sharetab