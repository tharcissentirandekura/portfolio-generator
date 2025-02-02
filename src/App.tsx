import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/research" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

        <div id="home">
          <Hero />
        </div>
        <div id="about" className="container mx-auto px-4 py-12">
          <About />
        </div>
        <div id="skills" className="container mx-auto px-4 py-12">
          <Skills />
        </div>
        <div id="experience" className="container mx-auto px-4 py-12">
          <Experience />
        </div>

        <div id="projects" className="container mx-auto px-4 py-12">
          <Projects />
        </div>
        <div id="education" className="container mx-auto px-4 py-12">
          <Education />
        </div>
        <div id="contact" className="container mx-auto px-4 py-12">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;