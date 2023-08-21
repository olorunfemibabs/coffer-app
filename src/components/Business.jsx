import FeatureCard from "./FeatureCard";
import { features } from "../constants";

const Business = () => (
  <section className="sm:py-16 py-8">
    <div className="w-full flex flex-col justify-center items-center sm:mb-16 mb- relative">
      <h2 className="sid font-secondary text-center font-bold md:text-[64px] text-[32px] text-[#1B2AB8] xs:leading-[72px] leading-[47.39px] w-full">
        <div className="space-x-8 items-center mb-3 tracking-10">
          <span>Securing</span>
          <span className="text-[rgb(112,125,242)]">Memories</span>
        </div>
        <div className="mt-3 sm:mt-10">Your Personal Photo Haven</div>
      </h2>

      <div className="w-full text-center md:mt-16 mt-4 font-primary">
        <span className="font-normal side sm:text-center mt-20 sm:mt-10 text-[#010101] sm:text-2xl text-[17px] leading-[30.8px]">
          Coffer bring about Preserving Memories, One Click at a Time - Store,
          Share, Relive
        </span>
      </div>
    </div>

    <div className="flex scrollbar-hide overflow-x-scroll overflow-y-hidden gap-8 flex-nowrap sm:justify-start w-full mt-6 pt-12 sm:mt-0">
      {features?.map((card) => (
        <FeatureCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Business;
