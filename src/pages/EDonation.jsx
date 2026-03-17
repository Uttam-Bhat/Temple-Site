import React from 'react'
import { FaRupeeSign, FaQrcode, FaShieldAlt, FaHandHoldingHeart, FaQuestionCircle, FaPhone } from 'react-icons/fa'
import './Page.css'

const EDonation = () => {
  const upiId = '919480621737@kbl'

  const handleQuickDonate = (amount) => {
    const upiUrl = `upi://pay?pa=${upiId}&am=${amount}&tn=Temple%20Donation`
    window.open(upiUrl, '_blank')
  }

  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">e-Donation</h1>
          
          <p className="page-intro">
            Support the temple and its activities through donations. Your 
            contributions help maintain the temple, support various sevas, and 
            preserve the spiritual heritage for future generations.
          </p>

          {/* Donation Categories */}
          <div className="donation-section">
            <h2 className="donation-section-title">Donation Categories</h2>
            <div className="donation-categories-grid">
              <div className="donation-category-card">
                <h4>General Fund</h4>
                <p>Temple maintenance, utilities, and daily operations</p>
              </div>
              <div className="donation-category-card">
                <h4>Seva-Specific</h4>
                <p>Flower garlands, Rice, Oil for lamps</p>
              </div>
              <div className="donation-category-card">
                <h4>Festival Fund</h4>
                <p>Vardanti, Vanabhojana, Bhajane Samradhane, and other annual functions</p>
              </div>
              <div className="donation-category-card">
                <h4>Special Projects</h4>
                <p>Construction, renovation, and new facilities</p>
              </div>
            </div>
          </div>

          {/* Quick Donate Amounts */}
          <div className="donation-section">
            <h2 className="donation-section-title">Quick Donation</h2>
            <p className="donation-section-desc">Select an amount to open UPI payment</p>
            <div className="quick-donate-buttons">
              {[101, 501, 1001, 5100].map((amount) => (
                <button
                  key={amount}
                  className="quick-donate-btn"
                  onClick={() => handleQuickDonate(amount)}
                >
                  <FaRupeeSign /> {amount}
                </button>
              ))}
              <span className="quick-donate-note">Or enter custom amount via UPI</span>
            </div>
          </div>
          
          <div className="donation-content">
            <div className="donation-cards-grid">
              <div className="donation-card-item">
                <h3>Bank Account Details</h3>
                <div className="bank-details">
                  <div className="detail-row">
                    <span className="detail-label">Account Name:</span>
                    <span className="detail-value">Shri Venkataramana Temple Trust</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Account Number:</span>
                    <span className="detail-value">8012500100643401</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">IFSC Code:</span>
                    <span className="detail-value">KARB0000801</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Bank Name:</span>
                    <span className="detail-value">Karnataka Bank</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Branch:</span>
                    <span className="detail-value">Uppunda, Byndoor</span>
                  </div>
                </div>
              </div>
              
              <div className="donation-card-item">
                <h3>UPI Payment</h3>
                <div className="upi-section">
                  <div className="upi-qr-placeholder">
                    <img
                      src="/images/scanner.jpeg"
                      alt="UPI QR Code"
                      loading="lazy"
                      decoding="async"
                      className="upi-qr-image"
                    />
                    <span className="qr-note">Scan to pay via UPI</span>
                  </div>
                  <div className="upi-id">
                    <strong>UPI ID:</strong> {upiId}
                  </div>
                  <p className="upi-apps-note">Works with Google Pay, PhonePe, Paytm, BHIM & other UPI apps</p>
                </div>
              </div>
              
              <div className="donation-card-item">
                <h3>Payment Methods</h3>
                <ul className="payment-methods-list">
                  <li>
                    <FaRupeeSign className="method-icon" />
                    <div>
                      <strong>Bank Transfer</strong>
                      <p>NEFT/RTGS/IMPS</p>
                    </div>
                  </li>
                  <li>
                    <FaQrcode className="method-icon" />
                    <div>
                      <strong>UPI Payment</strong>
                      <p>Scan QR or use UPI ID</p>
                    </div>
                  </li>
                  <li>
                    <FaRupeeSign className="method-icon" />
                    <div>
                      <strong>Cash/Cheque/DD</strong>
                      <p>Visit temple office</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How Donations Are Used */}
          <div className="donation-section">
            <h2 className="donation-section-title">How Your Donation Helps</h2>
            <div className="donation-helps-list">
              <div className="donation-help-item">
                <span className="help-bullet">•</span>
                <span>Temple maintenance and upkeep</span>
              </div>
              <div className="donation-help-item">
                <span className="help-bullet">•</span>
                <span>Daily poojas and sevas</span>
              </div>
              <div className="donation-help-item">
                <span className="help-bullet">•</span>
                <span>Festival celebrations and cultural events</span>
              </div>
              <div className="donation-help-item">
                <span className="help-bullet">•</span>
                <span>Flowers for annual functions</span>
              </div>
            </div>
          </div>

          {/* Contact for Large Donations */}
          <div className="donation-section donation-contact-section">
            <h2 className="donation-section-title">
              <FaPhone className="section-icon" /> Large or Recurring Donations
            </h2>
            <p className="donation-contact-text">
              For large donations, corporate support, or recurring contributions, 
              please contact the temple office for personalized assistance.
            </p>
            <div className="donation-contact-links">
              <a href="tel:+919480621737" className="donation-contact-link">+91 9480621737</a>
              <a href="tel:+919740088055" className="donation-contact-link">+91 9740088055</a>
              <a href="mailto:svtnaikanakatte1@gmail.com" className="donation-contact-link">svtnaikanakatte1@gmail.com</a>
            </div>
          </div>

          {/* Security & Transparency */}
          <div className="donation-section donation-security-section">
            <h2 className="donation-section-title">
              <FaShieldAlt className="section-icon" /> Security & Transparency
            </h2>
            <ul className="donation-security-list">
              <li>Your donation is secure and used only for temple activities</li>
              <li>Receipts are issued for all donations upon request</li>
              <li>Funds are managed by the temple committee with proper oversight</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="donation-section">
            <h2 className="donation-section-title">
              <FaQuestionCircle className="section-icon" /> Frequently Asked Questions
            </h2>
            <div className="donation-faq-list">
              <div className="donation-faq-item">
                <h4>How do I get a receipt?</h4>
                <p>Contact the temple office with your transaction details. Receipts are issued for all donations.</p>
              </div>
              <div className="donation-faq-item">
                <h4>Can I donate for a specific seva?</h4>
                <p>Yes. Mention the seva name in the UPI note or contact the temple office for seva-specific donations.</p>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="donation-thankyou-section">
            <FaHandHoldingHeart className="thankyou-icon" />
            <h2 className="donation-thankyou-title">Thank You for Your Support</h2>
            <p className="donation-thankyou-text">
              Your generosity helps preserve our spiritual heritage and serve the community. 
              May Lord Venkataramana bless you and your family.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EDonation



