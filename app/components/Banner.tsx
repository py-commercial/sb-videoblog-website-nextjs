"use client";

import IBannerProps from "../interfaces/IBannerProps";

import useMedia from "../hooks/media/useMedia";

const Banner: React.FC<IBannerProps> = ({ banner }) => {
  if (!banner || !banner.horizontal || !banner.vertical || !banner.link) {
    console.log(
      `Banner ${banner.id} is missing some information. It will not be shown.`
    );
    return;
  }

  const { isMd } = useMedia();

  return (
    <aside className="block shadow-2 rounded-xl overflow-hidden ">
      <a
        href={banner.link}
        target="_blank"
        rel="noreferrer noopener"
        className="block w-full h-full"
      >
        <h2 className="visually-hidden">Advertising Banner</h2>
        {isMd ? (
          <img src={banner.vertical} alt="banner" className="w-full h-full" />
        ) : (
          <img src={banner.horizontal} alt="banner" className="w-full h-full" />
        )}
      </a>
    </aside>
  );
};

export default Banner;
