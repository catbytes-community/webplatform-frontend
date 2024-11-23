import { FC } from 'react';

type CrossIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
};

const CrossIcon: FC<CrossIconProps> = ({
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
    <path
      d="M12 6L12 18"
      stroke={stroke}
      strokeLinecap="round"
    />
    <path
      d="M18 12L6 12"
      stroke={stroke}
      strokeLinecap="round"
    />
  </svg>
);

export default CrossIcon;
