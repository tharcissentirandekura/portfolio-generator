import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Community from '../components/Communities';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SectionWrapper from '../components/SectionWrapper';

/**
 * Main layout component that organizes all sections of the portfolio
 * @returns The complete portfolio layout with all sections
 */
const MainLayout = () => {
  const sections = [
    { 
      id: 'home', 
      component: <Hero />, 
      background: 'transparent' as const,
      padding: 'none' as const,
      animate: false,
      fullWidth: true
    },
    { 
      id: 'about', 
      component: <About />, 
      background: 'light' as const,
      padding: 'lg' as const 
    },
    { 
      id: 'skills', 
      component: <Skills />, 
      background: 'light' as const,
      padding: 'lg' as const 
    },
    { 
      id: 'experience', 
      component: <Experience />, 
      background: 'light' as const,
      padding: 'lg' as const 
    },
    { 
      id: 'certifications', 
      component: <Certifications />, 
      background: 'dark' as const,
      padding: 'lg' as const 
    },
    { 
      id: 'projects', 
      component: <Projects />, 
      background: 'light' as const,
      padding: 'lg' as const 
    },
    { 
      id: 'education', 
      component: <Education />, 
      background: 'dark' as const,
      padding: 'lg' as const 
    },
    { 
      id: 'community', 
      component: <Community />, 
      background: 'light' as const,
      padding: 'lg' as const 
    },
    { 
      id: 'contact', 
      component: <Contact />, 
      background: 'gradient' as const,
      padding: 'xl' as const 
    },
  ];

  return (
    <>
      {sections.map((section) => (
        section.id === 'home' ? (
          <div key={section.id} id={section.id} className="w-full">
            {section.component}
          </div>
        ) : (
          <SectionWrapper
            key={section.id}
            id={section.id}
            background={section.background}
            padding={section.padding}
            animate={section.animate !== false}
          >
            {section.component}
          </SectionWrapper>
        )
      ))}
      <Footer />
    </>
  );
};

export default MainLayout; 