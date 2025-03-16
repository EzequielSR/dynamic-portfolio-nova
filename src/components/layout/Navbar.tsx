
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageToggle from '../ui/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMobileMenu } from '@/hooks/use-mobile-menu';

interface NavItemProps {
  href: string;
  translationKey: 'projects' | 'about' | 'skills' | 'contact';
  className?: string;
  onClick?: () => void;
}

const NavItem = ({ href, translationKey, className, onClick }: NavItemProps) => {
  const { t } = useLanguage();
  
  return (
    <RouterLink
      to={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors link-underline",
        className
      )}
      onClick={onClick}
    >
      {t(translationKey)}
    </RouterLink>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, toggle, close } = useMobileMenu();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 glass-effect shadow-md" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <RouterLink to="/" className="flex items-center" onClick={close}>
          <span className="font-display font-bold text-2xl">Ezequiel SR</span>
        </RouterLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavItem href="/#projects" translationKey="projects" />
          <NavItem href="/#about" translationKey="about" />
          <NavItem href="/#skills" translationKey="skills" />
          <NavItem href="/#contact" translationKey="contact" />
        </nav>

        {/* Theme and Language Toggles */}
        <div className="hidden md:flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button 
          data-navbar="menu-button"
          className="md:hidden focus:outline-none flex items-center z-50"
          onClick={toggle}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        data-navbar="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 mobile-menu-glass transform transition-all duration-300 ease-in-out md:hidden pt-24",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-8">
          <NavItem 
            href="/#projects" 
            translationKey="projects" 
            className="text-xl" 
            onClick={close} 
          />
          <NavItem 
            href="/#about" 
            translationKey="about" 
            className="text-xl" 
            onClick={close} 
          />
          <NavItem 
            href="/#skills" 
            translationKey="skills" 
            className="text-xl" 
            onClick={close} 
          />
          <NavItem 
            href="/#contact" 
            translationKey="contact" 
            className="text-xl" 
            onClick={close} 
          />
          
          {/* Mobile Theme and Language Toggles */}
          <div className="flex items-center space-x-4 pt-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
