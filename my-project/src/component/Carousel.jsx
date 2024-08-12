import React, { useState } from 'react';
import './style.css'; // Import the CSS file for styling

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'certificate1.jpeg',
    'certification2.jpeg',
    'certificate1.jpeg'  
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-slides">
        <img src={images[currentIndex]} alt={ `${currentIndex + 1}`} />
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;