import React from 'react'
import { FaClock, FaSun, FaMoon, FaPrayingHands, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa'
import './Page.css'

const TempleTimings = () => {
  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Temple Timings</h1>
          
          <p className="page-intro">
            Plan your visit to the temple. Please note that timings may vary on special occasions and festivals.
          </p>
          
          <div className="timings-content">
            <div className="timings-card timings-card-primary">
              <div className="timings-card-header">
                <FaClock className="timings-icon" />
                <h2 className="timings-heading">Darshan Timing</h2>
              </div>
              <div className="timings-list">
                <div className="timing-item timing-morning">
                  <div className="timing-label-wrapper">
                    <FaSun className="timing-icon-small" />
                    <span className="timing-label">Morning:</span>
                  </div>
                  <span className="timing-time">6:00 AM – 12:30 PM</span>
                </div>
                <div className="timing-item timing-evening">
                  <div className="timing-label-wrapper">
                    <FaMoon className="timing-icon-small" />
                    <span className="timing-label">Evening:</span>
                  </div>
                  <span className="timing-time">5:00 PM – 8:15 PM</span>
                </div>
              </div>
            </div>
            
            <div className="timings-card timings-card-secondary">
              <div className="timings-card-header">
                <FaPrayingHands className="timings-icon" />
                <h2 className="timings-heading">Pooja Timing</h2>
              </div>
              <div className="timings-list">
                <div className="timing-item timing-morning">
                  <div className="timing-label-wrapper">
                    <FaSun className="timing-icon-small" />
                    <span className="timing-label">Morning:</span>
                  </div>
                  <span className="timing-time">6:00 AM – 8:30 AM</span>
                </div>
                <div className="timing-item timing-afternoon">
                  <div className="timing-label-wrapper">
                    <FaSun className="timing-icon-small" />
                    <span className="timing-label">Afternoon:</span>
                  </div>
                  <span className="timing-time">10:00 AM – 12:00 PM</span>
                </div>
                <div className="timing-item timing-evening">
                  <div className="timing-label-wrapper">
                    <FaMoon className="timing-icon-small" />
                    <span className="timing-label">Evening:</span>
                  </div>
                  <span className="timing-time">7:30 PM – 8:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="timings-card timings-card-special">
              <div className="timings-card-header">
                <FaCalendarAlt className="timings-icon" />
                <h2 className="timings-heading">Special Days</h2>
              </div>
              <div className="timings-list">
                <div className="timing-item">
                  <div className="timing-label-wrapper">
                    <FaCalendarAlt className="timing-icon-small" />
                    <span className="timing-label">Festival Days:</span>
                  </div>
                  <span className="timing-time">Extended Hours</span>
                </div>
                <div className="timing-item">
                  <div className="timing-label-wrapper">
                    <FaCalendarAlt className="timing-icon-small" />
                    <span className="timing-label">Monthly Special:</span>
                  </div>
                  <span className="timing-time">Check Calendar</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="timings-note">
            <FaInfoCircle className="note-icon" />
            <p>
              <strong>Note:</strong> Temple timings may vary on special occasions and festivals. 
              Please contact the temple office for updated timings during special events.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TempleTimings



