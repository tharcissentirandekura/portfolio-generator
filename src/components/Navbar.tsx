import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors ${
    isActive
      ? 'text-ink dark:text-white'
      : 'text-stone-500 hover:text-ink dark:text-stone-400 dark:hover:text-white'
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-paper/90 backdrop-blur-xl dark:bg-night/90">
      <nav className="page-shell flex h-16 min-w-0 items-center justify-between gap-4" aria-label="Main navigation">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
          <img src="/images/head-shot.jpeg" alt="" className="h-8 w-8 rounded-lg object-cover object-top" />
          Tharcisse N.
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>{link.label}</NavLink>
          ))}
          <ThemeToggle size="sm" />
          <a className="button button-dark px-4 py-2 text-sm" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <ThemeToggle size="sm" />
          <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 dark:border-white/15" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="page-shell py-5 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => <NavLink key={link.to} to={link.to} className="py-3 text-2xl font-medium">{link.label}</NavLink>)}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="py-3 text-2xl font-medium">Resume ↗</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
