import React from 'react';
import './Star.css';

const Star = ({ isLarge = false, isTwinkling = false }) => {
  const starClassName = `star ${isLarge ? 'large' : ''} ${isTwinkling ? 'twinkle' : ''}`;
  return <span className={starClassName}>*</span>;
};

export default Star;
