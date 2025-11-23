import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import './Page.css'

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)
  
  // TODO: Replace these placeholder image paths with actual gallery images
  // Place your gallery images in public/images/gallery/ directory
  const events = [
    {
      id: 1,
      name: "Brahmotsavam",
      title: "Annual Brahmotsavam Festival",
      coverImage: "https://via.placeholder.com/400x300/4a5568/ffffff?text=Brahmotsavam",
      images: [
        "https://via.placeholder.com/800x600/4a5568/ffffff?text=Brahmotsavam+1",
        "https://via.placeholder.com/800x600/718096/ffffff?text=Brahmotsavam+2",
        "https://via.placeholder.com/800x600/2d3748/ffffff?text=Brahmotsavam+3",
        "https://via.placeholder.com/800x600/1a202c/ffffff?text=Brahmotsavam+4"
      ]
    },
    {
      id: 2,
      name: "Rama Navami",
      title: "Rama Navami Celebrations",
      coverImage: "https://via.placeholder.com/400x300/718096/ffffff?text=Rama+Navami",
      images: [
        "https://via.placeholder.com/800x600/718096/ffffff?text=Rama+Navami+1",
        "https://via.placeholder.com/800x600/4a5568/ffffff?text=Rama+Navami+2",
        "https://via.placeholder.com/800x600/2d3748/ffffff?text=Rama+Navami+3"
      ]
    },
    {
      id: 3,
      name: "Krishna Janmashtami",
      title: "Krishna Janmashtami Festival",
      coverImage: "https://via.placeholder.com/400x300/2d3748/ffffff?text=Janmashtami",
      images: [
        "https://via.placeholder.com/800x600/2d3748/ffffff?text=Janmashtami+1",
        "https://via.placeholder.com/800x600/1a202c/ffffff?text=Janmashtami+2",
        "https://via.placeholder.com/800x600/4a5568/ffffff?text=Janmashtami+3",
        "https://via.placeholder.com/800x600/718096/ffffff?text=Janmashtami+4",
        "https://via.placeholder.com/800x600/2d3748/ffffff?text=Janmashtami+5"
      ]
    },
    {
      id: 4,
      name: "Deepavali",
      title: "Deepavali Celebrations",
      coverImage: "https://via.placeholder.com/400x300/1a202c/ffffff?text=Deepavali",
      images: [
        "https://via.placeholder.com/800x600/1a202c/ffffff?text=Deepavali+1",
        "https://via.placeholder.com/800x600/4a5568/ffffff?text=Deepavali+2"
      ]
    },
    {
      id: 5,
      name: "Temple Inauguration",
      title: "Temple Inauguration Ceremony",
      coverImage: "https://via.placeholder.com/400x300/4a5568/ffffff?text=Inauguration",
      images: [
        "https://via.placeholder.com/800x600/4a5568/ffffff?text=Inauguration+1",
        "https://via.placeholder.com/800x600/718096/ffffff?text=Inauguration+2",
        "https://via.placeholder.com/800x600/2d3748/ffffff?text=Inauguration+3"
      ]
    },
    {
      id: 6,
      name: "Annual Function",
      title: "Annual Temple Function",
      coverImage: "https://via.placeholder.com/400x300/718096/ffffff?text=Annual+Function",
      images: [
        "https://via.placeholder.com/800x600/718096/ffffff?text=Annual+1",
        "https://via.placeholder.com/800x600/2d3748/ffffff?text=Annual+2",
        "https://via.placeholder.com/800x600/1a202c/ffffff?text=Annual+3",
        "https://via.placeholder.com/800x600/4a5568/ffffff?text=Annual+4"
      ]
    }
  ]

  const handleEventClick = (event) => {
    setSelectedEvent(event)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackClick = () => {
    setSelectedEvent(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          {!selectedEvent ? (
            <>
              <h1 className="page-title">Gallery</h1>
              
              <div className="gallery-events-grid">
                {events.map((event) => (
                  <div 
                    key={event.id} 
                    className="gallery-event-card"
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="gallery-event-image-wrapper">
                      <img 
                        src={event.coverImage} 
                        alt={event.name}
                        className="gallery-event-image"
                      />
                    </div>
                    <div className="gallery-event-name">
                      {event.name}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <button className="gallery-back-btn" onClick={handleBackClick}>
                <FaArrowLeft /> Back to Events
              </button>
              
              <div className="gallery-event-header">
                <h1 className="gallery-event-title">{selectedEvent.title}</h1>
                <p className="gallery-event-subtitle">{selectedEvent.name}</p>
              </div>
              
              <div className="gallery-event-photos">
                {selectedEvent.images.map((image, index) => (
                  <div key={index} className="gallery-event-photo-wrapper">
                    <img 
                      src={image} 
                      alt={`${selectedEvent.name} ${index + 1}`}
                      className="gallery-event-photo"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Gallery



