import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section section">
      <div className="container">
        <motion.div 
          className="cta-container glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Smile?</h2>
            <p className="cta-text">
              Book your appointment today and experience pain-free, premium dental care with Dr. Ajay Kumar.
            </p>
            <div className="cta-buttons">
              <Link to="/appointment" className="btn btn-primary btn-lg">
                <CalendarCheck size={20} />
                Book Appointment
              </Link>
              <a href="tel:+910000000000" className="btn btn-secondary btn-lg">
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
