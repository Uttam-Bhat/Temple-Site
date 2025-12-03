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
      name: "Shri Venkataramana",
      image: "/images/Main_idol.png",
      description: "The main presiding deity of the temple, Lord Venkataramana is worshipped with great devotion and reverence."
    },
    {
      id: 2,
      name: "Shri Lakshmi",
      image: "https://via.placeholder.com/400x500/8B0000/ffffff?text=Shri+Lakshmi",
      description: "Goddess Lakshmi, the consort of Lord Venkataramana, represents prosperity, wealth, and divine grace."
    },
    {
      id: 3,
      name: "Shri Padmavathi",
      image: "https://via.placeholder.com/400x500/A52A2A/ffffff?text=Shri+Padmavathi",
      description: "Goddess Padmavathi, another form of the divine consort, is worshipped for blessings and spiritual fulfillment."
    },
    {
      id: 4,
      name: "Shri Garuda",
      image: "https://via.placeholder.com/400x500/800000/ffffff?text=Shri+Garuda",
      description: "The divine vehicle of Lord Vishnu, Garuda is revered as a symbol of strength and devotion."
    },
    {
      id: 5,
      name: "Shri Hanuman",
      image: "https://via.placeholder.com/400x500/8B0000/ffffff?text=Shri+Hanuman",
      description: "Lord Hanuman, the embodiment of devotion and strength, is worshipped for protection and spiritual guidance."
    },
    {
      id: 6,
      name: "Shri Anjaneya",
      image: "https://via.placeholder.com/400x500/A52A2A/ffffff?text=Shri+Anjaneya",
      description: "Another form of Lord Hanuman, Anjaneya is revered for his unwavering devotion and divine powers."
    },
    {
      id: 7,
      name: "Shri Venkataramana",
      image: "/images/Main_idol.png",
      description: "The main presiding deity of the temple, Lord Venkataramana is worshipped with great devotion and reverence."
    },
    {
      id: 8,
      name: "Shri Lakshmi",
      image: "https://via.placeholder.com/400x500/8B0000/ffffff?text=Shri+Lakshmi",
      description: "Goddess Lakshmi, the consort of Lord Venkataramana, represents prosperity, wealth, and divine grace."
    },
    {
      id: 9,
      name: "Shri Padmavathi",
      image: "https://via.placeholder.com/400x500/A52A2A/ffffff?text=Shri+Padmavathi",
      description: "Goddess Padmavathi, another form of the divine consort, is worshipped for blessings and spiritual fulfillment."
    }
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
              <div key={deity.id} className="deity-card">
                <div className="deity-image-wrapper">
                  {/* TODO: Replace placeholder image with actual deity image */}
                  {/* Recommended image size: 400x500px or similar aspect ratio */}
                  <img 
                    src={deity.image} 
                    alt={deity.name}
                    className="deity-image"
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



