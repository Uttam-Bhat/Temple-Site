import React from 'react'
import './VardhanthiUtsava.css'

const VardhanthiUtsava = () => {
  // TODO: Replace these placeholder image paths with actual event images
  // Place your event images in public/images/events/ directory
  const eventImages = [
    {
      id: 1,
      // TODO: Replace with actual image path: src="/images/events/event1.jpg"
      image: "https://via.placeholder.com/400x300/718096/ffffff?text=Event+Image+1",
      alt: "Event Image 1"
    },
    {
      id: 2,
      // TODO: Replace with actual image path: src="/images/events/event2.jpg"
      image: "https://via.placeholder.com/400x300/4a5568/ffffff?text=Event+Image+2",
      alt: "Event Image 2"
    },
    {
      id: 3,
      // TODO: Replace with actual image path: src="/images/events/event3.jpg"
      image: "https://via.placeholder.com/400x300/2d3748/ffffff?text=Event+Image+3",
      alt: "Event Image 3"
    },
    {
      id: 4,
      // TODO: Replace with actual image path: src="/images/events/event4.jpg"
      image: "https://via.placeholder.com/400x300/1a202c/ffffff?text=Event+Image+4",
      alt: "Event Image 4"
    },
    {
      id: 5,
      // TODO: Replace with actual image path: src="/images/events/event5.jpg"
      image: "https://via.placeholder.com/400x300/718096/ffffff?text=Event+Image+5",
      alt: "Event Image 5"
    },
    {
      id: 6,
      // TODO: Replace with actual image path: src="/images/events/event6.jpg"
      image: "https://via.placeholder.com/400x300/4a5568/ffffff?text=Event+Image+6",
      alt: "Event Image 6"
    }
  ]

  return (
    <section className="vardhanthi-section" id="vardhanthi">
      <div className="container">
        <h2 className="section-title">
          <span className="title-highlight">Vardhanthi</span> Utsava
        </h2>
        <p className="section-description">
          A glimpse of Vardhanti Utsava held at our temple. This annual celebration brings 
          together devotees from all over to participate in the festivities and seek blessings.
        </p>
        
        <div className="event-gallery">
          {eventImages.map((item) => (
            <div key={item.id} className="event-image-card">
              {/* TODO: Replace placeholder image with actual event image */}
              {/* Recommended image size: 400x300px or similar aspect ratio */}
              <img 
                src={item.image} 
                alt={item.alt}
                className="event-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VardhanthiUtsava

