"use client";

import { TbLogin, TbLogout } from "react-icons/tb";
import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";

import IconBtn from "./IconBtn";

const UserMenu = () => {
  const user = true;

  return (
    <>
      {user ? (
        <div className="fx-start gap-4">
          <div className="fx-center w-10 h-10 border-unter border-2 rounded-full overflow-hidden">
            <BsFillPersonFill size={22} />
          </div>
          <IconBtn
            icon={TbLogout}
            btnSize={40}
            iconSize={22}
            onClick={() => {}}
          />
        </div>
      ) : (
        <div className="fx-start gap-4">
          <IconBtn
            icon={BsFillPersonPlusFill}
            btnSize={40}
            iconSize={22}
            onClick={() => {}}
          />
          <IconBtn
            icon={TbLogin}
            btnSize={40}
            iconSize={22}
            onClick={() => {}}
          />
        </div>
      )}
    </>
  );
};

export default UserMenu;
