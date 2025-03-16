import React, { useState, useEffect } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);


    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto'; 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen
          ? "py-3 glass-effect shadow-md" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <RouterLink to="/" className="flex items-center" onClick={close}>
          <span className="font-display font-bold text-2xl">Ezequiel SR</span>
        </RouterLink>

        <nav className="hidden md:flex items-center space-x-6">
          <NavItem href="/#projects" translationKey="projects" />
          <NavItem href="/#about" translationKey="about" />
          <NavItem href="/#skills" translationKey="skills" />
          <NavItem href="/#contact" translationKey="contact" />
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button 
          className={cn(
            "md:hidden focus:outline-none flex items-center p-2 rounded-lg transition-all",
            isMenuOpen ? "backdrop-blur-lg bg-white/10" : "bg-transparent" 
          )}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <div 
        data-navbar="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 w-screen h-screen transition-transform ease-out-expo duration-300 backdrop-blur-lg bg-black/60 md:hidden flex flex-col justify-center items-center bg-card/70",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={closeMenu} 
      >
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-8 items-center">
          <NavItem href="/#projects" translationKey="projects" className="text-xl" onClick={closeMenu} />
          <NavItem href="/#about" translationKey="about" className="text-xl" onClick={closeMenu} />
          <NavItem href="/#skills" translationKey="skills" className="text-xl" onClick={closeMenu} />
          <NavItem href="/#contact" translationKey="contact" className="text-xl" onClick={closeMenu} />
          

          <div className="flex items-center space-x-4 pt-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}