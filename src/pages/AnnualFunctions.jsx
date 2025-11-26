import React, { useState } from 'react'
import './Page.css'

const AnnualFunctions = () => {
  const [expandedFunctions, setExpandedFunctions] = useState({})

  const toggleExpand = (id) => {
    setExpandedFunctions(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const annualFunctions = [
    {
      id: 1,
      name: "Ugadi",
      shortDescription: "Yugadhi is the first festival of the year and marks the beginning of the New Year according to our Hindu calendar, which falls on the Prathipadha Tithi of the Chaitra Maasa, and is celebrated annually in the temple with great devotion and joy.",
      expandedText: " All the Samaj Bandhavas gather at the temple in the evening, where the Panchanga Shravanam is performed by the pradhana archaka, followed by a Vishesha Alankara Pooja offered to Lord Venkataramana."
    },
    {
      id: 2,
      name: "Punar Prathista Vardanti",
      shortDescription: "Punar Prathistha Vardhanthi is celebrated on the anniversary of the re-establishment of the temple. The Punar Prathistha of the temple was performed on the Dwithiya Tithi of the Shukla Paksha in the Aashada Maasa. Therefore, every year, the Dwithiya Tithi of the Shukla Paksha in the Aashada Maasa is observed as the Punar Prathistha Vardhanthi in the temple.",
      expandedText: " On this special occasion, the program begins with Devatha Prarthane, followed by Ganapathi Poojana, Dwadasha Kalashabhisheka, Sanidya Havana, the Madyana Mahapooja, and Mangalarathi to the Lord. Later, Brahmana Samaradhane and Santarpane are performed. All the Samaj Bandhavas gather together, and the entire celebration is carried out with immense devotion and deep spiritual fervor."
    },
    {
      id: 3,
      name: "Varamahalakshmi Vrata",
      shortDescription: "Varamahalakshmi Vrata, observed on the Friday preceding the full moon of the Shravana Maasa, is celebrated with great devotion to invoke the blessings of Goddess Lakshmi for prosperity, well-being, and harmony in the family. Every year, the Varamahalakshmi Festival is celebrated in the temple by the Varamahalakshmi Trust.",
      expandedText: " The program begins with Devatha Prarthane, followed by the Kalasha Sthapane and the Dharmika Vidhi-Vidhana. Later, in the afternoon at 12:30 PM, the Maha Mangalarathi is offered to both Varamahalakshmi and Lord Venkataramana, after which Prasada distribution and Santarpane are carried out with devotion. In the evening, the Mahapooja and Mangalarathi are performed, followed by the auction of the saree offered to Goddess Lakshmi."
    },
    {
      id: 4,
      name: "Rigupakarma",
      shortDescription: "Rigupakarma, also known as Rigveda Upakarma or Sutta Punnav in konkani, is an important Vedic ritual observed on the Shukla Paksha Purnima of the Shravana Maasa, also known as Shravana Purnima. It marks the sacred occasion of renewing Vedic studies and spiritual discipline.",
      expandedText: " On this day, the rituals begin with Devatha Prarthane, followed by the Rigupakarma Havana and other Dharmika Vidhi-Vidhana. A new Yajnopavita is specially adorned to Lord Venkataramana. All the Samaj Bandhavas gather and participate in the rituals, wearing the new Yajnopavita on this auspicious day and later seeking the blessings of the Lord and the elders with utmost devotion and joy."
    },
    {
      id: 5,
      name: "Samoohika Chudi Poojana",
      shortDescription: "Samoohika Chudi Poojana is celebrated in the temple during the month of Shravana. Married women of the community perform this sacred observance to honor Surya Deva and the Tulsi plant, symbolizing unity, love, and devotion within the family.",
      expandedText: " As part of the tradition, women prepare chudis, which are bundles made of herbs and flowers, and offer them with devotion to Surya Deva, the Tulsi plant, and Lord Venkataramana. After offering the chudis, they exchange them among themselves and seek the blessings of the Lord and the elders. In the afternoon, the Mahapooja of the Lord is performed, followed by Santarpane. The entire program is observed with deep devotion, spiritual warmth, and great joy by all the Samaj Bandhavas."
    },
    {
      id: 6,
      name: "Sri Krishna Janmashtami",
      shortDescription: "Sri Krishna Janmashtami is celebrated every year in the temple with great devotion to commemorate the divine birth of Lord Sri Krishna, who incarnated to uphold dharma and protect the righteous. This festival falls on the Ashtami Tithi of the Krishna Paksha in the Shravana or Bhadrapada Maasa.",
      expandedText: " Devotees observe a full-day fast, and in the evening, the Sahasra Tulasi Dala Samarpane is performed to Lord Krishna by the devotees under the guidance of the Archaka, followed by the Mahapooja and Mangalarathi offered to the Lord. On this day, every devotee brings a special Prasada prepared in their homes and offers it to Lord Krishna, after which it is distributed to everyone as divine blessings. The entire festival is celebrated with full devotion, joy, and deep spiritual enthusiasm by all the Samaj Bandhavas."
    },
    {
      id: 7,
      name: "Ganesh Chaturthi",
      shortDescription: "Ganesh Chaturthi is celebrated every year in the temple with great devotion to honor Lord Ganesha, the remover of obstacles and the source of wisdom and prosperity. This festival falls on the Chaturthi Tithi of the Shukla Paksha in the Bhadrapada Maasa.",
      expandedText: " The festival begins with bringing the idol of Lord Ganesha to the temple, followed by the Dharmika Vidhi-Vidhanas performed to Lord Ganesha. A beautiful Vishesha Alankara is offered to both Lord Ganapathi and Lord Venkataramana, after which the Mahapooja and Mangalarathi are performed with devotion. After the rituals, Prasada and Santarpane are offered to all devotees. Later in the evening, Bhajana Seva and Mahapooja are performed, and the day concludes with the Visarjana of the Ganesha idol. The festival is observed with immense devotion, joy, and unity as everyone seeks the blessings of Lord Ganapathi for peace, prosperity, and well-being."
    },
    {
      id: 8,
      name: "Satya Ganapathi Vratha",
      shortDescription: "Satya Ganapathi Vratha is celebrated annually in the temple on the Chathurthi Tithi of the Shravana Maasa, also known as Angaraka Sankashtahara Chathurthi. The evening program is devoted to Lord Ganapathi with collective prayers and rituals.",
      expandedText: " The program begins with Devata Prarthane, Kalasha Sthapane, and other Vidhi-Vidhanas offered to Lord Ganapathi. Bhajana Seva is rendered by devotees to the Lord, followed by the Mahapooja performed to both Lord Ganapathi and Lord Venkataramana. Santarpane is carried out thereafter, and the entire festival is celebrated by the Samaj Bandhavas with unity, devotion, and great spiritual enthusiasm."
    },
    {
      id: 9,
      name: "Anantha Chaturdashi (Nopi)",
      shortDescription: "Anantha Chaturdashi, also referred to as Nopi, is celebrated every year in the temple with deep devotion to Lord Anantha, seeking His divine blessings for protection, prosperity, and well-being. The festival falls on the Chaturdashi Tithi of the Shukla Paksha in the Bhadrapada Maasa.",
      expandedText: " Celebrations begin with Devatha Prarthane, followed by the Kalasha Sthapane and the Dharmika Vidhi-Vidhanas performed by the Archaka. A Vishesha Alankara is offered to Lord Venkataramana, after which the Mahapooja and Mangalarathi are performed with great devotion. Later, Prasada and Santarpane are distributed to all devotees, and it is believed that no devotee should miss this sacred Prasada. The festival is observed with devotion, unity, and joy as the Samaj Bandhavas gather to seek the divine grace of Lord Anantha."
    },
    {
      id: 10,
      name: "Vanabhojana Utsava",
      shortDescription: "Vanabhojana is celebrated every year in the temple on the Bahula Panchami of the Kartika Maasa, when the Ubhaya Devaru of Naikanakatte are taken to the vana, symbolizing divine togetherness and the unity of the Samaj.",
      expandedText: " The program begins with Devatha Prarthane, followed by the grand procession of both deities to the vana in the Pallakki. In the vana, Dhatri Havana, Dharmika Vidhi-Vidhanas, Pooja, and Mangalarathi are performed before Prasada distribution and Santarpane take place in the serene natural surroundings. In the evening, the Lord returns to the temple in the Pallakki, blessing devotees at their doorsteps, with several Katte Poojas conducted along the route. Upon returning, Astavadhana Seva and Ratri Pooja are offered to the Lord, and the entire festival is celebrated with deep devotion, unity, and joy."
    },
    {
      id: 11,
      name: "Bhajana Ekaha",
      shortDescription: "Bhajana Ekaha is observed every year in the temple on the Ekadashi Tithi of the Karthika Maasa, where devotees spend an entire day and night immersed in devotional singing and service.",
      expandedText: " The program begins with Devatha Prarthane and Deepa Sthapane, followed by Akhanda Bhajans performed by various Bhajana Mandalis and Paalis that continue until the next afternoon. A Vishesha Pushpalankara is offered to the Lord on both days, and the afternoon Mahapooja and Mangalarathi are followed by Prasada distribution and Santarpane. In the evening, the deities are taken out in a grand Bhajana Nagarotsava in the Pallakki, with Katte Poojas along the way. Upon returning to the temple, Bhajana Suttu and Ratri Pooja are offered to the Lord, concluding with Prasada distribution."
    }
  ]

  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Annual Functions</h1>
          
          <div className="functions-list-new">
            {annualFunctions.map((func) => (
              <div key={func.id} className="function-item-new">
                <div className="function-header">
                  <h3 className="function-name-new">{func.name}</h3>
                  <button 
                    className="function-read-more-btn" 
                    onClick={() => toggleExpand(func.id)}
                  >
                    {expandedFunctions[func.id] ? 'Read Less' : 'Read More'}
                  </button>
                </div>
                
                <div className="function-description-wrapper">
                  <p className="function-description-new">
                    {func.shortDescription}
                    {expandedFunctions[func.id] && func.expandedText && (
                      <span>{func.expandedText}</span>
                    )}
                    {expandedFunctions[func.id] && func.fullDescription && (
                      func.fullDescription.slice(1).map((para, index) => (
                        <span key={index}> {para}</span>
                      ))
                    )}
                  </p>
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



