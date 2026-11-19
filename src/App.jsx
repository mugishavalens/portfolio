import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Process from './sections/Process';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const readTheme = () => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
};

function App() {
  const [isDark, setIsDark] = useState(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      /* storage unavailable */
    }
  }, [isDark]);

  return (
    <div className="bg-background text-text min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark((d) => !d)} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
