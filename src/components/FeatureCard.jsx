import Image from "next/image";

const FeatureCard = ({ img, title, content }) => (
  <div className="border border-[#C5CBFD] flex flex-col justify-center items-start py-[23px] px-[26px] rounded-3xl max-w-[516px] max-h-[412px] md:mr-10 sm:mr-5 mr-0 my-5 bg-[#f5f6ff]">
    <Image
      src={img}
      alt="content_image"
      width={190}
      height={190}
      className="object-contain"
    />

    <div>
      <div className="flex flex-col">
        <h4 className="side font-normal text-[#010101] text-[24px] leading-[28px]">
          {title}
        </h4>
        <p className=" font-normal text-[15px] text-[#010101] leading-[22.5px] my-4">
          {content}
        </p>
      </div>
    </div>
  </div>
);

export default FeatureCard;
