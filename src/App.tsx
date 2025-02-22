import { BrowserRouter} from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({ isDark: false, toggleTheme: () => {} });

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import ExtracurricularActivities from './pages/ExtracurricularActivities';

const App = () => {
  const [theme, setTheme] = useState('light');
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    // setLoading(false);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider value={{ isDark: theme === 'dark', toggleTheme }}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
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
        {/* <Routes>
          <Route path="/extracurricular" element={<ExtracurricularActivities />} />
        </Routes> */}
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;