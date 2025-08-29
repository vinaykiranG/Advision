import React from 'react';
import Star from './Star';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <h3><Star /> How long does the process take?</h3>
          <p>We guarantee delivery of your final video ad within 48 hours of receiving your requirements.</p>
        </div>
        <div className="faq-item">
          <h3><Star /> What do you need from me to get started?</h3>
          <p>We just need a link to your website, a brief summary of your goals, and any brand assets you have.</p>
        </div>
        <div className="faq-item">
          <h3><Star /> What kind of AI tools do you use?</h3>
          <p>We use a proprietary combination of text-to-video generators, AI voiceover software, and automated editing platforms to deliver fast, high-quality results.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
