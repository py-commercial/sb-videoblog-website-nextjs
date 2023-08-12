import MainMenuItem from "../types/MainMenuItem";

import mainMenu from "../constants/mainMenu";

import Image from "next/image";
import Link from "next/link";

const MainMenu = () => {
  return (
    <ul
      id="main-menu"
      className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-8 text-current"
    >
      {mainMenu.map(({ id, title, description, img, path }: MainMenuItem) => (
        <li
          key={id}
          className="main_card aspect-[1/2] p-2 shadow-1 bg-primary-800/80 md:bg-primary-700/60 md:hover:bg-primary-800/80 rounded-xl overflow-hidden cursor-pointer group  transition-all ease-out duration-500"
        >
          <Link href={path}>
            <div className="mx-auto w-full h-[70%] rounded-xl overflow-hidden ">
              <Image
                src={img}
                alt={id}
                className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform ease-out duration-500"
              />
            </div>
            <div className="fx-col-center gap-4 h-[30%]">
              <h3 className="font-bold text-lg tn:text-2xl sm:text-lg lg:text-2xl xl:text-lg 2xl:text-2xl text-center tracking-wider">
                {title}
              </h3>
              <p className="px-3 text-center text-base tn:text-xl sm:text-base lg:text-xl xl:text-base 2xl:text-xl tracking-wide">
                {description}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
