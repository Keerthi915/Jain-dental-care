import React, { useState } from 'react';
import { motion } from 'framer-motion';
import beforeCleaningImg from '../assets/teeth-cleaning-before.jpg';
import './BeforeAfterGallery.css';

const transformations = [
  {
    id: 1,
    title: 'Teeth Whitening & Cleaning',
    beforeImg: 'https://asset3.toothsi.in/white_spot_on_teeth_causes_f9d0623c93.jpg?q=75&w=1920',
    afterImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33Bjx7n49XANNnSUIZO2CAEOHt5kgexJSEg&s',
  },
  {
    id: 2,
    title: 'Dental Implants',
    beforeImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-eal6_CuB0a10nDhTUO8e1Aiaq75A0KMMA&s',
    afterImg: 'https://www.sunridgelandingdentalcare.com/wp-content/uploads/2022/02/types-of-dental-implants-which-one-is-best-for-you.jpg',
  }
];

const BeforeAfterGallery = () => {
  return (
    <section className="gallery-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Smile <span className="text-primary">Transformations</span></h2>
          <p className="section-subtitle">
            See the real results. We take pride in restoring our patients' confidence through expert dental care.
          </p>
        </div>

        <div className="gallery-grid">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item glass-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="gallery-item-title">{item.title}</h3>
              <div className="comparison-container">
                <div className="img-wrapper before-wrapper">
                  <span className="img-label">Before</span>
                  <img src={item.beforeImg} alt={`Before ${item.title}`} loading="lazy" />
                </div>
                <div className="img-wrapper after-wrapper">
                  <span className="img-label">After</span>
                  <img src={item.afterImg} alt={`After ${item.title}`} loading="lazy" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
