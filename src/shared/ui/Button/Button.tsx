import React, {ReactElement} from "react";
import style from './Button.module.css'
import ArrowImg from './arrow.svg?react'
export enum ButtonsEnum {
    PRIMARY = 'primary_btn',
    SECONDARY = 'secondary_btn',
    TERTIARY = 'tertiary_btn'
}

interface ButtonProps {
    label: string;
    btnType: string
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = (props: ButtonProps): ReactElement => {
    return (
        <button
            className={props.btnType}
            onClick={props.onClick}>
            {props.label}
            {props.btnType === ButtonsEnum.TERTIARY && <ArrowImg/>}
        </button>
    );
}

export default Button