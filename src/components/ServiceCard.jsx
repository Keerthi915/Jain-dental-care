import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, benefits, linkUrl }) => {
  return (
    <div className="service-card glass-card">
      <div className="service-icon-wrapper">
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
      
      {benefits && (
        <ul className="service-benefits">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      )}
      
      <Link to={linkUrl || '/services'} className="service-link">
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;
