"use client";

import IContainerProps from "../interfaces/IContainerProps";

import banners from "../constants/dummies/banners";

import BannerWithNoSSR from "../components/BannerWithNoSSR";

const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-8 md:grid-rows-1 md:grid-cols-8">
      <div className="row-start-1 md:col-span-1 p-2 md:pt-20 md:pr-0">
        <BannerWithNoSSR banner={banners[0]} />
      </div>

      <div className="row-span-6 md:row-start-1 col-span-2 md:col-span-6 px-4 py-20">
        {children}
      </div>

      <div className="row-start-1 col-start-1 md:col-span-1 p-2 md:pt-20 md:pl-0">
        <BannerWithNoSSR banner={banners[1]} />
      </div>
    </div>
  );
};

export default Container;
