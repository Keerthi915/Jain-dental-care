import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './BeforeAfterGallery.css';

const transformations = [
  {
    id: 1,
    title: 'Teeth Whitening & Cleaning',
    beforeImg: 'https://images.unsplash.com/photo-1598256989800-fea5f6c810fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Dental Implants',
    beforeImg: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
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
