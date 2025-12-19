// src/components/HeroCarousel.jsx
import { useState, useEffect } from 'react';
import './HeroCarousel.css';

// Importera dina bilder
import heroImage1 from '../assets/image/EcHeroE.webp';
import ventilationImage from '../assets/image/EcHeroA.webp'; // Byt till ditt filnamn
import plumbingImage from '../assets/image/EcHeroH.webp'; // Byt till ditt filnamn

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: heroImage1,
      title: 'Anlita en expert redan idag!',
      description: 'Vi på EP ventilation erbjuder professionell service med erfarenhet i hela Sverige.',
      ctaText: 'Boka tjänst',
      ctaLink: '/contact'
    },
    {
      id: 2,
      image: ventilationImage,
      title: 'Ventilationsservice',
      description: 'Regelbunden rengöring och underhåll för optimal inomhusluftkvalitet.',
      ctaText: 'Läs mer',
      ctaLink: '/services'
    },
    {
      id: 3,
      image: plumbingImage,
      title: 'Avloppsservice',
      description: 'Specialister på avloppsproblem - från akuta stopp till förebyggande underhåll.',
      ctaText: 'Kontakta oss',
      ctaLink: '/contact'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  return (
    <div className="hero-carousel">
      {/* Slides Container */}
      <div className={`slides-container ${isTransitioning ? 'transitioning' : ''}`}>
        {slides.map((slide, index) => (
         // Så här ska din slide se ut UTON overlay:
<div
  key={slide.id}
  className={`slide ${index === currentSlide ? 'active' : ''}`}
  style={{
    backgroundImage: `url(${slide.image})`
  }}
>
  {/* INGEN slide-overlay här */}
  <div className="slide-content">
    <h1>{slide.title}</h1>
    <p>{slide.description}</p>
    <a href={slide.ctaLink} className="btn btn-primary">
      {slide.ctaText}
    </a>
  </div>
</div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="carousel-arrow prev" 
        onClick={prevSlide} 
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button 
        className="carousel-arrow next" 
        onClick={nextSlide} 
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="carousel-progress">
        <div 
          className="progress-bar" 
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transition: isTransitioning ? 'none' : 'width 4.7s linear'
          }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;