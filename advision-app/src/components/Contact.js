import React from 'react';
import Star from './Star';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2><Star /> Book Your Free Ad Strategy Consultation.</h2>
      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number (optional)" />
        <textarea placeholder="Your Needs" rows="5"></textarea>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
