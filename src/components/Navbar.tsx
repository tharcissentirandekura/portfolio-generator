import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
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
      ? 'top-2 sm:top-4'
      : 'top-4 sm:top-8'
  );

  const navContentClasses = cn(
    'rounded-full backdrop-blur-md transition-all duration-500 flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3',
    isScrolled
      ? 'bg-white/90 dark:bg-gray-900/95 shadow-xl border border-white/20 dark:border-gray-700/50 w-[96%] sm:w-[90%] md:w-[80%] lg:w-[70%]'
      : 'bg-white/70 dark:bg-gray-900/70 border border-white/30 dark:border-gray-700/30 w-[98%] sm:w-[95%] md:w-[85%] lg:w-[75%]'
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
            className="text-gradient font-bold text-sm sm:text-base md:text-lg lg:text-xl truncate max-w-[100px] xs:max-w-[120px] sm:max-w-none"
          >
            <span className="hidden md:inline">Tharcisse Portfolio</span>
            <span className="hidden sm:inline md:hidden">T. Portfolio</span>
            <span className="sm:hidden">T.P</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-5">
          {[
            { name: 'About', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Experience', id: 'experience' },
            { name: 'Certifications', id: 'certifications' },
            { name: 'Projects', id: 'projects' },
            { name: 'Education', id: 'education' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-sm xl:text-base font-medium px-2 py-1 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/20"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-2">
          <ThemeToggle className="hover:bg-white/20 dark:hover:bg-gray-800/20" />
        </div>

        {/* Mobile Icons */}
        <div className="flex lg:hidden items-center space-x-1 z-10">
          <ThemeToggle 
            size="sm" 
            className="hover:bg-white/20 dark:hover:bg-gray-800/20" 
          />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-200"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="absolute top-full mt-2 left-[2%] right-[2%] bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 lg:hidden"
          >
            <div className="flex flex-col py-4 px-4 space-y-1">
              {[
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Experience', id: 'experience' },
                { name: 'Certifications', id: 'certifications' },
                { name: 'Projects', id: 'projects' },
                { name: 'Education', id: 'education' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="py-3 px-3 text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;