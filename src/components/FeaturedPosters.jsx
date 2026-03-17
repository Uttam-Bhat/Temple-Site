import React, { useState, useEffect } from 'react'
import './FeaturedPosters.css'

const posters = [
  {
    id: 1,
    title: 'Sample Poster Title',
    subtitle: 'Short description of the upcoming event or announcement goes here.',
    tag: 'Announcement',
    dateText: 'Mar 25 – Mar 27',
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

  return (
    <section className="featured-posters-section">
      <div className="container">
        <div className="featured-notice-card">
          <div className="featured-notice-left">
            <span className="featured-notice-pill">
              {currentPoster.tag || 'Announcement'}
            </span>
          </div>
          <div className="featured-notice-main">
            <h2 className="featured-notice-title">{currentPoster.title}</h2>
            {currentPoster.subtitle && (
              <p className="featured-notice-subtitle">
                {currentPoster.subtitle}
              </p>
            )}
          </div>
          {currentPoster.dateText && (
            <div className="featured-notice-right">
              <span className="featured-notice-date">
                {currentPoster.dateText}
              </span>
            </div>
          )}
        </div>

        {activePosters.length > 1 && (
          <div className="featured-notice-dots">
            {activePosters.map((poster, index) => (
              <button
                key={poster.id}
                type="button"
                className={`featured-notice-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Show announcement ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedPosters

