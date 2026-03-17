import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const History = lazy(() => import('./pages/History'))
const Deities = lazy(() => import('./pages/Deities'))
const Parivara = lazy(() => import('./pages/Parivara'))
const Committee = lazy(() => import('./pages/Committee'))
const AnnualFunctions = lazy(() => import('./pages/AnnualFunctions'))
const Sevas = lazy(() => import('./pages/Sevas'))
const EDarshana = lazy(() => import('./pages/EDarshana'))
const EDonation = lazy(() => import('./pages/EDonation'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Direction = lazy(() => import('./pages/Direction'))

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
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
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App

