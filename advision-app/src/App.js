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
  return (
    <div className="App">
      <Hero />
      <HowItWorks />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
