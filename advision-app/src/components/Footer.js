import React from 'react';
import Star from './Star';
import useOnScreen from '../hooks/useOnScreen';
import './Footer.css';

const Footer = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section retro-footer">
      <div ref={ref} className={`footer-content ${isVisible ? 'is-visible' : ''}`}>
        <p>Email: vinaykiran43@gmail.com</p>
        <p>Phone: 8978925052</p>
        <div className="footer-divider">
            <Star /><Star /><Star /><Star /><Star />
        </div>
        <p>© AdVision {currentYear}. All Rights Reserved. <Star isTwinkling={true} /></p>
      </div>
    </footer>
  );
};

export default Footer;
