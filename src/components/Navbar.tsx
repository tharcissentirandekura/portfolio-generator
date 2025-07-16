import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../utils/cn';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [searchQuery] = useState('');
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const handleSearchSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Searching for:', searchQuery);
  //   setIsSearchOpen(false);
  // };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  const navClasses = cn(
    'fixed w-full z-50 transition-all duration-500 flex justify-center',
    isScrolled
      ? 'top-4'
      : 'top-8'
  );

  const navContentClasses = cn(
    'rounded-full backdrop-blur-md transition-all duration-500 flex items-center justify-between px-6 py-3',
    isScrolled
      ? 'bg-white/70 dark:bg-gray-900/80 shadow-lg w-[90%] md:w-[80%] lg:w-[70%]'
      : 'bg-white/50 dark:bg-gray-900/50 w-[95%] md:w-[85%] lg:w-[75%]'
  );

  return (
    <nav className={navClasses}>
      <div className={navContentClasses}>
        {/* Logo */}
        <Link to="/" className="flex items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-cyan-500 dark:text-cyan-300 font-bold text-xl md:text-2xl"
          >
            Tharcisse Portfolio
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center space-x-2 z-10">
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full mt-2 left-[5%] right-[5%] bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg md:hidden"
          >
            <div className="flex flex-col py-4 px-6 space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="py-2 text-left text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="py-2 text-left text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="py-2 text-left text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="py-2 text-left text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('certifications')}
                className="py-2 text-left text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="py-2 text-left text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="py-2 text-left text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;