import { prices } from "../constants";
import { Plan } from "./Plan";

const PricingPlans = () => (
  <section className="sm:py-16 py-6 ">
    <div className="w-full flex flex-col justify-center items-center sm:mb-16 mb- relative">
      <h2 className="side text-center font-bold md:text-[64px] text-[32px] text-[#1B2AB8] xs:leading-[72px] leading-[47.39px] w-full">
        <div className="space-x-8 items-center mb-3 tracking-10 linear_col">
          <span className="capitalize linear_col">Choose the best plan</span>
        </div>
        <div className="mt-3 sm:mt-6">For You</div>
      </h2>
    </div>

    <div className="flex overflow-x-scroll overflow-y-hidden gap-8 flex-nowrap sm:justify-start w-full mt-6 pt-12 sm:mt-0">
      {prices?.map((card) => (
        <Plan key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default PricingPlans;
