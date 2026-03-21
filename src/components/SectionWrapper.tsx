import React from 'react';
import { cn } from '../utils/cn';
import ResponsiveContainer from './ResponsiveContainer';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'light' | 'dark' | 'gradient' | 'transparent';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  animate?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
  background = 'transparent',
  padding = 'lg',
  containerSize = 'xl',
  animate = true
}) => {
  const backgroundClasses = {
    light: 'bg-white dark:bg-gray-800/50',
    dark: 'bg-gray-50 dark:bg-gray-900/50',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900',
    transparent: 'bg-transparent'
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20 lg:py-24',
    xl: 'py-20 sm:py-24 lg:py-32'
  };

  const sectionContent = (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        'transition-colors duration-300',
        className
      )}
    >
      <ResponsiveContainer size={containerSize}>
        {children}
      </ResponsiveContainer>
    </section>
  );

  // Keep a simple, non-animated landing page.
  void animate;
  return sectionContent;
};

export default SectionWrapper;