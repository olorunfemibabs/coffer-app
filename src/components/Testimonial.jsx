import Image from "next/image";

const Testimonial = ({ image, name, username, comment }) => (
  <div className="border p-6 block text-white side min-w-[340px] w-[382px] w-full h-[200px] rounded-[20px]" >
    <div className="flex gap-3 items-center text-black grotesk">
      <Image
        src={image}
        alt="user_photo"
        className="w-6"
      />
      <div className="grid text-xs font-bold tracking-[0.156px]">
        <span className="">{name}</span>
        <span>{username}</span>
      </div>
    </div>
    <p className="text-xs pt-2 font-normal mt-1 tracking-[0.156px] text-black">{comment}</p>
  </div>
);

export default Testimonial;