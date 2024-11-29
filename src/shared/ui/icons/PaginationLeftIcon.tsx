import { FC } from 'react';

type CrossIconProps = {
    width?: string;
    height?: string;
    fill?: string;
    stroke?: string;
};

const PaginationLeftIcon: FC<CrossIconProps> = ({
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
        className="pt-1 cursor-pointer"
    >
        <line y1="-0.5" x2="11.3616" y2="-0.5" transform="matrix(-0.770436 0.637518 0.770436 0.637518 10 1)"
              stroke={stroke}/>
        <line y1="-0.5" x2="11.3616" y2="-0.5"
              transform="matrix(-0.770436 -0.637518 -0.770436 0.637518 9.75342 15.2764)" stroke={stroke}/>
    </svg>
);

export default PaginationLeftIcon;