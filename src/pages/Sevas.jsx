import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './Page.css'

const Sevas = () => {
  const navigate = useNavigate()
  // TODO: Replace with actual seva information
  const sevas = [
    {
      id: 1,
      slNo: 1,
      name: "Pavamana Abhisheka",
      nameKannada: "ಪವಮಾನ ಅಭಿಷೇಕ",
      total: "₹ 60.00"
    },
    {
      id: 2,
      slNo: 2,
      name: "Vayustuti",
      nameKannada: "ವಾಯುಸ್ತುತಿ",
      total: "₹ 25.00"
    },
    {
      id: 3,
      slNo: 3,
      name: "Panchamrata",
      nameKannada: "ಪಂಚಾಮೃತ",
      total: "₹ 30.00"
    },
    {
      id: 4,
      slNo: 4,
      name: "Rudrabhisheka",
      nameKannada: "ರುದ್ರಾಭಿಷೇಕ",
      total: "₹ 35.00"
    },
    {
      id: 5,
      slNo: 5,
      name: "Tulasi Archane",
      nameKannada: "ತುಳಸಿ ಅರ್ಚನೆ",
      total: "₹ 25.00"
    },
    {
      id: 6,
      slNo: 6,
      name: "Seeyala",
      nameKannada: "ಸೀಯಾಳ",
      total: "₹ 10.00"
    },
    {
      id: 7,
      slNo: 7,
      name: "Kumkumarchane",
      nameKannada: "ಕುಂಕುಮಾರ್ಚನೆ",
      total: "₹ 15.00"
    },
    {
      id: 8,
      slNo: 8,
      name: "Sahasranama Archana",
      nameKannada: "ಸಹಸ್ರನಾಮ ಅರ್ಚನೆ",
      total: "₹ 100.00"
    }
  ]

  return (
    <div className="page">
      <button className="mobile-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
        <FaArrowLeft /> Back
      </button>
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Sevas</h1>
          
          <p className="page-intro">
            Various sevas (services) are offered at the temple for devotees to participate 
            in and seek divine blessings. Each seva has its own significance and timing.
          </p>
          
          <div className="sevas-table-wrapper">
            <table className="sevas-table">
              <thead>
                <tr>
                  <th>ಕ್ರ. ಸಂಖ್ಯೆ / SL No</th>
                  <th>Seva (English)</th>
                  <th>ಸೇವೆ (ಕನ್ನಡ)</th>
                  <th>ಒಟ್ಟು / Total</th>
                </tr>
              </thead>
              <tbody>
                {sevas.map((seva) => (
                  <tr key={seva.id}>
                    <td className="sl-no-cell">{seva.slNo}</td>
                    <td className="seva-name-cell">{seva.name}</td>
                    <td className="seva-name-kannada-cell">{seva.nameKannada}</td>
                    <td className="seva-total-cell">{seva.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="sevas-note">
            <p>
              <strong>Note:</strong> For booking sevas and to know more about availability 
              and pricing, please contact the temple office. Advance booking is recommended 
              for special sevas.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sevas



