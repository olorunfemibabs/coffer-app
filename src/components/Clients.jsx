import Image from "next/image";
import { clients } from "../constants";

const Clients = () => (
  <section className="flex justify-center items-center my-4 border-red-700 bg-[#98a1f9] w-full rounded-tl-3xl rounded-br-3xl">
    <div className="flex justify-center items-center flex-wrap w-full">
      {clients.map(({ id, logo }) => (
        <div
          key={id}
          className="flex justify-center items-center sm:min-w-[192px] min-w-[120px] mx-5 my-3 glow"
        >
          <Image
            src={logo}
            alt="client_logo"
            className="sm:w-[192px] w-[120px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
