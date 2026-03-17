import React from 'react'
import Banner from '../components/Banner'
import FeaturedPosters from '../components/FeaturedPosters'
import About from '../components/About'
import './Page.css'

const Home = () => {
  return (
    <div className="page">
      <Banner />
      <FeaturedPosters />
      <About />
    </div>
  )
}

export default Home



