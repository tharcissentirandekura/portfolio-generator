import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
    </>
  );
};

export default MainLayout; 