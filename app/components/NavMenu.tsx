"use client";

import NavMenuItem from "../types/NavMenuItem";
import INavMenuProps from "../interfaces/INavMenuProps";

import navMenu from "../constants/navMenu";

import Link from "next/link";

const NavMenu: React.FC<INavMenuProps> = ({ isVisible }) => {
  return (
    <ul
      className={`gap-4 tracking-wider hidden md:flex md:justify-center md:items-center ${
        isVisible ? "md:visible" : "md:invisible"
      }`}
    >
      {navMenu.map(({ id, title, path, tag }: NavMenuItem) => (
        <li key={id} className="p-2 ">
          {path ? <Link href={path}>{title}</Link> : <a href={tag}>{title}</a>}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
