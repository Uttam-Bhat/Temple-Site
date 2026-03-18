import React, { useEffect, useState } from 'react'
import './Page.css'

const AnnualCalendar = () => {
  const slides = [
    {
      id: 1,
      image: '/images/Calendar/English.jpg',
      alt: 'Annual Calendar 2026-27 (English)',
    },
    {
      id: 2,
      image: '/images/Calendar/Kannada.jpg',
      alt: 'Annual Calendar 2026-27 (Kannada)',
    },
  ]

  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || slides.length <= 1) return
    const t = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(t)
  }, [isPaused, slides.length])

  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Annual Calendar 26-27</h1>

          <p className="page-intro">
            Hover on the calendar to pause the slide.
          </p>

          <div
            className="calendar-slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="calendar-slides">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`calendar-slide ${index === current ? 'active' : ''}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="calendar-image"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            <div className="calendar-dots">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`calendar-dot ${idx === current ? 'active' : ''}`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Show calendar ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AnnualCalendar

