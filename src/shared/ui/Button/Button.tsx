import React, { ReactElement } from "react";
//import style from "./Button.module.css";
import ArrowImg from "./arrow.svg";
export enum ButtonsEnum {
  PRIMARY = "primary_btn",
  SECONDARY = "secondary_btn",
  TERTIARY = "tertiary_btn",
  TERTIARY_NO_ARROW = "tertiary_no_arrow_btn",
  PIMARY_BIG = "primary_big_btn",
}

interface ButtonProps {
  label: string;
  btnType: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  btnType,
  onClick,
  disabled = false,
}): ReactElement => {
  return (
    <button
      className={`${btnType} ${disabled ? "cursor-not-allowed" : ""}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled} // Важно передать в сам <button>
    >
      {label}
      {btnType === ButtonsEnum.TERTIARY && <ArrowImg />}
    </button>
  );
};

export default Button;
