import dynamic from "next/dynamic";
import IBannerProps from "../interfaces/IBannerProps";

const BannerWithNoSSR = dynamic(() => import("./Banner"), {
  ssr: false,
});

export default ({ banner }: IBannerProps) => (
  <BannerWithNoSSR banner={banner} />
);
