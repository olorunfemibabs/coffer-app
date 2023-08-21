import Business from "@/src/components/Business";
import Clients from "@/src/components/Clients";
import Deals from "@/src/components/Deals";
import Exist from "@/src/components/Exist";
import Footer from "@/src/components/Footer";
import Goal from "@/src/components/Goal";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Objective from "@/src/components/Objective";
import PricingPlans from "@/src/components/PricingPlans";
import Testimonials from "@/src/components/Testimonials";
import Image from "next/image";
import { Ellipse_1 } from "@/public/assets";

export default function Home() {
  return (
    <main className=" h-screen bg-[#F5F6FF]">
      <div className=" sm:px-16 px-6 py-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className=" md:flex just justify-end items-center hidden">
        <Image
          src={Ellipse_1}
          alt="ellipse"
          width={20}
          height={20}
          className=" mr-80"
        />
      </div>

      <div className="flex justify-center bg-[#F5F6FF] items-start sm:px-16 px-6 py-6">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className=" bg-[#F5F6FF] flex justify-center items-start w-full">
        <Clients />
      </div>

      <div className="bg-[#F5F6FF] md:px-16 px-6 py-6 flex justify-center items-start">
        <div className="w-full">
          <Business />
        </div>
      </div>

      <div className="bg-objective-pattern bg-no-repeat bg-cover sm:bg-none sm:bg-[#0e1a87] flex justify-center items-start">
        <Objective />
      </div>

      <div className="bg-flow-pattern bg-no-repeat bg-fill bg-bottom sm:bg-none bg-[#C5CBFD] flex justify-center items-start">
        <Exist />
      </div>

      <div className="bg-[#F5F6FF] md:px-16 px-6 py-6 flex justify-center items-start">
        <div className="w-full">
          <Deals />
        </div>
      </div>
      <div className="bg-[#F5F6FF] md:px-16 px-6 pt-6 pb-24 flex justify-center items-start">
        <div className="w-full">
          <Testimonials />
        </div>
      </div>

      <div className="bg-mainColor md:px-16 px-6 py-6 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
