"use client";

import announcement from "../constants/dummies/annoucement";

import Announcement from "../components/Announcement";
import MainMenu from "../components/MainMenu/MainMenu";

const MainClient = () => {
  return (
    <>
      <Announcement announcement={announcement} />
      <MainMenu />
    </>
  );
};

export default MainClient;
