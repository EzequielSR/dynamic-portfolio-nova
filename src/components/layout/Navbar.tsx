
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface NavItemProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

const NavItem = ({ href, label, className, onClick }: NavItemProps) => {
  return (
    <RouterLink
      to={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors link-underline",
        className
      )}
      onClick={onClick}
    >
      {label}
    </RouterLink>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
          <span className="font-display font-bold text-2xl">Portfolio</span>
        </RouterLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavItem href="/#projects" label="Projetos" />
          <NavItem href="/#about" label="Sobre" />
          <NavItem href="/#skills" label="Habilidades" />
          <NavItem href="/#contact" label="Contato" />
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none flex items-center"
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

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 transform transition-transform ease-out-expo duration-300 glass-effect backdrop-blur-lg md:hidden pt-24",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-8">
          <NavItem href="/#projects" label="Projetos" className="text-xl" onClick={closeMenu} />
          <NavItem href="/#about" label="Sobre" className="text-xl" onClick={closeMenu} />
          <NavItem href="/#skills" label="Habilidades" className="text-xl" onClick={closeMenu} />
          <NavItem href="/#contact" label="Contato" className="text-xl" onClick={closeMenu} />
        </div>
      </div>
    </header>
  );
}
