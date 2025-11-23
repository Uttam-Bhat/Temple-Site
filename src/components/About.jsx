import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">Shri Venkataramana Temple</h3>
            <div className="about-description-wrapper">
              <p className="about-description">
                {/* TODO: Replace with actual temple description */}
                Our temple is located in a beautiful and serene location, surrounded by natural 
                beauty. The temple has been a center of spiritual devotion for many years, 
                attracting devotees from far and wide. The architecture reflects traditional 
                design principles while maintaining modern facilities for visitors.
              </p>
              {isExpanded && (
                <>
                  <p className="about-description">
                    The temple complex includes the main sanctum, prayer halls, and facilities for 
                    various religious ceremonies and activities. We welcome all devotees to visit 
                    and experience the divine atmosphere.
                  </p>
                  {/* TODO: Add more content here if needed */}
                  <p className="about-description">
                    {/* Additional content can be added here */}
                  </p>
                </>
              )}
            </div>
            
            <button className="read-more-btn" onClick={toggleExpand}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
          
          <div className="about-image-wrapper">
            {/* TODO: Replace with actual temple image */}
            {/* Place your main temple image in public/images/temple-main.jpg */}
            {/* Recommended image size: 600x400px or similar aspect ratio */}
            <img 
              src="/images/about.JPG" 
              alt="Temple"
              className="about-image"
            />
          </div>
        </div>
        
        <div className="about-cards">
          <Link to="/history" className="about-card">
            <div className="about-card-image-wrapper">
              <img 
                src="/images/history.jpeg" 
                alt="Temple History"
                className="about-card-image"
              />
            </div>
            <h4 className="about-card-title">Temple History</h4>
          </Link>
          
          <Link to="/deities" className="about-card">
            <div className="about-card-image-wrapper">
              <img 
                src="/images/deities.JPG" 
                alt="Deities in the Garbhagraha"
                className="about-card-image"
              />
            </div>
            <h4 className="about-card-title">Deities in the Garbhagraha</h4>
          </Link>
          
          <Link to="/sevas" className="about-card">
            <div className="about-card-image-wrapper">
              <img 
                src="/images/temple.jpg" 
                alt="Sevas"
                className="about-card-image"
              />
            </div>
            <h4 className="about-card-title">Sevas</h4>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About

