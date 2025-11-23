import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section glass-box">
            <h3 className="footer-title">Shri Venkataramana Temple</h3>
            <p className="footer-address">
              <FaMapMarkerAlt className="footer-icon address-icon" />
              <span>
                {/* TODO: Replace with actual address */}
                Naikanakatte, Nandanavana,<br />
                Byndoor, Udupi,Karnataka, India - 576219
              </span>
            </p>
            <p className="footer-contact">
              <FaPhone className="footer-icon contact-icon" />
              <span>
                {/* TODO: Replace with actual contact numbers */}
                <a href="tel:+911234567890">+91 1234567890</a> | 
                <a href="tel:+919876543210"> +91 9876543210</a>
              </span>
            </p>
            <p className="footer-email">
              <FaEnvelope className="footer-icon email-icon" />
              <span>
                {/* TODO: Replace with actual email */}
                <a href="mailto:contact@temple.com">svtnaikanakatte1@gmail.com</a>
              </span>
            </p>
          </div>

          <div className="footer-section glass-box">
            <h4 className="footer-subtitle">
              <FaClock className="footer-icon timing-icon" />
              Darshan Timing
            </h4>
            <p className="footer-timing">
              <span className="timing-label morning">Morning:</span> <span className="timing-value">6:00 AM – 12:30 PM</span><br />
              <span className="timing-label evening">Evening:</span> <span className="timing-value">5:00 PM – 8:15 PM</span>
            </p>
          </div>

          <div className="footer-section glass-box">
            <h4 className="footer-subtitle">
              <FaClock className="footer-icon timing-icon" />
              Pooja Timing
            </h4>
            <p className="footer-timing">
              <span className="timing-label morning">Morning:</span> <span className="timing-value">6:00 AM – 8:30 AM</span><br />
              <span className="timing-label afternoon">Afternoon:</span> <span className="timing-value">10:00 AM – 12:00 PM</span><br />
              <span className="timing-label evening">Evening:</span> <span className="timing-value">7:30 PM – 8:00 PM</span>
            </p>
          </div>
        </div>

        <div className="footer-social-center">
          {/* TODO: Replace with actual social media links */}
          <a href="https://www.facebook.com/srilaxmivenkataramanatemple.naikanakatte?mibextid=ZbWKwL" className="social-link social-facebook" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/svt_naikanakatte?igsh=aGJka2dwbTZncW44" className="social-link social-instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://youtube.com/@svtnaikanakatte?si=98edMBXlwbNZmEeJ" className="social-link social-youtube" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © Copyright {new Date().getFullYear()} All Rights Reserved by svt_naikanakatte
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

