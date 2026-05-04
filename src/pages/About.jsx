import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, CheckCircle } from 'lucide-react';
import CTASection from '../components/CTASection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page" style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">About <span className="text-primary">Jain Dental Care</span></h1>
            <p className="section-subtitle">
              Your trusted partner in comprehensive dental health for over two decades.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
            <motion.div 
              style={{ flex: '1', minWidth: '300px' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                {/* Placeholder for clinic/doctor image */}
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Dental Clinic" 
                  style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </motion.div>

            <motion.div 
              style={{ flex: '1', minWidth: '300px' }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>
                Meet <span className="text-primary">Dr. Ajay Kumar</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                With over 20 years of experience in dentistry, Dr. Ajay Kumar brings unparalleled expertise and a gentle touch to every procedure. He believes in a patient-first philosophy, ensuring that every treatment plan is personalized, thoroughly explained, and executed with precision.
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: 'var(--color-text-main)' }}>
                  <Award className="text-secondary" /> BDS, Experienced Dental Surgeon
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: 'var(--color-text-main)' }}>
                  <Heart className="text-secondary" /> Focus on Pain-Free Treatments
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: 'var(--color-text-main)' }}>
                  <CheckCircle className="text-secondary" /> Expert in Cosmetic & Implant Dentistry
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span className="text-primary">Philosophy</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Hygiene First</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>We follow 100% sterilization protocols. Your safety is our absolute highest priority.</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Modern Technology</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>We constantly upgrade our equipment to provide the most precise and painless treatments available.</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Patient Comfort</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>From our relaxing waiting area to our gentle approach, we strive to alleviate dental anxiety.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
