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
        <div className="featured-badge-card">
          <div className="featured-badge-label">
            <span>{currentPoster.tag || 'Announcement'}</span>
          </div>
          <div className="featured-badge-main">
            <div className="featured-badge-title-row">
              <h2 className="featured-badge-title">{currentPoster.title}</h2>
              {currentPoster.dateText && (
                <span className="featured-badge-date">
                  {currentPoster.dateText}
                </span>
              )}
            </div>
            {currentPoster.subtitle && (
              <p className="featured-badge-subtitle">
                {currentPoster.subtitle}
              </p>
            )}
          </div>
        </div>

        {activePosters.length > 1 && (
          <div className="featured-badge-dots">
            {activePosters.map((poster, index) => (
              <button
                key={poster.id}
                type="button"
                className={`featured-badge-dot ${
                  index === currentIndex ? 'active' : ''
                }`}
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

