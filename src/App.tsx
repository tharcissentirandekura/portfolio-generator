import { BrowserRouter } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import Router from './routers/Router';
import Navbar from './components/Navbar';

export const ThemeContext = createContext({ isDark: false, toggleTheme: () => {} });
/**
 * 
 * @returns The main component of the application that wraps
 *  the entire application with the ThemeContext provider and the BrowserRouter.
 */
const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider value={{ isDark: theme === 'dark', toggleTheme }}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Router />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;