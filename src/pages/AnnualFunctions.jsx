import React from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import './Page.css'

const AnnualFunctions = () => {
  // TODO: Replace with actual annual function information
  const annualFunctions = [
    {
      id: 1,
      name: "Brahmotsavam",
      date: "March 15-25",
      time: "6:00 AM - 9:00 PM",
      description: "Brahmotsavam is the grand annual festival celebrated with immense devotion and grandeur over ten days. The festival begins with the hoisting of the Garuda flag, followed by daily processions of the deities on various vahanas (vehicles) like Sesha Vahana, Hamsa Vahana, Simha Vahana, and more. Each day features special poojas, abhishekam, and archana. The highlight is the Rathotsavam (chariot festival) where the deities are taken in a grand procession. Cultural programs including classical music, dance performances, and spiritual discourses are organized. Devotees from far and wide participate in the festivities, seeking divine blessings. The festival concludes with the lowering of the flag and special poojas."
    },
    {
      id: 2,
      name: "Rama Navami",
      date: "April 5",
      time: "6:00 AM - 8:00 PM",
      description: "Rama Navami marks the birth anniversary of Lord Rama, the seventh avatar of Lord Vishnu. The day begins with special abhishekam to the deity with sacred waters, milk, honey, and other holy substances. Continuous chanting of Rama Nama and recitation of Ramayana takes place throughout the day. Special archana with 108 names of Lord Rama is performed. Devotees observe fasting and participate in bhajan sessions. The temple is decorated with flowers and special lighting. Prasadam distribution includes panakam (jaggery water) and vadapappu (soaked moong dal). Spiritual discourses on the life and teachings of Lord Rama are conducted. The evening concludes with aarti and special darshan."
    },
    {
      id: 3,
      name: "Krishna Janmashtami",
      date: "August 15",
      time: "6:00 AM - 12:00 AM",
      description: "Krishna Janmashtami celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu. The temple remains open from early morning until midnight. Special decorations include a beautifully decorated cradle (jhula) for baby Krishna. The day features continuous bhajans, kirtans, and devotional songs. At midnight, the exact time of Krishna's birth, special abhishekam and pooja are performed. Devotees break their fast after midnight darshan. The temple is adorned with flowers, lights, and traditional decorations. Cultural programs including dance dramas depicting Krishna's childhood leelas are organized. Special prasadam including butter, fruits, and sweets are distributed. The celebration continues with night-long prayers and devotional activities."
    },
    {
      id: 4,
      name: "Navaratri",
      date: "October 1-10",
      time: "5:30 AM - 9:00 PM",
      description: "Navaratri is a nine-night festival dedicated to the worship of Goddess Durga in her various forms. Each day is dedicated to a different form of the Goddess - Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri. Daily special poojas, abhishekam, and archana are performed. The temple is beautifully decorated with flowers and traditional motifs. Garba and Dandiya programs are organized in the evenings. Devotees observe fasting and perform special prayers. On the eighth day (Ashtami), special homam and yagna are conducted. The ninth day (Mahanavami) features grand celebrations with cultural programs. The festival concludes on the tenth day (Vijayadashami) with special poojas and distribution of prasadam."
    },
    {
      id: 5,
      name: "Deepavali",
      date: "November 12",
      time: "5:00 AM - 10:00 PM",
      description: "Deepavali, the festival of lights, is celebrated with great enthusiasm. The day begins with early morning special poojas and abhishekam. The entire temple complex is illuminated with thousands of oil lamps (diyas) and decorative lights. Special decorations include rangoli patterns, flower garlands, and traditional motifs. Lakshmi Pooja is performed in the evening seeking blessings for prosperity and wealth. Devotees light lamps in their homes and visit the temple for darshan. Special prasadam including laddus, barfi, and other sweets are distributed. Fireworks display is organized in the temple premises. The evening features special aarti with multiple lamps. Cultural programs including music and dance performances add to the festive atmosphere. The temple remains open late into the night for devotees to offer prayers."
    },
    {
      id: 6,
      name: "Vaikunta Ekadashi",
      date: "December 20",
      time: "4:00 AM - 10:00 PM",
      description: "Vaikunta Ekadashi is one of the most sacred days for Vaishnavites, believed to be the day when the gates of Vaikunta (heaven) are opened. Devotees observe strict fasting and stay awake the previous night (Jagarana). Early morning special darshan through the Vaikunta Dwaram (celestial gate) is arranged. Continuous chanting of Vishnu Sahasranama and other prayers takes place. Special abhishekam and archana with 1008 names of Lord Vishnu are performed. Devotees break their fast after darshan and prayers. The temple is decorated with special arrangements for the celestial gate. Spiritual discourses on the significance of Ekadashi are conducted. Special prasadam including fruits and tulsi leaves are distributed. The day is marked by continuous prayers and devotional activities throughout."
    },
    {
      id: 7,
      name: "Maha Shivaratri",
      date: "February 18",
      time: "6:00 AM - 12:00 AM",
      description: "Maha Shivaratri, the great night of Lord Shiva, is observed with night-long vigil and prayers. The day begins with special abhishekam using water, milk, honey, curd, and bilva leaves. Continuous chanting of 'Om Namah Shivaya' and Shiva mantras resonates throughout the temple. Devotees observe fasting and perform four rounds of pooja during the night (Nishitha, Ratri, Nishitha, and Brahma Muhurta). Special Rudrabhishekam is performed with Vedic chants. The temple is decorated with flowers, especially white flowers and bilva leaves. Devotees offer bel leaves, fruits, and milk to the deity. Night-long bhajans and kirtans create a divine atmosphere. Special arrangements are made for devotees to stay and participate in the vigil. The celebration continues until early morning with final aarti and darshan."
    },
    {
      id: 8,
      name: "Ugadi",
      date: "March 22",
      time: "6:00 AM - 8:00 PM",
      description: "Ugadi marks the beginning of the New Year according to the Hindu lunar calendar. The day starts with special poojas and abhishekam seeking blessings for prosperity in the coming year. The temple is decorated with fresh mango leaves (torana) and flowers, symbolizing new beginnings. Special Panchanga Sravanam (reading of the almanac) is conducted, predicting the year ahead. Devotees take special bath and wear new clothes before visiting the temple. Traditional prasadam including Ugadi Pachadi (a special chutney with six tastes representing life's experiences) is prepared and distributed. The chutney contains jaggery (sweet), neem (bitter), tamarind (sour), salt, chili (spicy), and unripe mango (tangy). Special prayers are offered for health, wealth, and happiness. Cultural programs including classical music and dance are organized. The evening concludes with special aarti and distribution of prasadam to all devotees."
    }
  ]

  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Annual Functions & Festivals</h1>
          
          <p className="page-intro">
            The temple celebrates various annual functions and festivals throughout the year. 
            These celebrations bring together devotees from far and wide to participate in 
            the festivities and seek divine blessings.
          </p>
          
          <div className="functions-list">
            {annualFunctions.map((func, index) => (
              <div key={func.id} className="function-item">
                <div className="function-date-badge">
                  <FaCalendarAlt className="date-icon" />
                  <div className="date-content">
                    <span className="date-text">{func.date}</span>
                    <span className="time-text">
                      <FaClock className="time-icon" />
                      {func.time}
                    </span>
                  </div>
                </div>
                <div className="function-details">
                  <h3 className="function-name">{func.name}</h3>
                  <p className="function-description">{func.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AnnualFunctions



