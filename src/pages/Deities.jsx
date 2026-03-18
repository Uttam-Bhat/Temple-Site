import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './Page.css'

const Deities = () => {
  const navigate = useNavigate()
  // TODO: Replace these placeholder image paths with actual deity images
  // Place your deity images in public/images/deities/ directory
  const deities = [
    {
      id: 1,
      name: "Lord Venkataramana",
      image: "/images/Murthy/Main_idol.png",
      description: "The main deity in the garbhagraha is Lord Venkataramana, enshrined along with Shridevi and Bhudevi"
    },
    {
      id: 2,
      name: "Utsava Murthy",
      image: "/images/Murthy/Utsava Murthy(1).png",
      description: "This is the Utsava Murthy of Lord Venkataramana, taken in procession during every Nagarotsava."
    },
    {
      id: 3,
      name: "Lord Shree Krishna",
      image: "/images/Murthy/Natya Krishna.png",
      description: ""
    },
    {
      id: 4,
      name: "Lord Vitobha",
      image: "/images/Murthy/Vitobha.png",
      description: ""
    },
    {
      id: 5,
      name: "Lord Venkataramana",
      image: "/images/Murthy/small venkataramana.png",
      description: ""
    },
    {
      id: 6,
      name: "Lord Shree Krishna",
      image: "/images/Murthy/Ladduka Krishna.png",
      description: ""
    },
    {
      id: 7,
      name: "Shalagramas",
      image: "/images/Murthy/Saligram.png",
      description: ""
    },
  ]

  return (
    <div className="page">
      <button className="mobile-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
        <FaArrowLeft /> Back
      </button>
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Deities in the Garbhagraha</h1>
          
          <p className="page-intro">
            {/* TODO: Replace with actual introduction */}
            The sanctum sanctorum (Garbhagraha) houses the main deities of the temple. 
            Each deity holds special significance and is worshipped with great devotion.
          </p>
          
          <div className="deities-grid">
            {deities.map((deity) => (
              <div
                key={deity.id}
                className={`deity-card ${deity.id === 4 ? 'deity-card-vitobha' : ''} ${deity.id === 7 ? 'deity-card-shalagramas' : ''}`}
              >
                <div className="deity-image-wrapper">
                  {/* TODO: Replace placeholder image with actual deity image */}
                  {/* Recommended image size: 400x500px or similar aspect ratio */}
                  <img 
                    src={deity.image} 
                    alt={deity.name}
                    className="deity-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="deity-overlay"></div>
                </div>
                <div className="deity-info">
                  <h3 className="deity-name">{deity.name}</h3>
                  <p className="deity-description">{deity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Deities



