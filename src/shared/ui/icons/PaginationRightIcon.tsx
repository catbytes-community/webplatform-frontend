import { FC } from 'react';

type CrossIconProps = {
    width?: string;
    height?: string;
    fill?: string;
    stroke?: string;
};

const PaginationRightIcon: FC<CrossIconProps> = ({
    width = '24',
    height = '28',
    fill = 'none',
    stroke = 'black',
}) => (

    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        className="pt-1 ml-3 cursor-pointer"
    >
        <line y1="-0.5" x2="11.3616" y2="-0.5" transform="matrix(0.770436 0.637518 -0.770436 0.637518 1 0.660645)"
              stroke={stroke}/>
        <line y1="-0.5" x2="11.3616" y2="-0.5"
              transform="matrix(0.770436 -0.637518 0.770436 0.637518 1.24658 14.937)" stroke={stroke}/>
    </svg>
);

export default PaginationRightIcon;