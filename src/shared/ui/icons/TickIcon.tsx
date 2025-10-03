import React from 'react';

interface TickIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}

const TickIcon: React.FC<TickIconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M5 13l4 4L19 7" />
    </svg>
);

export default TickIcon;