import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './Page.css'

const Sevas = () => {
  const navigate = useNavigate()
  const sevas = [
    {
      id: 1,
      slNo: 1,
      name: "Shashvatha Seva Nidhi",
      nameKannada: "ಶಾಶ್ವತ ಸೇವಾ ನಿಧಿ",
      total: "As per devotion"
    },
    {
      id: 2,
      slNo: 2,
      name: "Shri Rama Navami",
      nameKannada: "ಶ್ರೀ ರಾಮ ನವಮಿ",
      total: "As per devotion"
    },
    {
      id: 3,
      slNo: 3,
      name: "Shraavana Sankranthi Vrata",
      nameKannada: "ಶ್ರಾವಣ ಸಂಕ್ರಾಂತಿ ವ್ರತ",
      total: "As per devotion"
    },
    {
      id: 4,
      slNo: 4,
      name: "Anantha Vrata",
      nameKannada: "ಆನಂತ ವ್ರತ",
      total: "As per devotion"
    },
    {
      id: 5,
      slNo: 5,
      name: "Vanabhojana",
      nameKannada: "ವನಭೋಜನ",
      total: "As per devotion"
    },
    {
      id: 6,
      slNo: 6,
      name: "Bhajane Samradhane",
      nameKannada: "ಭಜನೆ ಸಮ್ರಾಧನೆ",
      total: "As per devotion"
    },
    {
      id: 7,
      slNo: 7,
      name: "Shrasti Samaradhane",
      nameKannada: "ಶ್ರಸ್ತಿ ಸಮಾರಾಧನೆ",
      total: "As per devotion"
    },
    {
      id: 8,
      slNo: 8,
      name: "Special Event",
      nameKannada: "ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮ",
      total: "As per devotion"
    },
    {
      id: 9,
      slNo: 9,
      name: "Vessel Rent",
      nameKannada: "ಪಾತ್ರೆಗಳ ಬಾಡಿಗೆ",
      total: "As per requirement"
    },
    {
      id: 10,
      slNo: 10,
      name: "Sarva Seva",
      nameKannada: "ಸರ್ವ ಸೇವೆ",
      total: "As per devotion"
    },
    {
      id: 11,
      slNo: 11,
      name: "Santarpane Seva",
      nameKannada: "ಸಂತರ್ಪಣೆ ಸೇವೆ",
      total: "As per devotion"
    },
    {
      id: 12,
      slNo: 12,
      name: "Pushpahalankara Pooja",
      nameKannada: "ಪುಷ್ಪಾಲಂಕಾರ ಪೂಜೆ",
      total: "As per devotion"
    },
    {
      id: 13,
      slNo: 13,
      name: "Kalashabhisheka",
      nameKannada: "ಕಲಶಾಭಿಷೇಕ",
      total: "As per devotion"
    },
    {
      id: 14,
      slNo: 14,
      name: "Pattadha Kanike",
      nameKannada: "ಪಟ್ಟದ ಕಾಣಿಕೆ",
      total: "As per devotion"
    },
    {
      id: 15,
      slNo: 15,
      name: "Bhudana Seva",
      nameKannada: "ಭೂದಾನ ಸೇವೆ",
      total: "As per devotion"
    }
  ]

  const swamjiMokkamSevas = [
    { id: 1, name: "Sarva Seve", nameKannada: "ಸರ್ವ ಸೇವೆ", total: "As per devotion" },
    { id: 2, name: "Santharpana Seve", nameKannada: "ಸಂತರ್ಪಣ ಸೇವೆ", total: "As per devotion" },
    { id: 3, name: "Shri Hari-Guru Seve", nameKannada: "ಶ್ರೀ ಹರಿಗುರು ಸೇವೆ", total: "As per devotion" },
    { id: 4, name: "Maha Pooje", nameKannada: "ಮಹಾ ಪೂಜೆ", total: "As per devotion" },
    { id: 5, name: "Rathri Pooje", nameKannada: "ರಾತ್ರಿ ಪೂಜೆ", total: "As per devotion" },
    { id: 6, name: "Mahasantharpana Seve", nameKannada: "ಮಹಾ ಸಂತರ್ಪಣ ಸೇವೆ", total: "As per devotion" },
    { id: 7, name: "Mutt Bikshe", nameKannada: "ಮಠ ಭಿಕ್ಷೆ", total: "As per devotion" },
    { id: 8, name: "Pushpalankara Seve", nameKannada: "ಪುಷ್ಪಾಲಂಕಾರ ಸೇವೆ", total: "As per devotion" },
    { id: 9, name: "Kalashabhisheka Seve", nameKannada: "ಕಲಶಾಭಿಷೇಕ ಸೇವೆ", total: "As per devotion" },
    { id: 10, name: "Vishesha Vanthige", nameKannada: "ವಿಶೇಷ ವಂಥಿಗೆ", total: "As per devotion" }
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

          <div className="swamji-mokkam-table-wrapper">
            <h2 className="sevas-subheading">Swamji Mokkam</h2>
            <table className="sevas-table swamji-table">
              <thead>
                <tr>
                  <th>ಕ್ರ. ಸಂಖ್ಯೆ / SL No</th>
                  <th>Seva (English)</th>
                  <th>ಸೇವೆ (ಕನ್ನಡ)</th>
                  <th>ಒಟ್ಟು / Total</th>
                </tr>
              </thead>
              <tbody>
                {swamjiMokkamSevas.map((seva) => (
                  <tr key={seva.id}>
                    <td className="sl-no-cell">{seva.id}</td>
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



