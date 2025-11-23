import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const logoSrc = '/images/svt_final(without bg).png'

  const toggleAboutMenu = () => {
    setIsAboutOpen(!isAboutOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleContactClick = (e) => {
    e.preventDefault()
    const footer = document.getElementById('contact')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img
            src={logoSrc}
            alt="Shri Venkataramana Temple logo"
            className="logo-image"
          />
          <h1 className="logo-text">Shri Venkataramana Temple</h1>
        </div>

        <nav className="nav-desktop">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li 
              className="nav-item-dropdown"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <Link to="/history" className="nav-link">
                About <span className="dropdown-arrow">▼</span>
              </Link>
              {isAboutOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/history">History</Link></li>
                  <li><Link to="/temple-timings">Temple Timings</Link></li>
                  <li><Link to="/deities">Deities in the Garbhagraha</Link></li>
                  <li><Link to="/committee">Committee</Link></li>
                </ul>
              )}
            </li>
            <li 
              className="nav-item-dropdown"
              onMouseEnter={() => setIsActivitiesOpen(true)}
              onMouseLeave={() => setIsActivitiesOpen(false)}
            >
              <Link to="/annual-functions" className="nav-link">
                Activities <span className="dropdown-arrow">▼</span>
              </Link>
              {isActivitiesOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/annual-functions">Annual Functions</Link></li>
                  <li><Link to="/sevas">Sevas</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/e-darshana" className="nav-link">e-Darshana</Link></li>
            <li><Link to="/e-donation" className="nav-link">e-Donation</Link></li>
            <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
            <li><Link to="/direction" className="nav-link">Direction</Link></li>
            <li><a href="#contact" className="nav-link" onClick={handleContactClick}>Contact Us</a></li>
          </ul>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={isMobileMenuOpen ? 'hamburger open' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list-mobile">
          <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li>
            <Link to="/history" onClick={toggleMobileMenu}>About</Link>
            <ul className="mobile-submenu">
              <li><Link to="/history" onClick={toggleMobileMenu}>History</Link></li>
              <li><Link to="/temple-timings" onClick={toggleMobileMenu}>Temple Timings</Link></li>
              <li><Link to="/deities" onClick={toggleMobileMenu}>Deities in the Garbhagraha</Link></li>
              <li><Link to="/committee" onClick={toggleMobileMenu}>Committee</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/annual-functions" onClick={toggleMobileMenu}>Activities</Link>
            <ul className="mobile-submenu">
              <li><Link to="/annual-functions" onClick={toggleMobileMenu}>Annual Functions</Link></li>
              <li><Link to="/sevas" onClick={toggleMobileMenu}>Sevas</Link></li>
            </ul>
          </li>
          <li><Link to="/e-darshana" onClick={toggleMobileMenu}>e-Darshana</Link></li>
          <li><Link to="/e-donation" onClick={toggleMobileMenu}>e-Donation</Link></li>
          <li><Link to="/gallery" onClick={toggleMobileMenu}>Gallery</Link></li>
          <li><Link to="/direction" onClick={toggleMobileMenu}>Direction</Link></li>
          <li><a href="#contact" onClick={handleContactClick}>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

