import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, User, Phone, Clock, FileText } from 'lucide-react';
import CTASection from '../components/CTASection';

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format message for WhatsApp
    const whatsappNum = "910000000000";
    const message = `*New Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Treatment:* ${formData.treatment}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Message:* ${formData.message}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNum}?text=${message}`, '_blank');
  };

  return (
    <div className="appointment-page" style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Book an <span className="text-primary">Appointment</span></h1>
            <p className="section-subtitle">
              Schedule your visit with Dr. Ajay Kumar. Fill out the form below or call us directly. We will confirm your appointment shortly.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '4rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            <motion.div 
              style={{ flex: '1.5', minWidth: '300px' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card" style={{ padding: '3rem', borderTop: '4px solid var(--color-primary)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-text-main)' }}>Patient Details</h3>
                
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <User size={16} className="text-primary" /> Full Name
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        className="form-input" 
                        placeholder="John Doe" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Phone size={16} className="text-primary" /> Phone Number
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="form-input" 
                        placeholder="+91 XXXXX XXXXX" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Activity size={16} className="text-primary" /> Select Treatment
                    </label>
                    <select 
                      name="treatment"
                      className="form-input" 
                      required
                      value={formData.treatment}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select a treatment...</option>
                      <option value="General Checkup">General Checkup</option>
                      <option value="Root Canal">Root Canal Treatment</option>
                      <option value="Teeth Cleaning">Teeth Cleaning & Scaling</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Braces & Aligners">Braces & Aligners</option>
                      <option value="Tooth Extraction">Tooth Extraction</option>
                      <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                      <option value="Other">Other (Please specify below)</option>
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CalendarCheck size={16} className="text-primary" /> Preferred Date
                      </label>
                      <input 
                        type="date" 
                        name="date"
                        className="form-input" 
                        required 
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Clock size={16} className="text-primary" /> Preferred Time
                      </label>
                      <select 
                        name="time"
                        className="form-input" 
                        required
                        value={formData.time}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select time slot...</option>
                        <optgroup label="Morning">
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="01:00 PM">01:00 PM</option>
                          <option value="02:00 PM">02:00 PM</option>
                        </optgroup>
                        <optgroup label="Evening">
                          <option value="04:30 PM">04:30 PM</option>
                          <option value="05:30 PM">05:30 PM</option>
                          <option value="06:30 PM">06:30 PM</option>
                          <option value="07:30 PM">07:30 PM</option>
                          <option value="08:30 PM">08:30 PM</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FileText size={16} className="text-primary" /> Additional Notes (Optional)
                    </label>
                    <textarea 
                      name="message"
                      className="form-input" 
                      rows="4" 
                      placeholder="Any specific symptoms or requests?"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                    Confirm Booking Request via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div 
              style={{ flex: '1', minWidth: '300px' }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card" style={{ padding: '2rem', height: '100%', backgroundColor: 'var(--color-primary-light)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>Why Book Now?</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-main)' }}>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ backgroundColor: 'var(--color-white)', padding: '0.5rem', borderRadius: '50%' }}>
                      <Activity size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Priority Attention</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Online bookings get priority slots with minimal waiting time.</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ backgroundColor: 'var(--color-white)', padding: '0.5rem', borderRadius: '50%' }}>
                      <CalendarCheck size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Instant Confirmation</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>We confirm your appointment instantly via WhatsApp.</p>
                    </div>
                  </li>
                </ul>

                <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)' }}>
                  <h4 style={{ fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={18} className="text-primary" /> Need Urgent Help?
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                    If you are experiencing severe dental pain, please call us directly for emergency care.
                  </p>
                  <a href="tel:+910000000000" className="btn btn-secondary" style={{ width: '100%' }}>
                    Call +91 00000 00000
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;

// Add a dummy Activity import that was missing above
function Activity(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
