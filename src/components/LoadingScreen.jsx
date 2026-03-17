import React from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const logoSrc = '/images/svt_final(without bg).png'

  return (
    <div className="loading-screen">
      <img
        src={logoSrc}
        alt="Shri Venkataramana Temple"
        className="loading-logo"
      />
    </div>
  )
}

export default LoadingScreen
