import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';
import CTASection from '../components/CTASection';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openDirections = () => {
    // The user provided this exact Maps link
    window.open('https://maps.app.goo.gl/6wUBCHq7K9sHVQpa6', '_blank');
  };

  return (
    <div className="contact-page" style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Get In <span className="text-primary">Touch</span></h1>
            <p className="section-subtitle">
              Have questions or need to schedule a visit? We're here to help. Reach out to us via phone, WhatsApp, or visit our clinic.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Clinic Location</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                    7/9, B.L.TOWER, 15-1, N.S.ROAD,<br />
                    Osmangunj, Hyderabad,<br />
                    Telangana 500012
                  </p>
                  <button onClick={openDirections} className="btn btn-secondary btn-sm" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <Navigation size={16} /> Get Directions
                  </button>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Contact Numbers</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                    For appointments or emergencies, please call us directly.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="tel:+910000000000" className="btn btn-primary btn-sm" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                      Call Us
                    </a>
                    <a href="https://wa.me/910000000000?text=Hi,%20I%20have%20an%20inquiry" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderColor: '#25D366', color: '#25D366' }}>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Clinic Timings</h3>
                  <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                    <li><strong style={{ color: 'var(--color-text-main)' }}>Morning:</strong> 10:00 AM – 2:30 PM</li>
                    <li><strong style={{ color: 'var(--color-text-main)' }}>Evening:</strong> 4:30 PM – 9:00 PM</li>
                    <li style={{ marginTop: '0.5rem', color: 'var(--color-secondary)' }}>Open Monday to Saturday</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', minHeight: '400px' }}
            >
              <iframe 
                src="https://maps.google.com/maps?q=Jain%20Dental%20Care,%20Osmangunj,%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border:0, minHeight: '100%'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location Map"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Contact;
