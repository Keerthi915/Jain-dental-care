import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Clinic Info */}
          <div className="footer-info">
            <h3 className="footer-logo">
              <span className="logo-text">Jain</span> <span className="logo-text-accent">Dental Care</span>
            </h3>
            <p className="footer-desc">
              Your Smile, Our Priority. Trusted dental care in Hyderabad with 20+ years of excellence. We specialize in pain-free, modern treatments.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-icon" style={{ fontWeight: 'bold' }}>Fb</a>
              <a href="#" aria-label="Instagram" className="social-icon" style={{ fontWeight: 'bold' }}>Ig</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/appointment">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact Details</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon text-primary" />
                <span>7/9, B.L.TOWER, 15-1, N.S.ROAD, Osmangunj, Hyderabad, Telangana 500012</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon text-primary" />
                <a href="tel:+910000000000">+91 00000 00000</a>
              </li>
              <li>
                <Clock size={18} className="contact-icon text-primary" />
                <div>
                  <span>Morning: 10:00 AM – 2:30 PM</span><br/>
                  <span>Evening: 4:30 PM – 9:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Embed */}
          <div className="footer-map">
            <h4 className="footer-heading">Find Us</h4>
            <div className="map-container">
              <iframe 
                src="https://maps.google.com/maps?q=Jain%20Dental%20Care,%20Osmangunj,%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jain Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
