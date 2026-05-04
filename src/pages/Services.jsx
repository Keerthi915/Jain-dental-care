import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Smile, Activity, ShieldPlus, ArrowDownToLine, Zap, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';

const servicesList = [
  {
    icon: <Stethoscope size={30} />,
    title: "Root Canal Treatment",
    description: "Save your severely infected or decayed tooth with our painless single-sitting root canal procedure.",
    benefits: ["Painless procedure", "Saves natural tooth", "Prevents further infection"]
  },
  {
    icon: <Zap size={30} />,
    title: "Teeth Cleaning & Scaling",
    description: "Professional cleaning to remove plaque and tartar buildup, preventing gum disease and cavities.",
    benefits: ["Fresher breath", "Prevents gum disease", "Brighter smile"]
  },
  {
    icon: <Activity size={30} />,
    title: "Dental Implants",
    description: "The most natural-looking and permanent solution for missing teeth, restoring full functionality.",
    benefits: ["Permanent solution", "Looks & feels natural", "Prevents bone loss"]
  },
  {
    icon: <Smile size={30} />,
    title: "Braces & Aligners",
    description: "Correct misaligned teeth with traditional braces or modern invisible aligners for a perfect smile.",
    benefits: ["Improves bite", "Straightens teeth", "Boosts confidence"]
  },
  {
    icon: <ArrowDownToLine size={30} />,
    title: "Tooth Extraction",
    description: "Safe and painless removal of severely damaged teeth or problematic wisdom teeth.",
    benefits: ["Relieves pain", "Prevents overcrowding", "Quick recovery"]
  },
  {
    icon: <ShieldPlus size={30} />,
    title: "Cosmetic Dentistry",
    description: "Enhance your smile aesthetics with procedures like teeth whitening, veneers, and smile designing.",
    benefits: ["Instant results", "Stain removal", "Customized to your face"]
  },
  {
    icon: <Shield size={30} />,
    title: "Crowns & Bridges",
    description: "Restore damaged or missing teeth with high-quality, durable crowns and bridges.",
    benefits: ["Restores chewing ability", "Protects weak teeth", "Durable materials"]
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page" style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Our <span className="text-primary">Services</span></h1>
            <p className="section-subtitle">
              Comprehensive dental care tailored to your needs. We use the latest technology to ensure your treatments are effective and pain-free.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                  linkUrl="/appointment"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Services;
