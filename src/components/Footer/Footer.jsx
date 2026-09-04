import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ===== COLUMN 1: Company Info ===== */}
        <div className="footer-column">
          <div className="footer-logo">
            Sweftfly<span>Inc</span>
          </div>
          <p className="footer-description">
            Your trusted partner for IT staffing and recruiting across the United States.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
            <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
            <a href="#" className="social-icon" aria-label="Facebook">f</a>
          </div>
        </div>

        {/* ===== COLUMN 2: Quick Links ===== */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/careers">Careers</NavLink></li>
            <li><NavLink to="/technologies">Technologies</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* ===== COLUMN 3: Contact Info ===== */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact</h4>
          
          <div className="footer-contact-item">
            <span className="footer-icon">📍</span>
            <div>
              <strong>Address</strong>
              <p>110 16th St Ste 1460<br />Denver, CO 80202<br />United States</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-icon">🕐</span>
            <div>
              <strong>Business Hours</strong>
              <p>Monday - Friday<br />9 am EST - 6 pm EST</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-icon">✉️</span>
            <div>
              <strong>Email</strong>
              <p>
                <a href="mailto:info@sweftflyinc.com" className="footer-email">
                  info@sweftflyinc.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Sweftfly Inc. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="footer-bottom-divider">|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;