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
      name: "Shree Rama Digvijaya Rath Yatra",
      title: "Shree Rama Digvijaya Rath Yatra",
      coverImage: "/images/rama_ratha(main).JPG",
      images: [
        "/images/Rama_Ratha/DSC_4126.JPG",
        "/images/Rama_Ratha/DSC_4205.JPG",
        "/images/Rama_Ratha/DSC_4454.JPG",
        "/images/Rama_Ratha/DSC_4516.JPG",
        "/images/Rama_Ratha/DSC_4696.JPG",
        "/images/Rama_Ratha/DSC_4725.JPG",
        "/images/Rama_Ratha/DSC_4905.JPG"
      ],
      landscapeImages: []
    },
    {
      id: 2,
      name: "Vanabhojana 2025",
      title: "Vanabhojana 2025",
      coverImage: "/images/vanabhojana(main).jpg",
      images: [
        "/images/vanabhojana/1000069909.jpg",
        "/images/vanabhojana/20251109_223840[1].jpg",
        "/images/vanabhojana/20251110_111034.jpg",
        "/images/vanabhojana/IMG-20251110-WA0019.jpg",
        "/images/vanabhojana/IMG-20251110-WA0028.jpg",
        "/images/vanabhojana/IMG-20251110-WA0078.jpg",
        "/images/vanabhojana/IMG-20251110-WA0093.jpg"
      ],
      landscapeImages: []
    },
    {
      id: 3,
      name: "Bhajane Ekaha",
      title: "Bhajane Ekaha",
      coverImage: "/images/Bhajana-2025(main).jpg",
      images: [
        "/images/bhajana-2025/IMG-20251116-WA0020.jpg",
        "/images/bhajana-2025/IMG-20251116-WA0060.jpg",
        "/images/bhajana-2025/IMG-20251116-WA0061.jpg",
        "/images/bhajana-2025/IMG-20251116-WA0062.jpg",
        "/images/bhajana-2025/20251117_115558.jpg",
        "/images/bhajana-2025/20251117_123909.jpg",
        "/images/bhajana-2025/IMG_20251117_082728.jpg",
        "/images/bhajana-2025/20251117_164919.jpg"
      ],
      landscapeImages: [
        "/images/bhajana-2025/IMG_20251117_082728.jpg",
        "/images/bhajana-2025/20251117_164919.jpg"
      ]
    },
    {
      id: 4,
      name: "Anantha Chaturdashi Vrata",
      title: "Anantha Chaturdashi Vrata",
      coverImage: "/images/nopi(main).JPG",
      images: [
        "/images/nopi(2025)/DSC_7271.JPG",
        "/images/nopi(2025)/DSC_7350.JPG",
        "/images/nopi(2025)/DSC_7403.JPG",
        "/images/nopi(2025)/DSC_7412.JPG",
        "/images/nopi(2025)/DSC_7428.JPG",
        "/images/nopi(2025)/DSC_7475.JPG"
      ],
      landscapeImages: []
    },
    {
      id: 5,
      name: "Varmahalakshmi Vrata",
      title: "Varmahalakshmi Vrata",
      coverImage: "/images/mahalakshmi(main).jpg",
      images: [
        "/images/Varamahalakshmi/FB_IMG_1763917685215.jpg",
        "/images/Varamahalakshmi/FB_IMG_1763917694151.jpg",
        "/images/Varamahalakshmi/FB_IMG_1763917700410.jpg",
        "/images/Varamahalakshmi/FB_IMG_1763917715033.jpg",
        "/images/Varamahalakshmi/FB_IMG_1763917723740.jpg"
      ],
      landscapeImages: []
    },
    {
      id: 6,
      name: "Ganesha Chaturthi",
      title: "Ganesha Chaturthi",
      coverImage: "/images/chauti(main).jpg",
      images: [
        "/images/Ganesh_chaturthi/20250827_102935[1].jpg",
        "/images/Ganesh_chaturthi/20250827_102944[1].jpg",
        "/images/Ganesh_chaturthi/20250827_103617[1].jpg",
        "/images/Ganesh_chaturthi/IMG-20250827-WA0011.jpg",
        "/images/Ganesh_chaturthi/IMG-20250827-WA0013.jpg",
        "/images/Ganesh_chaturthi/IMG-20250827-WA0020.jpg"
      ],
      landscapeImages: []
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
                        loading="lazy"
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
                {selectedEvent.images.map((image, index) => {
                  const isLandscape = selectedEvent.landscapeImages?.includes(image);
                  return (
                    <div 
                      key={index} 
                      className={`gallery-event-photo-wrapper ${isLandscape ? 'landscape-photo' : ''}`}
                    >
                      <img 
                        src={image} 
                        alt={`${selectedEvent.name} ${index + 1}`}
                        className="gallery-event-photo"
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Gallery



