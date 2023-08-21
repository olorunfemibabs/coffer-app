/** @format */

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BottomMenu() {
    const pathname = usePathname();
  const menu = [
    {
      name: "Home",
      icon: "/../Icon/home.svg",
      activeIcon: "/../Icon/homeActive.svg",
      href: "/dashboard/home",
    },
    {
      name: "Search",
      icon: "/../Icon/search.svg",
      activeIcon: "/../Icon/activeSearch.svg",
      href: "/dashboard/search",
    },
    {
      name: "Files",
      icon: "/../Icon/file.svg",
      activeIcon: "/../Icon/ActiveFile.svg",
      href: "/dashboard/file",
    },
    {
      name: "Activity",
      icon: "/../Icon/activity.svg",
      activeIcon: "/../Icon/activeActivity.svg",
      href: "/dashboard/activity",
    },
  ];
  return (
    <main className="fixed bottom-0 w-[100%]">
      <section className="bg-[#5060E9] w-[100%] h-[104px] rounded-t-3xl">
        <div className="w-[80%] pt-[20px] mx-auto flex justify-between">
          {menu.map((item, index) => {
            const isActive = pathname?.startsWith(item?.href);
            return (
              <Link
                key={index}
                href={item?.href}
                className="flex items-center flex-col"
              >
                {!isActive ? (
                  <img src={item?.icon} className=" w-[30px] h-[30px] surfDuo:w-[20px] surfDuo:h-[20px] mobile:w-[20px] mobile:h-[20x] "/>
                ) : (
                  <img src={item?.activeIcon}  className=" w-[30px] h-[30px] surfDuo:w-[20px] surfDuo:h-[20px] mobile:w-[20px] mobile:h-[20x]" />
                )}

                <h2 className={`text-[24px] surfDuo:text-[16px] mobile:text-[14px] font-normal mt-1 side  ${isActive ? "text-[#0E1A87]" : "text-[#FEFEFE]"}`}>
                  {item?.name}
                </h2>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
