import {FC} from 'react';

type CrossIconProps = {
    width?: string;
    height?: string;
    fill?: string;
    stroke?: string;
};

const MagnifyingGlassIcon: FC<CrossIconProps> = ({
     width = '24',
     height = '28',
     fill = 'none',
     stroke = 'black',
 }) => (
    <div className="flex relative">
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 21L9 1H7L7 21H9Z"
                fill={stroke}/>
        </svg>
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3"
        >
            <path
                d="M8.70711 20.7071C8.31658 21.0976 7.68342 21.0976 7.29289 20.7071L0.928932 14.3431C0.538408 13.9526 0.538408 13.3195 0.928932 12.9289C1.31946 12.5384 1.95262 12.5384 2.34315 12.9289L8 18.5858L13.6569 12.9289C14.0474 12.5384 14.6805 12.5384 15.0711 12.9289C15.4616 13.3195 15.4616 13.9526 15.0711 14.3431L8.70711 20.7071ZM9 0L9 20H7L7 0L9 0Z"
                fill={stroke}/>
        </svg>
    </div>

);

export default MagnifyingGlassIcon;