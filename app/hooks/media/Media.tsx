"use client";

import { useMediaQuery } from "react-responsive";
import { MediaContext } from "./MediaContext";

const Media = ({ children }: { children: React.ReactNode }) => {
  const isTn = useMediaQuery({ minWidth: 460 });
  const isSm = useMediaQuery({ minWidth: 600 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isXl = useMediaQuery({ minWidth: 1280 });
  const is2xl = useMediaQuery({ minWidth: 1536 });

  return (
    <MediaContext.Provider
      value={{
        isTn,
        isSm,
        isMd,
        isLg,
        isXl,
        is2xl,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export default Media;

// import { useMedia } from 'services/media/useMedia';

// const { isTiny, isSmall, isMedium, isLarge, isExtraLarge, isHuge } =
//   useMedia();
