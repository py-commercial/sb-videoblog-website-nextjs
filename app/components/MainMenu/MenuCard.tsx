"use client";

import IMainMenuItemProps from "@/app/interfaces/IMainMenuItemProps";

import Image from "next/image";
import Link from "next/link";

const MenuCard: React.FC<IMainMenuItemProps> = ({ menuCard }) => {
  const { id, title, description, img, path } = menuCard;

  return (
    <li
      key={id}
      className="main_card aspect-[1/2] p-2 content-block group overflow-hidden cursor-pointer"
    >
      <Link href={path}>
        <div className="mx-auto w-full h-[70%] rounded-xl overflow-hidden ">
          <Image src={img} alt={id} className="image-behavior" />
        </div>
        <div className="fx-col-center gap-4 h-[30%]">
          <h3 className="font-bold card-title-bahavior text-center tracking-wider">
            {title}
          </h3>
          <p className="px-3 card-text-behavior text-center tracking-wide">
            {description}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default MenuCard;
