import React, { useRef } from 'react';
import './App.css';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Hero onScrollToContact={scrollToContact} />
      <HowItWorks onScrollToContact={scrollToContact} />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
