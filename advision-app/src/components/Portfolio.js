import React from 'react';
import Star from './Star';
import useOnScreen from '../hooks/useOnScreen';
import './Portfolio.css';

const Portfolio = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <div ref={ref} className={`portfolio-section retro-section ${isVisible ? 'is-visible' : ''}`}>
      <h2><Star isTwinkling={true} /> Our Creations. Your Results.</h2>
      <p>Here are some examples of our AI-powered creations. We can apply this same dynamic approach to your brand to get you results.</p>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="portfolio-item">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="portfolio-item">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
