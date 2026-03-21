import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  type NavItem =
    | { name: string; kind: 'scroll'; id: string }
    | { name: string; kind: 'route'; to: string };

  const navItems: NavItem[] = [
    { name: 'Work', kind: 'scroll', id: 'experience' },
    { name: 'About', kind: 'route', to: '/about' },
    { name: 'Research', kind: 'route', to: '/research' },
  ];

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

  const navClasses =
    'fixed top-0 left-0 right-0 z-[100] flex justify-center px-3 sm:px-4 pointer-events-none transition-all duration-300';

  /* Small inner pill: only this bar is visible; full width is transparent */
  const navContentClasses = cn(
    'pointer-events-auto w-fit max-w-[min(100%,calc(100vw-1.5rem))] mx-auto rounded-full backdrop-blur-xl transition-all duration-300 flex items-center gap-1 sm:gap-2 pl-2 pr-2 sm:pl-3 sm:pr-3 py-1.5 sm:py-2 shadow-lg border',
    isScrolled
      ? 'bg-white/95 dark:bg-gray-900/95 border-gray-200/90 dark:border-gray-700/90 shadow-xl'
      : 'bg-white/90 dark:bg-gray-900/90 border-gray-200/80 dark:border-gray-700/80'
  );

  return (
    <nav className={navClasses} aria-label="Main">
      <div className={navContentClasses}>
        {isHome ? (
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="shrink-0 font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100 tracking-tight px-2 py-1 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors duration-200"
          >
            Tharcisse
          </button>
        ) : (
          <Link
            to="/"
            className="shrink-0 font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100 tracking-tight px-2 py-1 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors duration-200"
          >
            Tharcisse
          </Link>
        )}

        {/* Desktop: links inside the same small pill */}
        <div className="hidden lg:flex items-center gap-0.5 bg-gray-100/90 dark:bg-gray-800/80 rounded-full p-0.5">
          {navItems.map((item) =>
            item.kind === 'route' ? (
              <Link
                key={item.to}
                to={item.to}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-white dark:hover:bg-gray-700"
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }
                }}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-white dark:hover:bg-gray-700"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:flex items-center gap-1.5 shrink-0">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-xs font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Resume
          </a>
          <ThemeToggle className="hover:bg-gray-100 dark:hover:bg-gray-800" />
        </div>

        {/* Mobile: compact row inside same pill */}
        <div className="flex lg:hidden items-center gap-0.5 z-10 shrink-0">
          <ThemeToggle
            size="sm"
            className="hover:bg-gray-100 dark:hover:bg-gray-800"
          />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — anchored under the small pill */}
      {isMenuOpen && (
        <div className="pointer-events-auto absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[min(22rem,calc(100vw-2rem))] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/70 dark:border-gray-700/70 lg:hidden">
          <div className="flex flex-col py-4 px-4 space-y-1">
            {navItems.map((item) =>
              item.kind === 'route' ? (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 px-3 text-left text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors duration-200 font-medium block"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }
                    setIsMenuOpen(false);
                  }}
                  className="py-3 px-3 text-left text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors duration-200 font-medium block"
                >
                  {item.name}
                </Link>
              ),
            )}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center py-3 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;