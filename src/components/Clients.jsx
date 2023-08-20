import Image from "next/image";
import { clients } from "../constants";

const Clients = () => (
  <section className="flex justify-center items-center my-4 bg-[#98a1f9] w-full rounded-tl-3xl rounded-br-3xl">
    <div className="flex justify-center items-center flex-wrap w-full">
      {clients.map(({ id, logo }) => (
        <div
          key={id}
          className="flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5 glow"
        >
          <Image
            src={logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
