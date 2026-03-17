import React, { useEffect, useState } from 'react'
import './PosterOverlay.css'

const posters = [
  {
    id: 1,
    image: '/images/Calendar/English.jpg',
  },
  {
    id: 2,
    image: '/images/Calendar/Kannada.jpg',
  },
]

const DISPLAY_DURATION_MS = 10000

const PosterOverlay = () => {
  const [visible, setVisible] = useState(true)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!visible || posters.length === 0) return

    const timer = setTimeout(() => {
      if (index < posters.length - 1) {
        setIndex((prev) => prev + 1)
      } else {
        setVisible(false)
      }
    }, DISPLAY_DURATION_MS)

    return () => clearTimeout(timer)
  }, [index, visible])

  if (!visible || posters.length === 0) {
    return null
  }

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <div className="poster-overlay">
      <div className="poster-overlay-inner">
        <img
          src={posters[index].image}
          alt="Temple announcement"
          className="poster-overlay-image"
        />
        <button
          type="button"
          className="poster-overlay-close"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default PosterOverlay

