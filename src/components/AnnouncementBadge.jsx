import React, { useEffect, useState } from 'react'
import './AnnouncementBadge.css'

const posters = [
  {
    id: 1,
    title: 'Sample Poster Title',
    subtitle: 'Short description of the upcoming event or announcement goes here.',
    tag: 'Announcement',
    dateText: 'Mar 25 – Mar 27',
    // Replace with actual image path, e.g. '/images/announcements/sample.jpg'
    image: '/images/sample-poster.jpg',
    active: true,
  },
]

const AnnouncementBadge = () => {
  const activePosters = posters.filter((p) => p.active)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (activePosters.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activePosters.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [activePosters.length])

  if (activePosters.length === 0) return null

  const currentPoster = activePosters[currentIndex]

  return (
    <div className="announcement-badge">
      <div className="announcement-card">
        <div className="announcement-card-image">
          {currentPoster.image && (
            <img
              src={currentPoster.image}
              alt={currentPoster.title}
              className="announcement-card-image-img"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
        <div className="announcement-text">
          <div className="announcement-title-row">
            <span className="announcement-label">
              {currentPoster.tag || 'Announcement'}
            </span>
            {currentPoster.dateText && (
              <span className="announcement-date">
                {currentPoster.dateText}
              </span>
            )}
          </div>
          <h2 className="announcement-title">{currentPoster.title}</h2>
          {currentPoster.subtitle && (
            <p className="announcement-subtitle">{currentPoster.subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBadge

