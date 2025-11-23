import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import History from './pages/History'
import TempleTimings from './pages/TempleTimings'
import Deities from './pages/Deities'
import Parivara from './pages/Parivara'
import Committee from './pages/Committee'
import AnnualFunctions from './pages/AnnualFunctions'
import Sevas from './pages/Sevas'
import EDarshana from './pages/EDarshana'
import EDonation from './pages/EDonation'
import Gallery from './pages/Gallery'
import Direction from './pages/Direction'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/temple-timings" element={<TempleTimings />} />
          <Route path="/deities" element={<Deities />} />
          <Route path="/parivara" element={<Parivara />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/annual-functions" element={<AnnualFunctions />} />
          <Route path="/sevas" element={<Sevas />} />
          <Route path="/e-darshana" element={<EDarshana />} />
          <Route path="/e-donation" element={<EDonation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/direction" element={<Direction />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

