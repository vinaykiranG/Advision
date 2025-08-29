import React from 'react';
import './Star.css';

const Star = ({ isLarge = false }) => {
  const starClassName = isLarge ? 'star large' : 'star';
  return <span className={starClassName}>*</span>;
};

export default Star;
