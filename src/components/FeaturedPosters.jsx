import React, { useState, useEffect } from 'react'
import './FeaturedPosters.css'

const posters = [
  {
    id: 1,
    title: 'Sample Poster Title',
    subtitle: 'Short description of the upcoming event or announcement goes here.',
    tag: 'Upcoming',
    dateText: 'Mar 25 – Mar 27',
    image: '/images/sample-poster.jpg', // replace with actual poster image
    link: null,
    active: true,
  },
]

const FeaturedPosters = () => {
  const activePosters = posters.filter((p) => p.active)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (activePosters.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activePosters.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [activePosters.length])

  if (activePosters.length === 0) {
    return null
  }

  const currentPoster = activePosters[currentIndex]

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  const handleCardClick = () => {
    if (currentPoster.link) {
      window.open(currentPoster.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="featured-posters-section">
      <div className="container">
        <div
          className={`featured-poster-card ${currentPoster.link ? 'clickable' : ''}`}
          onClick={currentPoster.link ? handleCardClick : undefined}
        >
          <div className="featured-poster-image-wrapper">
            <img
              src={currentPoster.image}
              alt={currentPoster.title}
              className="featured-poster-image"
              loading="lazy"
              decoding="async"
            />
            {currentPoster.tag && (
              <span className="featured-poster-tag">
                {currentPoster.tag}
              </span>
            )}
          </div>
          <div className="featured-poster-content">
            <div className="featured-poster-header">
              <h2 className="featured-poster-title">{currentPoster.title}</h2>
              {currentPoster.dateText && (
                <span className="featured-poster-date">{currentPoster.dateText}</span>
              )}
            </div>
            {currentPoster.subtitle && (
              <p className="featured-poster-subtitle">{currentPoster.subtitle}</p>
            )}
            {currentPoster.link && (
              <button
                type="button"
                className="featured-poster-button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleCardClick()
                }}
              >
                View Details
              </button>
            )}
          </div>
        </div>

        {activePosters.length > 1 && (
          <div className="featured-poster-dots">
            {activePosters.map((poster, index) => (
              <button
                key={poster.id}
                type="button"
                className={`featured-poster-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Show poster ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedPosters

