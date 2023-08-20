import React from "react";
import { prices } from "../constants";
import { Plan } from "./Plan";

const Deals = () => {
  return (
    <section className="sm:py-16  ">
      <div className="w-full flex flex-col justify-center items-center sm:mb-16 mb- relative">
        <h2 className="side text-center font-bold md:text-[64px] text-[32px] text-[#1B2AB8] xs:leading-[72px] leading-[47.39px] w-full">
          <div className="space-x-8 items-center mb-3 tracking-10 linear_col">
            <span className="capitalize linear_col">Choose the best plan</span>
          </div>
          <div className="mt-3 sm:mt-6">For You</div>
        </h2>
      </div>

      <div className="flex scrollbar-hide overflow-x-scroll overflow-y-hidden gap-8 flex-nowrap lg:justify-center items-end w-full mt-6 sm:mt-0">
        {prices?.map((card) => (
          <Plan key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
};

export default Deals;
