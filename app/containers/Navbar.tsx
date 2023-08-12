"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useCallback } from "react";

import { TbMenu2 } from "react-icons/tb";

import IconBtn from "../components/IconBtn";
import NavMenu from "../components/NavMenu";
import UserMenu from "../components/UserMenu";

const Navbar = () => {
  const [visibility, setVisibility] = useState<boolean>(false);

  const handleMouseOver = useCallback(
    () => setTimeout(() => setVisibility(true), 100),
    [setVisibility]
  );

  const handleMouseLeave = useCallback(
    () => setVisibility(false),
    [setVisibility]
  );

  return (
    <nav
      className="fixed z-50 left-[50%] -translate-x-[50%] w-[100vw] 2xl:max-w-[1600px] px-4 py-3 sm:px-6 md:px-8 md:py-4 flex fx-between text-unter bg-primary-700/80 md:bg-transparent md:hover:bg-primary-700/80 transition-colors duration-500 ease-out"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-4">
        <Link
          href="./"
          className="fx-center w-10 h-10 border-unter border-2 rounded-full overflow-hidden"
        >
          <Image src="/images/logo.png" alt="logo" width={22} height={22} />
        </Link>

        <IconBtn icon={TbMenu2} btnSize={40} iconSize={22} onClick={() => {}} />
      </div>

      <NavMenu isVisible={visibility} />

      <UserMenu />
    </nav>
  );
};

export default Navbar;
