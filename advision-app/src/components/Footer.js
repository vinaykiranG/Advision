import React from 'react';
import Star from './Star';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>Email: vinaykiran43@gmail.com</p>
        <p>Phone: 8978925052</p>
        <p>© AdVision {currentYear}. All Rights Reserved. <Star /></p>
      </div>
    </footer>
  );
};

export default Footer;
