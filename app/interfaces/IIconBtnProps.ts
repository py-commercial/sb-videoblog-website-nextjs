import { IconType } from "react-icons/lib";

interface IIconBtnProps {
  icon: IconType;
  btnSize: number;
  iconSize: number;
  bgColor?: string;
  color?: string;
  isRounded?: boolean;
  hasBorder?: boolean;
  borderWidth?: number;
  onClick: () => void;
}

export default IIconBtnProps;
