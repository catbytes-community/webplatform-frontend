import React, { useState } from 'react';
import './Carousel.css';

interface VideoItem {
  snippet: {
    thumbnails: {
      medium: {
        url: string;
      };
    };
    title: string;
    resourceId: {
      videoId: string;
    };
  };
}

interface CarouselProps {
  items: VideoItem[];
  itemsPerView?: number;
  changeMainVideo: (videoId: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  itemsPerView = 4,
  changeMainVideo,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const itemWidth = 100 / itemsPerView;

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={prev} disabled={currentIndex === 0}>
        ‹
      </button>
      <div className="carousel-container">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}%)`,
            width: `100%`
          }}
        >
          {items.map((item) => {
            const thumb = item.snippet.thumbnails.medium.url;
            const text = item.snippet.title;

            const videoId = item.snippet.resourceId.videoId;

            return (
              <div
                key={videoId}
                className="carousel-item"
                style={{ width: `${itemWidth}%`, flex: `0 0 calc(100% / ${itemsPerView})` }}
              >
                <img style={{ width: '100%', height: 'auto' }} src={thumb} alt={text} title={text} onClick={() => changeMainVideo(videoId)}/>
              </div>
            )
          })}
        </div>
      </div>
      <button className="carousel-btn next" onClick={next} disabled={currentIndex >= maxIndex}>
        ›
      </button>
    </div>
  );
};

export default Carousel;