import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./Page.css";

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
        "/images/Rama_Ratha/DSC_4905.JPG",
      ],
      landscapeImages: [],
    },
    {
      id: 2,
      name: "Vanabhojana 2025",
      title: "Vanabhojana 2025",
      subtitle:
        "Vanabhojana is a yearly celebrated festival marked on the Bahula Panchami of the Karthika Maasa, where the Ubhaya Venkataramana of the two temples go to the vana on the utsava and return, marking the occasion with devotion and tradition.",
      coverImage: "/images/vanabhojana(main).jpg",
      images: [
        "/images/vanabhojana/1000069909.jpg",
        "/images/vanabhojana/20251109_223840[1].jpg",
        "/images/vanabhojana/20251110_111034.jpg",
        "/images/vanabhojana/IMG-20251110-WA0019.jpg",
        "/images/vanabhojana/IMG-20251110-WA0028.jpg",
        "/images/vanabhojana/IMG-20251110-WA0078.jpg",
        "/images/vanabhojana/IMG-20251110-WA0093.jpg",
      ],
      landscapeImages: [],
    },
    {
      id: 3,
      name: "Bhajane Ekaha",
      title: "Bhajane Ekaha",
      subtitle:
        "Bhajana Ekaha, celebrated annually on the Ekadashi Tithi of the Karthika Maasa, is marked with deep devotion and joy as bhajakas unite to offer bhajana seva to the Lord for an entire day and night.",
      coverImage: "/images/Bhajana-2025(main).jpg",
      images: [
        "/images/bhajana-2025/IMG-20251116-WA0020.jpg",
        "/images/bhajana-2025/IMG-20251116-WA0060.jpg",
        "/images/bhajana-2025/IMG-20251116-WA0061.jpg",
        "/images/bhajana-2025/IMG-20251116-WA0062.jpg",
        "/images/bhajana-2025/20251117_115558.jpg",
        "/images/bhajana-2025/20251117_123909.jpg",
        "/images/bhajana-2025/IMG_20251117_082728.jpg",
        "/images/bhajana-2025/20251117_164919.jpg",
      ],
      landscapeImages: [
        "/images/bhajana-2025/IMG_20251117_082728.jpg",
        "/images/bhajana-2025/20251117_164919.jpg",
      ],
    },
    {
      id: 4,
      name: "Anantha Chaturdashi Vrata",
      title: "Anantha Chaturdashi Vrata",
      subtitle:
        "Anantha Chaturdashi is an annual festival that falls on the Chaturdashi Tithi of the Shukla Paksha in the Bhadrapada Maasa, and it is celebrated each year with immense devotion and joy in worship of Lord Anantha Padmanabha.",
      coverImage: "/images/nopi(main).JPG",
      images: [
        "/images/nopi(2025)/DSC_7271.JPG",
        "/images/nopi(2025)/DSC_7350.JPG",
        "/images/nopi(2025)/DSC_7403.JPG",
        "/images/nopi(2025)/DSC_7412.JPG",
        "/images/nopi(2025)/DSC_7428.JPG",
        "/images/nopi(2025)/DSC_7475.JPG",
      ],
      landscapeImages: [],
    },
    {
      id: 5,
      name: "Varmahalakshmi Vrata",
      title: "Varmahalakshmi Vrata",
      subtitle:
        "Varamahalakshmi Festival is an annual celebration observed on the Friday of the Shravana maasa, and it is celebrated every year with great devotion and joy to invoke the blessings of Goddess Lakshmi.",
      coverImage: "/images/mahalakshmi(main).jpg",
      images: [
        "/images/Varamahalakshmi/FB_IMG_1763917685215.jpg",
        "/images/Varamahalakshmi/FB_IMG_1763917694151.jpg",
        "/images/Varamahalakshmi/FB_IMG_1763917700410.jpg",
        "/images/Varamahalakshmi/FB_IMG_1763917715033.jpg",
        "/images/Varamahalakshmi/FB_IMG_1763917723740.jpg",
      ],
      landscapeImages: [],
    },
    {
      id: 6,
      name: "Ganesha Chaturthi",
      title: "Ganesha Chaturthi",
      subtitle:
        "Ganesha Chaturthi is an annual festival that falls on the Chaturthi Tithi of the Shukla Paksha in the Bhadrapada Maasa, and it is celebrated each year with immense devotion and joy.",
      coverImage: "/images/chauti(main).jpg",
      images: [
        "/images/Ganesh_chaturthi/20250827_102935[1].jpg",
        "/images/Ganesh_chaturthi/20250827_102944[1].jpg",
        "/images/Ganesh_chaturthi/20250827_103617[1].jpg",
        "/images/Ganesh_chaturthi/IMG-20250827-WA0011.jpg",
        "/images/Ganesh_chaturthi/IMG-20250827-WA0013.jpg",
        "/images/Ganesh_chaturthi/IMG-20250827-WA0020.jpg",
      ],
      landscapeImages: [],
    },
    {
      id: 7,
      name: "Ramotsava - 2025",
      title: "Ramotsava - 2025",
      subtitle:
        "Rama Utsava was celebrated at the temple on the occasion of the Prana Pratistha of Ram Lalla in Ayodhya, where the Samaj Bhandhavas united and celebrated with great devotion and enthusiasm.",
      coverImage: "/images/ramotsav.jpeg",
      images: [
        "/images/ram-utsava/WhatsApp Image 2025-11-24 at 8.05.17 PM (1).jpeg",
        "/images/ram-utsava/WhatsApp Image 2025-11-24 at 8.05.17 PM (2).jpeg",
        "/images/ram-utsava/WhatsApp Image 2025-11-24 at 8.05.18 PM (1).jpeg",
        "/images/ram-utsava/WhatsApp Image 2025-11-24 at 8.05.18 PM (2).jpeg",
        "/images/ram-utsava/WhatsApp Image 2025-11-24 at 8.05.19 PM (1).jpeg",
        "/images/ram-utsava/WhatsApp Image 2025-11-24 at 8.05.19 PM.jpeg",
      ],
      landscapeImages: [],
    },
    {
      id: 8,
      name: "Prathista Vardanti",
      title: "Prathista Vardanti",
      subtitle:
        "The Vardhanthi Mahotsava is celebrated on the occasion of the anniversary of the establishment of the temple, where a vishesha alankara pooja is performed and santarpane is offered.",
      coverImage: "/images/vardanti.jpeg",
      images: [],
      landscapeImages: [],
    },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackClick = () => {
    setSelectedEvent(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                    <div className="gallery-event-name">{event.name}</div>
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
                <p className="gallery-event-subtitle">
                  {selectedEvent.subtitle || selectedEvent.name}
                </p>
              </div>

              <div className="gallery-event-photos">
                {selectedEvent.images.map((image, index) => {
                  const isLandscape =
                    selectedEvent.landscapeImages?.includes(image);
                  return (
                    <div
                      key={index}
                      className={`gallery-event-photo-wrapper ${
                        isLandscape ? "landscape-photo" : ""
                      }`}
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

              <div className="gallery-event-follow">
                <p>
                  Looking for more photos and updates? Follow us on{" "}
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>{" "}
                  for the latest highlights.
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
