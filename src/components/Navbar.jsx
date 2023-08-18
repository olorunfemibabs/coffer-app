import React, { useState } from "react";

import { navLinks } from "../constants";
import { COFFER } from "../../public/assets";
import Image from "next/image";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import styles from "../../styles/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  let [open, setOpen] = useState(false);

  return (
    <div>
      <div className=" flex items-center justify-between text-[#010101] text-base font-medium">
        <Link href="/">
          <Image
            src={COFFER}
            alt="coffer-logo"
            width={150}
            height={48}
            className=" object-contain"
          />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className=" text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <MdOutlineClose /> : <HiMenuAlt3 />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[100] right-4  w-[70%] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open ? "top-20 bg-[#FFFFFF] rounded-2xl shadow-lg" : "top-[-490px]"
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="md:ml-[32px] text-base md:my-0 my-7 mb-[10px]"
            >
              <Link
                href={link.address}
                className={` border border-transparent ${
                  router.pathname == link.address
                    ? "text-[#010101] border !border-[#010101] rounded-2xl px-[24px] py-[8px]"
                    : ""
                }  hover:border hover:text-[#F5F6FF] hover:bg-[#010101] rounded-2xl px-[24px] py-[8px] duration-500 ease-in-out`}
              >
                {link.title}
              </Link>
            </li>
          ))}

          <div className="md:ml-6 md:my-0 my-7 mb-[10px]">
            <ConnectButton />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
