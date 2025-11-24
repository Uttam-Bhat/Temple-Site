import React from 'react'
import { FaRupeeSign, FaQrcode } from 'react-icons/fa'
import './Page.css'

const EDonation = () => {
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
                      className="upi-qr-image"
                    />
                    <span className="qr-note">Scan to pay via UPI</span>
                  </div>
                  <div className="upi-id">
                    <strong>UPI ID:</strong> 919480621737@kbl
                  </div>
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
        </div>
      </section>
    </div>
  )
}

export default EDonation



