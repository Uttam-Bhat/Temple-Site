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
            <div className="content-text">
              <p>
                The temple has a rich and ancient history that dates back many centuries. 
                It was established in a time when the region was flourishing with spiritual 
                and cultural activities. The temple has been a center of devotion and 
                pilgrimage for generations of devotees who come from far and wide to seek 
                blessings and experience the divine presence.
              </p>
              <p>
                Throughout its history, the temple has witnessed numerous significant events 
                and has been a witness to the changing times while maintaining its spiritual 
                essence. The architecture and traditions preserved here reflect the deep 
                cultural heritage of the region. The intricate carvings, traditional rituals, 
                and sacred practices have been passed down through generations, creating a 
                living connection between the past and present.
              </p>
              <p>
                The temple stands as a testament to the unwavering faith and devotion of 
                countless devotees who have contributed to its growth and preservation over 
                the centuries. Each stone, each ritual, and each prayer offered here carries 
                the weight of tradition and the promise of spiritual fulfillment. The temple 
                has served as a beacon of hope and a sanctuary of peace for all who seek 
                divine grace and guidance.
              </p>
              <p>
                Over the decades, the temple has evolved while staying true to its core 
                spiritual values. The community has worked together to maintain the sanctity 
                of the place while adapting to modern needs. This balance between tradition 
                and progress has allowed the temple to remain relevant and accessible to 
                devotees of all ages and backgrounds.
              </p>
            </div>
            
            <div className="content-image-wrapper history-image-wrapper">
              <img 
                src="/images/history.jpeg" 
                alt="Temple History"
                className="content-image"
                loading="lazy"
                decoding="async"
              />
              <div className="image-overlay-text">Heritage & Tradition</div>
            </div>
          </div>
          
          <div className="content-text history-content-below">
            <p>
              Over the years, the temple has undergone several renovations to preserve 
              its structural integrity while maintaining its original architectural beauty. 
              These efforts ensure that future generations can continue to experience the 
              divine atmosphere and historical significance of this sacred place. The 
              restoration work has been carried out with great care, respecting the original 
              design and incorporating traditional building techniques that have stood the 
              test of time.
            </p>
            <p>
              In recent times, the temple has embraced modern facilities while preserving 
              traditional practices. The management committee works tirelessly to maintain 
              the temple's heritage while making it accessible to devotees from all walks 
              of life. This commitment to both preservation and progress has made the temple 
              a model of how ancient traditions can thrive in the modern world.
            </p>
            <p>
              The temple continues to be a vibrant center of spiritual activity, hosting 
              various festivals, ceremonies, and community events throughout the year. 
              These celebrations bring together devotees in a spirit of unity and devotion, 
              strengthening the bonds of community and faith. The temple's role extends 
              beyond religious practice, serving as a cultural hub that preserves and 
              promotes the rich heritage of the region.
            </p>
            <p>
              As we look to the future, the temple remains committed to its mission of 
              serving the spiritual needs of devotees while preserving its historical and 
              cultural legacy. The ongoing efforts of the management, priests, and devotees 
              ensure that this sacred space will continue to inspire and uplift generations 
              to come. The temple stands not just as a place of worship, but as a living 
              monument to faith, tradition, and the enduring power of devotion.
            </p>
            <p>
              The daily rituals, special ceremonies, and annual festivals create a rhythm 
              of spiritual life that connects the temple to the larger community. Each 
              morning begins with the sound of bells and the fragrance of incense, 
              signaling the start of another day of devotion. The evening aarti brings 
              together devotees in collective prayer, creating moments of profound 
              spiritual connection and peace.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default History



