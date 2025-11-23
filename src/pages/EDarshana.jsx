import React from "react";
import "./Page.css";

const EDarshana = () => {
  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">e-Darshana</h1>

          <p className="page-intro">
            {/* TODO: Replace with actual introduction */}
            the divine darshana of the deities from anywhere in the world
            through our live streaming service. Connect with the temple and
            receive blessings in real-time.
          </p>

          <div className="darshana-content">
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
                  The live stream will be available soon. Please check back
                  later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EDarshana;
