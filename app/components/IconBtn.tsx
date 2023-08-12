"use client";

import IIconBtnProps from "../interfaces/IIconBtnProps";

const IconBtn: React.FC<IIconBtnProps> = ({
  icon: Icon,
  btnSize,
  iconSize,
  bgColor = "transparent",
  color = "current",
  isRounded = true,
  hasBorder = true,
  borderWidth = 2,
  onClick,
}) => {
  const buttonStyle = {
    width: `${btnSize}px`,
    height: `${btnSize}px`,
    color,
    backgroundColor: bgColor,
    borderColor: hasBorder ? color : "transparent",
    borderWidth: hasBorder ? `${borderWidth}px` : "0",
    borderRadius: isRounded ? "50%" : "none",
  };

  return (
    <button
      className="fx-center overflow-hidden"
      style={buttonStyle}
      type="button"
      onClick={onClick}
    >
      <Icon size={iconSize} />
    </button>
  );
};

export default IconBtn;
