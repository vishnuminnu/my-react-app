import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="footer-logo">Nakshatra Feeds</h3>
          <p>Quality feed solutions since [Year].</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <div className="links-grid">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/products" className="footer-link">Products</Link>
            <Link to="/certifications" className="footer-link">Certifications</Link>
            <Link to="/gallery" className="footer-link">Gallery</Link>
            <Link to="/careers" className="footer-link">Careers</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@nakshatrafeeds.com" className="footer-link">info@nakshatrafeeds.com</a></p>
          <p>Phone: +91 123-456-7890</p>
          <p>Address: 123 Feed Lane, Hyderabad, India</p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" className="social-link">L</a>
            <a href="https://twitter.com" target="_blank" className="social-link">T</a>
            <a href="https://instagram.com" target="_blank" className="social-link">I</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Nakshatra Feeds. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;