import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="page-shell flex flex-col gap-5 py-8 text-sm text-stone-500 dark:text-stone-400 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Tharcisse Ntirandekura</p>
      <div className="flex items-center gap-5">
        <Link to="/contact" className="hover:text-ink dark:hover:text-white">Email</Link>
        <a href="https://github.com/tharcissentirandekura" target="_blank" rel="noreferrer" className="hover:text-ink dark:hover:text-white">GitHub</a>
        <a href="https://www.linkedin.com/in/tharcisse-ntirandekura" target="_blank" rel="noreferrer" className="hover:text-ink dark:hover:text-white">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
