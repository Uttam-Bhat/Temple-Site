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
      name: "Vanabhojana Utsava",
      shortDescription: "Vanabhojana is the main Utsava held at the temple on Karthika Vadya Panchami. The Utsava moorti of Shri Lakshmivenkatesh and Hanumaan are decorated and taken to the Vana for Dhatri Havana, followed by serving Maha anna prasadm.",
      fullDescription: [
        "Vanabhojana is the main Utsava held at the temple on Karthika Vadya Panchami. The Utsava moorti of Shri Lakshmivenkatesh and Hanumaan are decorated and taken to the Vana for Dhatri Havana, followed by serving Maha anna prasadm.",
        "The vana is now artificially created at the temple entrance. Decades ago, there was a Vanabhojana Katte. The utsava is conducted over two days.",
        "The main attraction is Lords Palakki savari, taken to many Hindu devotees' homes in Molkod. Devotees decorate their homes with themes, and Chappara, Torana, Rangoli, Phalavali, and Flowers are key attractions. Prasanna Pooja is held, and special naivedyam is offered and distributed.",
        "The savari goes to various Katte(s) including Rahu Katte, old Vanabhojana Katte, Kusta Pai Gunda, R S Pai Katte, and Avala Katte.",
        "The savari begins around 4 PM, and after completing 'Sthali' at all places, it reaches 'Kurinja' (a 'Teru-like structure' without wheels) around 11 PM. Pooja is offered, crackers are burst, and Yakshagana Dashavatar Seva begins.",
        "Lord Mukhyaprana is said to be fond of Costal Folk Art Yakshagana. Devotees offer Yakshagana seva to Lord Hanumanta for wishes. The monetary aspect of Yakshagana Seva is managed by Bhaskar Bhat and Non-Archaka Acharya."
      ]
    },
    {
      id: 6,
      name: "Brahmotsavam",
      shortDescription: "Brahmotsavam is the grand annual festival celebrated with immense devotion and grandeur over ten days. The festival begins with the hoisting of the Garuda flag, followed by daily processions of the deities on various vahanas.",
      fullDescription: [
        "Brahmotsavam is the grand annual festival celebrated with immense devotion and grandeur over ten days. The festival begins with the hoisting of the Garuda flag, followed by daily processions of the deities on various vahanas (vehicles) like Sesha Vahana, Hamsa Vahana, Simha Vahana, and more.",
        "Each day features special poojas, abhishekam, and archana. The highlight is the Rathotsavam (chariot festival) where the deities are taken in a grand procession.",
        "Cultural programs including classical music, dance performances, and spiritual discourses are organized. Devotees from far and wide participate in the festivities, seeking divine blessings. The festival concludes with the lowering of the flag and special poojas."
      ]
    },
    {
      id: 7,
      name: "Rama Navami",
      shortDescription: "Rama Navami marks the birth anniversary of Lord Rama, the seventh avatar of Lord Vishnu. The day begins with special abhishekam to the deity with sacred waters, milk, honey, and other holy substances.",
      fullDescription: [
        "Rama Navami marks the birth anniversary of Lord Rama, the seventh avatar of Lord Vishnu. The day begins with special abhishekam to the deity with sacred waters, milk, honey, and other holy substances.",
        "Continuous chanting of Rama Nama and recitation of Ramayana takes place throughout the day. Special archana with 108 names of Lord Rama is performed. Devotees observe fasting and participate in bhajan sessions.",
        "The temple is decorated with flowers and special lighting. Prasadam distribution includes panakam (jaggery water) and vadapappu (soaked moong dal). Spiritual discourses on the life and teachings of Lord Rama are conducted. The evening concludes with aarti and special darshan."
      ]
    },
    {
      id: 8,
      name: "Krishna Janmashtami",
      shortDescription: "Krishna Janmashtami celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu. The temple remains open from early morning until midnight with special decorations and celebrations.",
      fullDescription: [
        "Krishna Janmashtami celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu. The temple remains open from early morning until midnight.",
        "Special decorations include a beautifully decorated cradle (jhula) for baby Krishna. The day features continuous bhajans, kirtans, and devotional songs. At midnight, the exact time of Krishna's birth, special abhishekam and pooja are performed.",
        "Devotees break their fast after midnight darshan. The temple is adorned with flowers, lights, and traditional decorations. Cultural programs including dance dramas depicting Krishna's childhood leelas are organized. Special prasadam including butter, fruits, and sweets are distributed. The celebration continues with night-long prayers and devotional activities."
      ]
    },
    {
      id: 9,
      name: "Navaratri",
      shortDescription: "Navaratri is a nine-night festival dedicated to the worship of Goddess Durga in her various forms. Each day is dedicated to a different form of the Goddess with special poojas and celebrations.",
      fullDescription: [
        "Navaratri is a nine-night festival dedicated to the worship of Goddess Durga in her various forms. Each day is dedicated to a different form of the Goddess - Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri.",
        "Daily special poojas, abhishekam, and archana are performed. The temple is beautifully decorated with flowers and traditional motifs. Garba and Dandiya programs are organized in the evenings. Devotees observe fasting and perform special prayers.",
        "On the eighth day (Ashtami), special homam and yagna are conducted. The ninth day (Mahanavami) features grand celebrations with cultural programs. The festival concludes on the tenth day (Vijayadashami) with special poojas and distribution of prasadam."
      ]
    },
    {
      id: 10,
      name: "Deepavali",
      shortDescription: "Deepavali, the festival of lights, is celebrated with great enthusiasm. The entire temple complex is illuminated with thousands of oil lamps and decorative lights.",
      fullDescription: [
        "Deepavali, the festival of lights, is celebrated with great enthusiasm. The day begins with early morning special poojas and abhishekam. The entire temple complex is illuminated with thousands of oil lamps (diyas) and decorative lights.",
        "Special decorations include rangoli patterns, flower garlands, and traditional motifs. Lakshmi Pooja is performed in the evening seeking blessings for prosperity and wealth. Devotees light lamps in their homes and visit the temple for darshan.",
        "Special prasadam including laddus, barfi, and other sweets are distributed. Fireworks display is organized in the temple premises. The evening features special aarti with multiple lamps. Cultural programs including music and dance performances add to the festive atmosphere. The temple remains open late into the night for devotees to offer prayers."
      ]
    },
    {
      id: 11,
      name: "Vaikunta Ekadashi",
      shortDescription: "Vaikunta Ekadashi is one of the most sacred days for Vaishnavites, believed to be the day when the gates of Vaikunta (heaven) are opened.",
      fullDescription: [
        "Vaikunta Ekadashi is one of the most sacred days for Vaishnavites, believed to be the day when the gates of Vaikunta (heaven) are opened. Devotees observe strict fasting and stay awake the previous night (Jagarana).",
        "Early morning special darshan through the Vaikunta Dwaram (celestial gate) is arranged. Continuous chanting of Vishnu Sahasranama and other prayers takes place. Special abhishekam and archana with 1008 names of Lord Vishnu are performed.",
        "Devotees break their fast after darshan and prayers. The temple is decorated with special arrangements for the celestial gate. Spiritual discourses on the significance of Ekadashi are conducted. Special prasadam including fruits and tulsi leaves are distributed. The day is marked by continuous prayers and devotional activities throughout."
      ]
    },
    {
      id: 12,
      name: "Maha Shivaratri",
      shortDescription: "Maha Shivaratri, the great night of Lord Shiva, is observed with night-long vigil and prayers. The day begins with special abhishekam using water, milk, honey, curd, and bilva leaves.",
      fullDescription: [
        "Maha Shivaratri, the great night of Lord Shiva, is observed with night-long vigil and prayers. The day begins with special abhishekam using water, milk, honey, curd, and bilva leaves.",
        "Continuous chanting of 'Om Namah Shivaya' and Shiva mantras resonates throughout the temple. Devotees observe fasting and perform four rounds of pooja during the night (Nishitha, Ratri, Nishitha, and Brahma Muhurta). Special Rudrabhishekam is performed with Vedic chants.",
        "The temple is decorated with flowers, especially white flowers and bilva leaves. Devotees offer bel leaves, fruits, and milk to the deity. Night-long bhajans and kirtans create a divine atmosphere. Special arrangements are made for devotees to stay and participate in the vigil. The celebration continues until early morning with final aarti and darshan."
      ]
    },
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



