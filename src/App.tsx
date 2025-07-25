import React, { useEffect } from 'react';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import LightningBackground from './components/LightningBackground';
import Navbar from './components/Navbar';
import PersonalInfo from './components/PersonalInfo';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1100, once: true, offset: 40 });
  }, []);

  return (
    <>

      <LightningBackground />
      <Navbar />
      <div className="main-container" style={{ position: "relative", zIndex: 2 }}>
        {/* Cada section tiene animación con data-aos */}
        <section id="personal" data-aos="fade-up">
          <PersonalInfo />
        </section>
        <section id="profile" data-aos="fade-right" data-aos-delay="100">
          <Profile />
        </section>
        <section id="education" data-aos="fade-left" data-aos-delay="200">
          <Education />
        </section>
        <section id="experience" data-aos="fade-right" data-aos-delay="300">
          <Experience />
        </section>
        <section id="skills" data-aos="fade-left" data-aos-delay="400">
          <Skills />
        </section>
        <section id="portfolio" data-aos="zoom-in" data-aos-delay="500">
          <Portfolio />
        </section>
        <section id="contact" data-aos="fade-up" data-aos-delay="600">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;