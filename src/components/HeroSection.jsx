import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="emergency-badge">
            <span className="pulse-dot"></span>
            Emergency Dental Care Available
          </div>
          
          <h1 className="hero-title">
            Your <span className="text-primary">Smile</span>,<br/> Our Priority
          </h1>
          
          <p className="hero-subtitle">
            Trusted, painless, and premium dental care in Hyderabad. Experience modern dentistry with 20+ years of excellence.
          </p>
          
          <div className="hero-ctas">
            <Link to="/appointment" className="btn btn-primary btn-lg">
              <CalendarCheck size={20} />
              Book Appointment
            </Link>
            <a href="tel:+910000000000" className="btn btn-secondary btn-lg">
              Call Now
            </a>
          </div>
          
          <div className="trust-indicators">
            <div className="trust-item">
              <ShieldCheck size={20} className="text-secondary" />
              <span>20+ Years Experience</span>
            </div>
            <div className="trust-item">
              <HeartPulse size={20} className="text-secondary" />
              <span>Pain-Free Treatment</span>
            </div>
            <div className="trust-item">
              <Sparkles size={20} className="text-secondary" />
              <span>Advanced Equipment</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-image-blob">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Happy patient with a beautiful smile" 
              className="hero-img"
            />
          </div>
          <div className="floating-card review-card glass">
            <div className="stars">★★★★★</div>
            <p>"Best dentist in Hyderabad! Completely painless."</p>
            <span className="reviewer">- Priya S.</span>
          </div>
          <div className="floating-card stat-card glass">
            <h4 className="text-primary">10,000+</h4>
            <span>Happy Patients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
