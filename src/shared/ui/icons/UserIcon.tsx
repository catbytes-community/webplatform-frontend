import { FC } from 'react';

type UserIconProps = {
    width?: string;
    height?: string;
    fill?: string;
    stroke?: string;
};

const UserIcon: FC<UserIconProps> = ({
                                         width = '24',
                                         height = '24',
                                         fill = 'none',
                                         stroke = 'black',
                                     }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="12"
            cy="12"
            r="10"
            stroke={stroke}
            strokeWidth="2"
            fill="none"
        />
        <circle
            cx="12"
            cy="9"
            r="3"
            stroke={stroke}
            strokeWidth="2"
            fill="none"
        />
        <path
            d="M7 16C7 16 9 14 12 14C15 14 17 16 17 16"
            stroke={stroke}
            strokeWidth="2"
            fill="none"
        />
    </svg>
);

export default UserIcon;
