import React from 'react';
import Star from './Star';
import './Hero.css';

const Hero = ({ onScrollToContact }) => {
  return (
    <div className="hero-section retro-hero">
      <div className="hero-content">
        <h1 className="hero-headline">
          AdVision: Your Idea. An Ad. In 48 Hours. <Star />
        </h1>
        <p className="hero-subheadline">
          We use AI to craft captivating video and graphic ads that elevate your brand's presence and get results, without the traditional headache.
        </p>
        <button className="cta-button" onClick={onScrollToContact}>
          Get a Free Ad Strategy Consultation
        </button>
      </div>
      <div className="hero-star">
        <Star isLarge={true} />
      </div>
    </div>
  );
};

export default Hero;
