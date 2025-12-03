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
                Sri Venkataramana Temple is located in the small town of Naikanakatte, situated in the Byndoor Taluk of Udupi District along the coastal belt of Karnataka. The temple stands beside National Highway NH-66 and is dedicated to Lord Venkataramana. It is administered by a committee of 15 members under the guidance and supervision of Shree Samsthan Gokarn Parthagali Jeevottam Math.
              </p>
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
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {isExpanded && (
          <div className="about-extra">
            <p className="about-description">
              The temple has a history of more than 200 years and was rebuilt in the year 2016. The Punar Pratishtapana Mahotsava was celebrated in the divine presence of the then Peethadipathi of Shree Samsthan Gokarn Parthagali Jeevottam Math, Srimad Vidyadhiraja Teertha Swamiji. The Pratishtapana of the Lord and the Kalasha Sthapana of the renovated temple were performed by the divine hands of Srimad Vidyadhiraja Teertha Swamiji.
            </p>
            <p className="about-description">
              Naikanakatte is a village that is home to two temples dedicated to the same presiding deity, Lord Venkataramana, and both belong to our GSB Samaj. One is our Sri Venkataramana Temple, which is under the Shree Samsthan Gokarn Parthagali Jeevottam Math, and the other is the Shri Lakshmi Venkataramana Temple, which comes under the Shree Kashi Math Samsthan and is managed by the Naikanakatte Avadhani Family. These two temples are regarded as the two eyes of the GSB Samaj Bandhavas of Naikanakatte.
            </p>
            <p className="about-description">
              A unique and divine highlight of Naikanakatte is that during every temple Utsava, the Lord Venkataramana from both temples is taken in the same Pallakki, followed by the grand Nagarotsava of the Ubhaya Venkataramana. Witnessing this sacred procession is a deeply devotional and joy-filled spiritual experience for all the Samaj Bandhavas.
            </p>
          </div>
        )}
        
        <div className="about-cards">
          <Link to="/history" className="about-card">
            <div className="about-card-image-wrapper">
              <img 
                src="/images/history.jpeg" 
                alt="Temple History"
                className="about-card-image"
                loading="lazy"
                decoding="async"
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
                loading="lazy"
                decoding="async"
              />
            </div>
            <h4 className="about-card-title">Deities in the Garbhagraha</h4>
          </Link>
          
          <Link to="/sevas" className="about-card">
            <div className="about-card-image-wrapper">
              <img 
                src="/images/sevas.jpeg" 
                alt="Sevas"
                className="about-card-image"
                loading="lazy"
                decoding="async"
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

