// ImageSlider.js
import React, { useState } from 'react';
import './Component-container.css';

const ImageSlider = ({details}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg',
    'http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg',
    'http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg',
    'http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg',
    'http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg',
    'http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg',
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % details.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + details.length) % details.length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-container">
      <input type="radio" name="radio-btn" id={`img-${activeIndex + 1}`} checked style={{display:'none'}}/>
      <div className="slide-container">
        <div className="slide">
          
          <img src={images[activeIndex]} alt={`slide${activeIndex + 1}`} />
        </div>
        <div className="nav">
          <label htmlFor={`img-${(activeIndex - 1 + images.length) % images.length + 1}`} className="prev" onClick={prevSlide}>&#x2039;</label>
          <label htmlFor={`img-${(activeIndex + 1) % images.length + 1}`} className="next" onClick={nextSlide}>&#x203a;</label>
        </div>
      </div>

      <div className="nav-dots">
        {images.map((_, index) => (
          <label key={index} htmlFor={`img-${index + 1}`} className={`nav-dot ${index === activeIndex ? 'active' : ''}`} onClick={() => handleDotClick(index)}></label>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
