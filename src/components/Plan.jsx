import { charm_tick_double } from "@/public/assets";
import Image from "next/image";

export const Plan = ({ id, title, price, text, sub_heading, volume, content }) => {
  return (
    <div className={`${id === "Premium" && "h-[708px]"} grow bg-mainColor block text-white side px-10 min-w-[340px] w-[382px] w-full h-[618px] rounded-t-[20px]`}>
      <div className="text-center grid">
        <span className="text-base font-normal leading-6 mt-10 mb-6">{id}</span>
        <span className="font-bold leading-6 text-5xl">{price}</span>
        <span className="mt-10 mb-6">{text}</span>
      </div>
      <hr />
      <div className="grid">
        <span className="mt-8 mb-6 text-base">{content}</span>
        <div className="flex space-x-4">
          <Image
            src={charm_tick_double}
            alt="shelf"
            className="w-6"
          />
          <span className="my-2">{volume} Photo Space</span>
        </div>
      </div>
    </div>
  )
}