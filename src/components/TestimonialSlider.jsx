import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    name: 'Suresh Kumar',
    text: 'Dr. Ajay Kumar is exceptional. I went in for a root canal and was terrified, but it was completely painless. The clinic is incredibly clean and modern.',
    rating: 5
  },
  {
    id: 2,
    name: 'Anjali Desai',
    text: 'Best dental clinic in Narayanguda! They explained the whole teeth alignment process clearly and the staff is very polite. Highly recommend.',
    rating: 5
  },
  {
    id: 3,
    name: 'Rahul Varma',
    text: 'Got my dental implants done here. Very professional environment and excellent after-care support. The pricing is also very transparent.',
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
