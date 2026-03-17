import React from 'react'
import './AnnouncementBadge.css'

const upcoming = {
  title: 'Ram Navami',
  label: 'Upcoming Event',
  dateText: 'Mar 25 – Mar 27',
  image: '/images/Upcoming/Ram Navami.jpg',
}

const AnnouncementBadge = () => {
  if (!upcoming) return null

  return (
    <section className="upcoming-section">
      <div className="container">
        <div className="upcoming-header">
          <h2 className="upcoming-title">{upcoming.label}</h2>
          {upcoming.dateText && (
            <span className="upcoming-date">{upcoming.dateText}</span>
          )}
        </div>
        {upcoming.title && (
          <h3 className="upcoming-event-name">{upcoming.title}</h3>
        )}
        {upcoming.image && (
          <div className="upcoming-image-wrapper">
            <img
              src={upcoming.image}
              alt={upcoming.title}
              className="upcoming-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default AnnouncementBadge

