import React from 'react';
import Star from './Star';
import useOnScreen from '../hooks/useOnScreen';
import './Services.css';

const Services = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <div ref={ref} className={`services-section retro-section ${isVisible ? 'is-visible' : ''}`}>
      <h2><Star isTwinkling={true} /> Our Services & Pricing</h2>
      <p>Here are our services and prices in INR.</p>
      <div className="service-categories">
        <div className="service-category">
          <h3><Star /> AI Video Ads Creation</h3>
          <ul>
            <li>Basic AI Video Ads (30 sec - 1 min): ₹5,000 - ₹8,000 per video</li>
            <li>Advanced/Custom AI Videos (1-3 min): ₹15,000 - ₹30,000 per video</li>
          </ul>
        </div>
        <div className="service-category">
          <h3><Star /> Video Editing Services</h3>
          <ul>
            <li>Basic video editing: ₹3,000 - ₹7,000 per video</li>
            <li>Advanced editing: ₹10,000 - ₹20,000 per video</li>
          </ul>
        </div>
        <div className="service-category">
          <h3><Star /> Graphic Design for Ads</h3>
          <ul>
            <li>Static ad graphics: ₹1,000 - ₹5,000 each</li>
            <li>Logo design: ₹8,000 - ₹20,000</li>
            <li>Branding packages: ₹50,000 - ₹1,00,000</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
