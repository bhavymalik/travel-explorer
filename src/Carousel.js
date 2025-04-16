// Carousel.js
import React, { useState, useEffect } from 'react';

const carouselData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1518684079-2fa665a09b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    alt: 'Majestic Mountains',
    title: 'Majestic Mountains',
    description: 'Experience the serene beauty and grandeur of towering peaks.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    alt: 'Tropical Beaches',
    title: 'Tropical Beaches',
    description: 'Relax on pristine sandy shores under the tropical sun.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    alt: 'Lush Forests',
    title: 'Lush Forests',
    description: 'Explore verdant forests brimming with rich biodiversity.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    alt: 'Vibrant Cityscapes',
    title: 'Vibrant Cityscapes',
    description: 'Discover the dynamic energy of metropolitan life.',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = carouselData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carouselData.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.image} alt={slide.alt} />
            <div className="overlay">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>&#10094;</button>
      <button className="next" onClick={handleNext}>&#10095;</button>
      <div className="dots">
        {carouselData.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
