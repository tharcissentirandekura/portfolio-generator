import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SectionWrapper from '../components/SectionWrapper';
import { cn } from '../utils/cn';

/**
 * Main layout component that organizes all sections of the portfolio
 * @returns The complete portfolio layout with all sections
 */
const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const raw = location.hash?.replace(/^#/, '') ?? '';
    if (!raw) return;
    const id = decodeURIComponent(raw);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

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
      id: 'experience', 
      component: <Experience />, 
      background: 'light' as const,
      padding: 'lg' as const 
    },
  ];

  return (
    <>
      {sections.map((section, index) => {
        const isLast = index === sections.length - 1;
        return section.id === 'home' ? (
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
            className={cn(
              isLast && 'pb-0 sm:pb-0 lg:pb-0',
              section.id === 'experience' && 'pb-6 sm:pb-8 lg:pb-8',
            )}
          >
            {section.component}
          </SectionWrapper>
        );
      })}
      <Footer />
    </>
  );
};

export default MainLayout; 