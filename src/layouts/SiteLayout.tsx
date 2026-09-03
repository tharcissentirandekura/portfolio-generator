import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const SiteLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const section = pathname.split('/').filter(Boolean)[0];
    const title = section ? `${section.charAt(0).toUpperCase()}${section.slice(1)} — Tharcisse Ntirandekura` : 'Tharcisse Ntirandekura — Software Engineer';
    document.title = title;
  }, [pathname]);

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors dark:bg-night dark:text-stone-100">
      <Navbar />
      <div>
        <main id="main-content"><Outlet /></main>
        <Footer />
      </div>
    </div>
  );
};

export default SiteLayout;
