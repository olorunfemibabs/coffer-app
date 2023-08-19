import FeatureCard from "./FeatureCard";
import { features } from "../constants";

const Business = () => (
  <section className="sm:py-16 py-6 flex justify-center items-center flex-col">
    <div className="w-full sm:px-16 px-6 flex flex-col justify-center items-center sm:mb-16 mb-6 relative">
      <h2 className="side font-bold md:text-[64px] text-[32px] text-[#1B2AB8] xs:leading-[72px] leading-[47.39px] w-full">
        <div className=" flex items-center mb-3">
          Securing <span className=" text-[rgb(112,125,242)]">Memories</span>
        </div>
        <div className=" mt-6">Your Personal Photo Haven</div>
      </h2>

      <div className="w-full md:mt-0 mt-6">
        <p className="side font-normal text-[#010101] md:text-[24px] text-[17px] leading-[30.8px]">
          Coffer bring about Preserving Memories, One Click at a Time - Store,
          Share, Relive
        </p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row flex-nowrap sm:justify-start justify-center w-full">
      {features?.map((card) => (
        <FeatureCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Business;
