import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    name: 'Vishal Parekar',
    text: 'Wonderful place and excellent Doctor. Anybody at my home gets problem, we rush to Jain Dental Care. Dr Dilip is very kind and explains the condition patiently. His approach towards the problem is marvelous. He takes so much time to do the work precisely and correctly.',
    rating: 5
  },
  {
    id: 2,
    name: 'Bhavani Yedugani',
    text: 'The doctors are superb here. I was treated by Dr. Dilip Jain, very professional. His explanation to every detail is extremely helpful to take decision. Unlike other dental clinics, this clinic is very less cost and they don\'t charge unnecessarily. Highly recommended.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ankit Mehta',
    text: 'Well maintained clinic with superior quality treatment and safety protocol. Highly recommended for individual who wants to get root canal treatment. Dr Dilip is passionated dental practitioner updating himself with latest dental advancement and doing best in favour of his patients.',
    rating: 5
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Patient <span className="text-primary">Stories</span></h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here is what our happy patients have to say about their experience at Jain Dental Care.
          </p>
        </div>

        <div className="testimonial-container">
          <button className="slider-btn prev-btn" onClick={prevTestimonial} aria-label="Previous Testimonial">
            <ChevronLeft size={24} />
          </button>
          
          <div className="testimonial-content-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card glass-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="quote-icon">
                  <Quote size={40} />
                </div>
                
                <div className="stars-container">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
                
                <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
                <h4 className="testimonial-author">- {testimonials[currentIndex].name}</h4>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="slider-btn next-btn" onClick={nextTestimonial} aria-label="Next Testimonial">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
