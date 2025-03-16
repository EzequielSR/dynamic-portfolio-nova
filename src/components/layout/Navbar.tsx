
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageToggle from '../ui/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('[data-navbar="mobile-menu"]') && !target.closest('[data-navbar="menu-button"]')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Disable body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
        <RouterLink to="/" className="flex items-center" onClick={closeMenu}>
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
          className="md:hidden focus:outline-none flex items-center"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
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
          "fixed inset-0 z-40 transform transition-transform ease-out-expo duration-300 glass-effect backdrop-blur-lg md:hidden pt-24",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isMenuOpen}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-8">
          <NavItem 
            href="/#projects" 
            translationKey="projects" 
            className="text-xl" 
            onClick={closeMenu} 
          />
          <NavItem 
            href="/#about" 
            translationKey="about" 
            className="text-xl" 
            onClick={closeMenu} 
          />
          <NavItem 
            href="/#skills" 
            translationKey="skills" 
            className="text-xl" 
            onClick={closeMenu} 
          />
          <NavItem 
            href="/#contact" 
            translationKey="contact" 
            className="text-xl" 
            onClick={closeMenu} 
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
