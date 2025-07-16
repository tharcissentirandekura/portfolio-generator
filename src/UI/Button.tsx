import React from 'react';
import { cn } from "../utils/cn"

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 focus:ring-offset-white dark:focus:ring-offset-gray-900",
    secondary: "bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500 focus:ring-offset-white dark:focus:ring-offset-gray-900",
    outline: "border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-gray-500 focus:ring-offset-white dark:focus:ring-offset-gray-900",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-gray-500 focus:ring-offset-white dark:focus:ring-offset-gray-900",
  };
  
  const sizes = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-2.5 px-5 text-lg",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        widthClass,
        isLoading && 'relative text-transparent',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      {leftIcon && <span className={cn("mr-2", isLoading && "opacity-0")}>{leftIcon}</span>}
      <span className={isLoading ? "opacity-0" : ""}>{children}</span>
      {rightIcon && <span className={cn("ml-2", isLoading && "opacity-0")}>{rightIcon}</span>}
    </button>
  );
};

export default Button;