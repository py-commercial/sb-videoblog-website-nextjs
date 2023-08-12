import { createContext } from "react";

export const MediaContext = createContext({
  isTn: true,
  isSm: false,
  isMd: false,
  isLg: false,
  isXl: false,
  is2xl: false,
});
