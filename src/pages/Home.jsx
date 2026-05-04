import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import TestimonialSlider from '../components/TestimonialSlider';
import CTASection from '../components/CTASection';
import ServiceCard from '../components/ServiceCard';
import { Stethoscope, Smile, Activity } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <HeroSection />
      <WhyChooseUs />
      
      {/* Services Preview Section */}
      <section className="services-preview section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive <span className="text-primary">Dental Services</span></h2>
            <p className="section-subtitle">
              From routine checkups to advanced procedures, we offer complete dental care under one roof.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <ServiceCard 
              icon={<Stethoscope size={30} />}
              title="Root Canal Treatment"
              description="Painless single-sitting root canal treatments using advanced endodontic technology to save your natural tooth."
              linkUrl="/services"
            />
            <ServiceCard 
              icon={<Smile size={30} />}
              title="Cosmetic Dentistry"
              description="Smile design, teeth whitening, and veneers to give you the perfect, confident smile you deserve."
              linkUrl="/services"
            />
            <ServiceCard 
              icon={<Activity size={30} />}
              title="Dental Implants"
              description="Permanent and natural-looking replacement for missing teeth to restore functionality and aesthetics."
              linkUrl="/services"
            />
          </div>
        </div>
      </section>

      <BeforeAfterGallery />
      <TestimonialSlider />
      <CTASection />
    </div>
  );
};

export default Home;
