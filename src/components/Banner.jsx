import React, { useState, useEffect } from 'react'
import './Banner.css'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      image: '/images/temple.jpg',
      alt: 'Shri Venkataramana Temple exterior'
    },
    {
      id: 2,
      image: '/images/banner-2.png',
      mobileImage: '/images/banner-2(mobile).png',
      alt: 'Temple festival celebration banner'
    },
    {
      id: 3,
      image: '/images/banner-3.png',
      mobileImage: '/images/banner-3(mobile).png',
      alt: 'Cultural events and rituals collage'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-slider">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
            >
              {/* TODO: Replace placeholder image with actual banner image */}
              {/* Recommended image size: 1920x600px or similar aspect ratio */}
              {slide.mobileImage ? (
                <picture className="banner-picture">
                  <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                  <img 
                    src={slide.image} 
                    alt={slide.alt}
                    className="banner-image"
                  />
                </picture>
              ) : (
                <img 
                  src={slide.image} 
                  alt={slide.alt}
                  className="banner-image"
                />
              )}
              <div className="banner-overlay"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="banner-nav banner-nav-prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button 
          className="banner-nav banner-nav-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Dots Indicator */}
        <div className="banner-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`banner-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner

