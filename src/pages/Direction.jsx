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
      "The nearest airport to the temple is Mangalore International Airport, located approximately 121 km away. The next closest is Goa International Airport, which is about 235 km from the temple.",
  },
  {
    title: "By Train",
    icon: FaTrain,
    description:
      "The nearest railway station to the temple is Bijoor Railway Station, located around 2.3 km away. The next closest is Byndoor Mookambika Road Railway Station, which is approximately 7.4 km from the temple. From both railway stations, autos and taxis are easily available, and there is convenient connectivity to the National Highway.",
  },
  {
    title: "By Bus",
    icon: FaBus,
    description:
      "The nearest designated bus stand is Byndoor Bus Stand, located around 6 km from the temple. The nearest local bus stand is Naikanakatte Bus Stand, situated approximately 0.5 km (half a kilometer) from the temple. Buses are available at both bus stands at regular intervals, making travel to the temple convenient and easily accessible",
  },
  {
    title: "By Road",
    icon: FaRoute,
    description:
      "The temple is located adjacent to National Highway NH-66, ensuring excellent road connectivity. The temple is also conveniently accessible by personal vehicles, with smooth highway access and ample parking facilities nearby. Public and private transportation facilities are easily available from surrounding towns and cities.",
    note: "As there is a flyover in front of the temple, visitors should use the service road to reach the temple.",
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
                  {section.note && (
                    <div className="direction-section-note">
                      <strong>Note:</strong> {section.note}
                    </div>
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



