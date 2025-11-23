import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './Page.css'

const History = () => {
  const navigate = useNavigate()

  return (
    <div className="page">
      <button className="mobile-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
        <FaArrowLeft /> Back
      </button>
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Temple History</h1>
          
          <div className="page-content">
            <div className="content-image-wrapper history-image-wrapper">
              <img 
                src="/images/history.jpeg" 
                alt="Temple History"
                className="content-image"
              />
              <div className="image-overlay-text">Heritage & Tradition</div>
            </div>
            
            <div className="content-text">
              <div className="history-section">
                <h2>Ancient Origins</h2>
                <p>
                  {/* TODO: Replace with actual temple history */}
                  The temple has a rich and ancient history that dates back many centuries. 
                  It was established in a time when the region was flourishing with spiritual 
                  and cultural activities. The temple has been a center of devotion and 
                  pilgrimage for generations of devotees.
                </p>
              </div>
              
              <div className="history-section">
                <h2>Historical Significance</h2>
                <p>
                  Throughout its history, the temple has witnessed numerous significant events 
                  and has been a witness to the changing times while maintaining its spiritual 
                  essence. The architecture and traditions preserved here reflect the deep 
                  cultural heritage of the region.
                </p>
              </div>
              
              <div className="history-section">
                <h2>Renovation and Preservation</h2>
                <p>
                  Over the years, the temple has undergone several renovations to preserve 
                  its structural integrity while maintaining its original architectural beauty. 
                  These efforts ensure that future generations can continue to experience the 
                  divine atmosphere and historical significance of this sacred place.
                </p>
              </div>
              
              <div className="history-section">
                <h2>Modern Era</h2>
                <p>
                  In recent times, the temple has embraced modern facilities while preserving 
                  traditional practices. The management committee works tirelessly to maintain 
                  the temple's heritage while making it accessible to devotees from all walks 
                  of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default History



