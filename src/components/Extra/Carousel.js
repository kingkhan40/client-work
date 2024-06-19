import React, { useState, useEffect } from 'react';

function Carousel() {
  const images = [
    {
      id: 1,
      src: './images/carousel (1).jpg',
    },
    {
      id: 2,
      src: './images/carousel (2).jpg',
    },
    {
      id: 3,
      src: './images/carousel (3).jpg',
    },
    {
      id: 4,
      src: './images/carousel (4).jpg',
    },
    {
      id: 5,
      src: './images/carousel (5).jpg',
    },
    {
      id: 6,
      src: './images/carousel (6).jpg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  // Autoplay settings
  const autoplayInterval = 5000; // Time in milliseconds between slides
  const [isAutoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    let autoplayTimer;
    
    if (isAutoplayEnabled) {
      autoplayTimer = setInterval(handleNext, autoplayInterval);
    }

    return () => {
      clearInterval(autoplayTimer);
    };
  }, [activeIndex, isAutoplayEnabled]);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={image.src} alt={`Slide ${image.id}`} />
          </div>
        ))}
      </div>
     
      <div className="carousel-pagination">
        {images.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
     
    </div>
  );
}

export default Carousel;
