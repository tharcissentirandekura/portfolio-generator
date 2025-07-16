import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Community from '../components/Communities';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/**
 * 
 * @returns The main layout of the application that wraps
 *  the entire application with the Hero, About, Skills, Experience,
 *  Projects, Education, Contact, and Footer components.
 */
const MainLayout = () => {
  return (
    <>
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
      <div id="certifications" className="container mx-auto px-4 py-12">
        <Certifications />
      </div>
      <div id="projects" className="container mx-auto px-4 py-12">
        <Projects />
      </div>
      <div id="education" className="container mx-auto px-4 py-12">
        <Education />
      </div>
      <div id="community" className="container mx-auto px-4 py-12">
        <Community />
      </div>
      <div id="contact" className="container mx-auto px-4 py-12">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout; 