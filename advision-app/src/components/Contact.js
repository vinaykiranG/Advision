import React, { useState } from 'react';
import Star from './Star';
import useOnScreen from '../hooks/useOnScreen';
import './Contact.css';

const Contact = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    needs: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = 'Ad Strategy Consultation Request';
    const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}

      Needs:
      ${formData.needs}
    `;
    const mailtoLink = `mailto:vinaykiran43@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div ref={ref} className={`contact-section retro-section ${isVisible ? 'is-visible' : ''}`}>
      <h2><Star isTwinkling={true} /> Book Your Free Ad Strategy Consultation.</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (optional)"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="needs"
          placeholder="Your Needs"
          rows="5"
          value={formData.needs}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
