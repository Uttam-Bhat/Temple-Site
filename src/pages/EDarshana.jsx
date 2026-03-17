import React from "react";
import "./Page.css";

const EDarshana = () => {
  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">e-Darshana</h1>

          <p className="page-intro">
            Experience the divine darshana of the deities from anywhere in the
            world. In future, live darshana will be available from the temple,
            and until then you can have darshana through recorded videos.
          </p>

          <div className="darshana-content">
            {/* Recorded video cards with YouTube thumbnails */}
            <div className="darshana-videos-grid">
              <a
                href="https://youtu.be/M4YXzpcPF1I"
                target="_blank"
                rel="noopener noreferrer"
                className="darshana-video-card"
              >
                <div className="darshana-video-thumb">
                  <img
                    src="https://img.youtube.com/vi/M4YXzpcPF1I/hqdefault.jpg"
                    alt="Āshirvachana by Paramapoojya Swamiji"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="darshana-video-info">
                  <h2>Aashirvachana</h2>
                  <p>
                    Glimpse of Āshirvachana by Paramapoojya Swamiji during Mokkam
                    at SVT Naikanakatte.
                  </p>
                </div>
              </a>

              <a
                href="https://youtu.be/dC4tuM5j-mk"
                target="_blank"
                rel="noopener noreferrer"
                className="darshana-video-card"
              >
                <div className="darshana-video-thumb">
                  <img
                    src="https://img.youtube.com/vi/dC4tuM5j-mk/hqdefault.jpg"
                    alt="Rama Rath Yatra"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="darshana-video-info">
                  <h2>Rama Rath Yatra</h2>
                  <p>
                    Highlights of Shree Rama Digvijaya Rath Yatra at “GunabhiRama” Japa
                    Kendra.
                  </p>
                </div>
              </a>
            </div>

            {/* Live stream placeholder card */}
            <div className="darshana-video-wrapper">
              {/* TODO: Replace with actual live stream embed code or video */}
              {/* You can embed YouTube live stream, or any other streaming service */}
              {/* Example: <iframe src="YOUR_LIVE_STREAM_URL" ...></iframe> */}
              <div className="video-placeholder">
                <div className="video-placeholder-icon">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </div>
                <h3>Live Stream Will Appear Here</h3>
                <p className="video-note">
                  The live stream is not active every day. It will be available
                  here on special days and during important functions.
                </p>
              </div>
            </div>

            {/* Small FAQ – content only, links to be added later */}
            <div className="donation-section">
              <h2 className="donation-section-title">Frequently Asked Questions</h2>
              <div className="donation-faq-list">
                <div className="donation-faq-item">
                  <h4>Is live darshana available every day?</h4>
                  <p>
                    No. Live darshana is planned only on special days and is not
                    started for regular daily streaming yet.
                  </p>
                </div>
                <div className="donation-faq-item">
                  <h4>Where can I see recorded videos?</h4>
                  <p>
                    Recorded videos like daily clips, festival highlights and
                    special sevas will be listed in the sections above, and can
                    also be linked to the temple&apos;s YouTube channel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EDarshana;
