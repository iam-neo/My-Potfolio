import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <CustomCursor />
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
