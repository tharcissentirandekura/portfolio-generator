import { ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollAnimationWrapper = ({ 
  children, 
  direction = 'left', 
  delay = 0, 
  duration = 0.8,
  className = ''
}: ScrollAnimationWrapperProps) => {
  // Intentionally render without motion/reveal to keep the landing page simple.
  // Props are kept for compatibility with existing call sites.
  void direction;
  void delay;
  void duration;

  return <div className={className}>{children}</div>;
};

export default ScrollAnimationWrapper;