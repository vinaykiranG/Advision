import React from 'react';
import Star from './Star';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <h2>Our AI Workflow</h2>
      <p>Our AI workflow processes your ideas into engaging ads, ready for customer engagement within 48 hours. <Star /></p>
      <div className="steps">
        <div className="step">
          <h3><Star /> Step 1: Connect with us virtually</h3>
          <p>Schedule a quick 15-minute call using the button below. We'll discuss your goals and brand.</p>
          <button className="connect-button">CONNECT NOW</button>
        </div>
        <div className="step">
          <h3><Star /> Step 2: Tell Us Your Requirement</h3>
          <p>You provide the details: your product, your target audience, and your key message.</p>
        </div>
        <div className="step">
          <h3><Star /> Step 3: Our AI Engine Gets to Work</h3>
          <p>Our innovative technology crafts a visually compelling advertisement, quickly.</p>
        </div>
        <div className="step">
          <h3><Star /> Step 4: Launch Your Presence</h3>
          <p>Receive your high-performing ads, ready to captivate your audience and drive results.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
