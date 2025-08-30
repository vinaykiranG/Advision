import React from 'react';
import Star from './Star';
import useOnScreen from '../hooks/useOnScreen';
import './About.css';

const About = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <div ref={ref} className={`about-section retro-section ${isVisible ? 'is-visible' : ''}`}>
      <h2><Star isTwinkling={true} /> Our Story. Our Vision.</h2>
      <div className="about-content">
        <p>
          Hello, I'm Vinaykiran. I worked at a Google Ad Agency and saw a gap in the market. The industry needed a faster, smarter way to create high-performing ads. That's why I created AdVision. Our mission is to empower businesses with dynamic, personalized advertising solutions that streamline campaign management and maximize impact across all digital platforms. We transform the future of marketing with the power of AI creativity.
        </p>
      </div>
    </div>
  );
};

export default About;
