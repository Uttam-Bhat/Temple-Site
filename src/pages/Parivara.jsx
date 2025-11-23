import React from 'react'
import './Page.css'

const Parivara = () => {
  // TODO: Replace these placeholder image paths with actual parivara deity images
  // Place your parivara deity images in public/images/parivara/ directory
  const parivaraDeities = [
    {
      id: 1,
      name: "Parivara Deity 1",
      // TODO: Replace with actual image path: src="/images/parivara/parivara1.jpg"
      image: "https://via.placeholder.com/300x400/4a5568/ffffff?text=Parivara+1",
      description: "Description of this parivara deity."
    },
    {
      id: 2,
      name: "Parivara Deity 2",
      // TODO: Replace with actual image path: src="/images/parivara/parivara2.jpg"
      image: "https://via.placeholder.com/300x400/718096/ffffff?text=Parivara+2",
      description: "Description of this parivara deity."
    },
    {
      id: 3,
      name: "Parivara Deity 3",
      // TODO: Replace with actual image path: src="/images/parivara/parivara3.jpg"
      image: "https://via.placeholder.com/300x400/2d3748/ffffff?text=Parivara+3",
      description: "Description of this parivara deity."
    },
    {
      id: 4,
      name: "Parivara Deity 4",
      // TODO: Replace with actual image path: src="/images/parivara/parivara4.jpg"
      image: "https://via.placeholder.com/300x400/1a202c/ffffff?text=Parivara+4",
      description: "Description of this parivara deity."
    },
    {
      id: 5,
      name: "Parivara Deity 5",
      // TODO: Replace with actual image path: src="/images/parivara/parivara5.jpg"
      image: "https://via.placeholder.com/300x400/4a5568/ffffff?text=Parivara+5",
      description: "Description of this parivara deity."
    },
    {
      id: 6,
      name: "Parivara Deity 6",
      // TODO: Replace with actual image path: src="/images/parivara/parivara6.jpg"
      image: "https://via.placeholder.com/300x400/718096/ffffff?text=Parivara+6",
      description: "Description of this parivara deity."
    }
  ]

  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Parivara Deities</h1>
          
          <p className="page-intro">
            {/* TODO: Replace with actual introduction */}
            The temple complex includes several parivara (attendant) deities that are 
            worshipped alongside the main deities. Each parivara deity has its own 
            significance and is an integral part of the temple's spiritual ecosystem.
          </p>
          
          <div className="parivara-grid">
            {parivaraDeities.map((deity) => (
              <div key={deity.id} className="parivara-card">
                <div className="parivara-image-wrapper">
                  {/* TODO: Replace placeholder image with actual parivara deity image */}
                  {/* Recommended image size: 300x400px or similar aspect ratio */}
                  <img 
                    src={deity.image} 
                    alt={deity.name}
                    className="parivara-image"
                  />
                </div>
                <div className="parivara-info">
                  <h3 className="parivara-name">{deity.name}</h3>
                  <p className="parivara-description">{deity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Parivara



