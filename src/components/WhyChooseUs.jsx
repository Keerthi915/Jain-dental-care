import React from 'react';
import { Shield, Sparkles, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const features = [
  {
    icon: <Shield size={32} />,
    title: '100% Sterilization',
    description: 'We follow strict international protocols for sterilization and hygiene to ensure your safety.'
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Advanced Technology',
    description: 'Equipped with the latest dental technology for precise diagnosis and effective treatments.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Zero Waiting Time',
    description: 'We value your time. Our streamlined appointment system ensures zero to minimal waiting.'
  },
  {
    icon: <Award size={32} />,
    title: 'Experienced Doctor',
    description: 'Dr. Ajay Kumar brings 20+ years of expertise for the best possible dental care outcomes.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose <span className="text-primary">Jain Dental Care?</span></h2>
          <p className="section-subtitle">
            We are committed to providing the highest standard of dental care in a comfortable and hygienic environment.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon text-primary">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
