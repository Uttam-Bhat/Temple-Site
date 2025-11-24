import React from "react";
import {
  FaPlane,
  FaTrain,
  FaShip,
  FaBus,
  FaRoute,
} from "react-icons/fa";
import "./Page.css";

const transportSections = [
  {
    title: "By Air",
    icon: FaPlane,
    description:
      "The nearest designated airport is Mangalore (IXE), about 175 km away, followed by Goa (GOI) at 195 km. Both airports connect to Molkod via the national highway network, making the onward road journey comfortable.",
  },
  {
    title: "By Train",
    icon: FaTrain,
    description:
      "Manki railway station (13 km) and Honnavar railway station (22 km) are the closest railheads. Each station enjoys NH connectivity, and taxis or autos are readily available for the last-mile ride to Molkod.",
  },
  {
    title: "By Boat",
    icon: FaShip,
    description:
      "Commercial motorboats ferry devotees between Honnavar and Molkod every day, carrying both passengers and materials. Boats depart Honnavar at 12:15 PM (arriving Molkod 1:15 PM) and return from Molkod at 8:10 AM (reaching Honnavar 9:15 AM).",
  },
  {
    title: "By Road & Bus",
    icon: FaBus,
    description:
      "Honnavar (16 km) is the nearest designated bus stand. Local buses halt at Idagunji (Paje), just 1.5 km from Molkod, with seven services operating daily in both directions.",
    listTitle: "Daily Bus Timings",
    listItems: [
      "Honnavar → Idagunji: 07:30, 09:30, 11:00, 12:45, 15:00, 17:00",
      "Idagunji → Honnavar: 07:00, 08:15, 10:00, 11:45, 13:15, 15:30, 17:00",
    ],
  },
  {
    title: "Other Modes",
    icon: FaRoute,
    description:
      "Personal vehicles can approach Molkod from Gunavante or Idagunji roads. Visitors may also travel to Gunavante or Manki and hire autos to reach the temple island.",
  },
];

const Direction = () => {
  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Direction</h1>

          <div className="direction-layout">
            <div className="direction-map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1234567890!2d74.632259!3d13.8183621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc604a0598c791%3A0x573999276544b407!2sShri%20Venkataramana%20Temple!5e0!3m2!1sen!2sin!4v1735123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shri Venkataramana Temple Location"
              ></iframe>
            </div>

            <p className="direction-intro">
              Molkod is a serene island village on the banks of the Sharavati
              River. The community traditionally relied on water transport, but
              recent road connectivity now links devotees smoothly with nearby
              towns. Use the guide below to plan your journey.
            </p>

            <div className="direction-sections">
              {transportSections.map((section) => (
                <div className="direction-section" key={section.title}>
                  <div className="direction-section-header">
                    <section.icon className="direction-section-icon" />
                    <h2>{section.title}</h2>
                  </div>
                  <p>{section.description}</p>
                  {section.listItems && (
                    <>
                      <h4>{section.listTitle}</h4>
                      <ul>
                        {section.listItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Direction;



