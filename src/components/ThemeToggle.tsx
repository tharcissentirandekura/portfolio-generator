import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const { theme, toggleTheme } = useTheme();
  
  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  };
  
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative overflow-hidden rounded-full
        bg-gray-200 dark:bg-gray-700
        hover:bg-gray-300 dark:hover:bg-gray-600
        transition-all duration-300
        ${sizeClasses[size]}
        ${className}
      `}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={iconSizes[size]} className="text-yellow-500 relative z-10" />
      ) : (
        <Moon size={iconSizes[size]} className="text-gray-700 dark:text-gray-200 relative z-10" />
      )}
    </button>
  );
};

export default ThemeToggle;