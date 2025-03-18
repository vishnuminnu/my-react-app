import React from 'react';
import '../App.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <section className="contact-header">
        <div className="header-overlay">
          <h1 className="header-title">Contact Us</h1>
          <p className="header-subtitle">We’d love to hear from you! Reach out with any questions or inquiries.</p>
        </div>
      </section>

      <div className="container px-4">
        <div className="row gx-5">
          {/* Contact Form (Unchanged from previous enhanced version) */}
          <div className="col-md-6">
            <form className="contact-form enhanced-form">
              <h3 className="form-title">Send Us a Message</h3>
              <div className="form-group">
                <input type="text" className="form-input" id="name" placeholder="" required />
                <label htmlFor="name" className="form-label">Name</label>
              </div>
              <div className="form-group">
                <input type="email" className="form-input" id="email" placeholder="" required />
                <label htmlFor="email" className="form-label">Email</label>
              </div>
              <div className="form-group">
                <textarea className="form-input" id="message" rows="5" placeholder="" required></textarea>
                <label htmlFor="message" className="form-label">Message</label>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          {/* Contact Info (Unchanged) */}
          <div className="col-md-6 contact-info">
            <h3 className='git'>Get in Touch</h3>
            <ul className="list-unstyled">
              <li><span className="icon">📞</span> <strong>Phone:</strong> +91 123-456-7890</li>
              <li><span className="icon">✉️</span> <strong>Email:</strong> <a href="mailto:info@nakshatrafeeds.com">info@nakshatrafeeds.com</a></li>
              <li><span className="icon">📍</span> <strong>Address:</strong> 123 Feed Lane, Hyderabad, India</li>
            </ul>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.567315395803!2d78.48667131487683!3d17.385044988063836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c306a87b5f%3A0x4e20624e5d9e8d5e!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Nakshatra Feeds Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;