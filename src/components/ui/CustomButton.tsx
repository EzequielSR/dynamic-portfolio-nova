
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  arrowIcon?: boolean;
}

export default function CustomButton({
  children,
  variant = 'default',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  href,
  external = false,
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  arrowIcon = false,
}: ButtonProps) {
  const getBaseStyles = () => 
    cn(
      'inline-flex items-center justify-center font-medium transition-all',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
      'active:translate-y-0.5',
      disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
      fullWidth && 'w-full',
    );

  const getVariantStyles = () => {
    switch (variant) {
      case 'outline':
        return 'border border-primary text-primary hover:bg-primary/10';
      case 'ghost':
        return 'text-primary hover:bg-primary/10';
      case 'link':
        return 'text-primary underline-offset-4 hover:underline';
      default:
        return 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'text-xs px-3 py-1.5 rounded';
      case 'lg':
        return 'text-base px-6 py-3 rounded-md';
      default:
        return 'text-sm px-4 py-2 rounded';
    }
  };

  const buttonStyles = cn(
    getBaseStyles(),
    getVariantStyles(),
    getSizeStyles(),
    className
  );

  const iconJsx = icon || (arrowIcon ? <ArrowRight className="w-4 h-4" /> : null);
  
  const buttonContent = (
    <>
      {iconJsx && iconPosition === 'left' && (
        <span className="mr-2">{iconJsx}</span>
      )}
      {children}
      {iconJsx && iconPosition === 'right' && (
        <span className="ml-2 group-hover:translate-x-0.5 transition-transform">{iconJsx}</span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonStyles, 'group')}
          onClick={onClick}
        >
          {buttonContent}
        </a>
      );
    }
    
    return (
      <Link
        to={href}
        className={cn(buttonStyles, 'group')}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cn(buttonStyles, 'group')}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
}
