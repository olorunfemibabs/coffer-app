import React from "react";
import { testimonials } from "../constants";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section className="">
      <div className="w-full flex flex-col justify-center items-center sm:mb-16 relative">
        <span className="side text-center font-bold border py-2 px-8 block text-base text-black rounded-2xl  tracking-[1.4px] w-fit">
          Testimonials
        </span>
      </div>

      <div className="flex scrollbar-hide overflow-x-scroll overflow-y-hidden gap-8 flex-nowrap lg:justify-center items-center w-full mt-6 sm:mt-0">
        {testimonials.slice(0, 3)?.map((card, i) => (
          <Testimonial key={i} {...card} />
        ))}
      </div>
      <div className="flex scrollbar-hide mt-10 overflow-x-scroll overflow-y-hidden gap-8 flex-nowrap lg:justify-center items-center w-full">
        {testimonials.slice(3, 6)?.map((card, index) => (
          <Testimonial key={index} {...card} />
        ))}
      </div>
    </section>
  )
};

export default Testimonials;
