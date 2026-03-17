import React from 'react'
import './AnnouncementBadge.css'

const upcoming = {
  label: 'Upcoming Event',
  image: '/images/Upcoming/Ram Navami.jpg',
}

const AnnouncementBadge = () => {
  if (!upcoming) return null

  return (
    <section className="upcoming-section">
      <div className="container">
        <h2 className="upcoming-title-centered">{upcoming.label}</h2>
        {upcoming.image && (
          <div className="upcoming-track">
            <div className="upcoming-image-marquee">
              <img
                src={upcoming.image}
                alt={upcoming.label}
                className="upcoming-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default AnnouncementBadge

