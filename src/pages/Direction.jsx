import React from 'react'
import './Page.css'

const Direction = () => {
  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Direction</h1>
          
          <div className="direction-content">
            <div className="direction-map">
              {/* 
                IMPORTANT: To get the correct embed code:
                1. Open this link: https://maps.app.goo.gl/d6BqvyfBG2hD2yfT8
                2. Click the "Share" button (or three dots menu)
                3. Click "Embed a map"
                4. Copy the entire src URL from the iframe code
                5. Replace the src value below with the copied URL
              */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1234567890!2d74.632259!3d13.8183621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc604a0598c791%3A0x573999276544b407!2sShri%20Venkataramana%20Temple!5e0!3m2!1sen!2sin!4v1735123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shri Venkataramana Temple Location"
              ></iframe>
            </div>
            
            <div className="direction-info">
              <h2>How to Reach</h2>
              
              <div className="direction-card">
                <h3>📍 Address</h3>
                <p>
                  {/* TODO: Replace with actual address */}
                  Temple Street, City Name,<br />
                  State, Country - ZIP Code
                </p>
              </div>
              
              <div className="direction-card">
                <h3>🚗 By Car</h3>
                <p>
                  {/* TODO: Replace with actual directions */}
                  The temple is easily accessible by car. There is parking 
                  facility available near the temple premises. Follow the 
                  main road and take the turn towards the temple.
                </p>
              </div>
              
              <div className="direction-card">
                <h3>🚌 By Bus</h3>
                <p>
                  {/* TODO: Replace with actual bus information */}
                  Regular bus services are available from the city center. 
                  Get down at the nearest bus stop and walk for 5 minutes 
                  to reach the temple.
                </p>
              </div>
              
              <div className="direction-card">
                <h3>🚂 By Train</h3>
                <p>
                  {/* TODO: Replace with actual train information */}
                  The nearest railway station is approximately X km away. 
                  From the station, you can take a taxi or auto-rickshaw 
                  to reach the temple.
                </p>
              </div>
              
              <div className="direction-card">
                <h3>✈️ By Air</h3>
                <p>
                  {/* TODO: Replace with actual airport information */}
                  The nearest airport is approximately X km away. From the 
                  airport, you can take a taxi or cab service to reach 
                  the temple.
                </p>
              </div>
              
              <div className="direction-card">
                <h3>📞 Contact for Directions</h3>
                <p>
                  {/* TODO: Replace with actual contact */}
                  For more information or assistance with directions, 
                  please contact: +91 1234567890
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Direction



