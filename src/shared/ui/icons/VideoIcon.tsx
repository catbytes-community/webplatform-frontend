import { FC } from 'react';

type VideoIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
};

const VideoIcon: FC<VideoIconProps> = ({
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
      d="M16.2111 11.1056L9.73666 7.86833C8.93878 7.46939 8 8.04958 8 8.94164V15.0584C8 15.9504 8.93878 16.5306 9.73666 16.1317L16.2111 12.8944C16.9482 12.5259 16.9482 11.4741 16.2111 11.1056Z"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="9" stroke={stroke} />
  </svg>
);

export default VideoIcon;
