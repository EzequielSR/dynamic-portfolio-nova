
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';
import Footer from '../components/layout/Footer';

const Index = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  // Efeito de carregamento da página
  useEffect(() => {
    // Simular um pequeno atraso para mostrar a animação
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Implementar smooth scrolling para os links de navegação
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (
        anchor && 
        anchor.href.includes('#') && 
        anchor.href.split('#')[0] === window.location.href.split('#')[0]
      ) {
        event.preventDefault();
        const id = anchor.href.split('#')[1];
        const element = document.getElementById(id);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset para a navbar fixa
            behavior: 'smooth'
          });
          
          // Atualizar a URL
          window.history.pushState(null, '', `#${id}`);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  // Scrollar para a seção correta quando a página carrega com um hash na URL
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);
  
  return (
    <div className={`min-h-screen bg-background transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] animate-shimmer z-50"></div>
      
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
      {/* Partículas animadas para o fundo */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-primary/5 animate-float"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
