import React from 'react';

interface EditPencilIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}

const EditPencilIcon: React.FC<EditPencilIconProps> = ({
    size = 24,
    color = 'currentColor',
    ...props
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M16.862 3.487a2.06 2.06 0 0 1 2.915 2.915l-11.1 11.1-3.09.344a1 1 0 0 1-1.11-1.11l.344-3.09 11.1-11.1z" />
        <path d="M15 6l3 3" />
    </svg>
);

export default EditPencilIcon;