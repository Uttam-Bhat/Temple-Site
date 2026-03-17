import React from 'react'
import Banner from '../components/Banner'
import AnnouncementBadge from '../components/AnnouncementBadge'
import About from '../components/About'
import './Page.css'

const Home = () => {
  return (
    <div className="page">
      <Banner />
      <AnnouncementBadge />
      <About />
    </div>
  )
}

export default Home



