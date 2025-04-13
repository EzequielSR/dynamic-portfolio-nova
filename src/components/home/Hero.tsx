
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '../animations/FadeIn';
import CustomButton from '../ui/CustomButton';
import { ArrowDown, Code, FileJson, FileType2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

// Font styles for the typing animation
const fontStyles = [
  "font-display font-bold",
  "font-sans italic font-bold",
  "font-mono font-bold",
  "font-serif font-bold",
  "font-display font-light tracking-wider"
];

// Motivational phrases
const phrases = {
  'pt-BR': [
    "Criando experiências digitais extraordinárias",
    "Transformando ideias em realidade digital",
    "Elevando sua presença digital ao próximo nível",
    "Inovação digital com propósito e paixão",
    "Construindo o futuro, um pixel de cada vez"
  ],
  'en': [
    "Creating extraordinary digital experiences",
    "Transforming ideas into digital reality",
    "Elevating your digital presence to the next level",
    "Digital innovation with purpose and passion",
    "Building the future, one pixel at a time"
  ]
};

// Tech icons with colors and labels
const techIcons = [
  {
    label: 'Java',
    color: '#f89820',
    secondaryColor: '#5382a1',
    icon: (
      <svg viewBox="0 0 384 512" className="w-full h-full p-2">
        <path fill="currentColor" d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"/>
      </svg>
    )
  },
  {
    label: 'Spring Boot',
    color: '#6DB33F',
    secondaryColor: '#4a9028',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-2">
        <path fill="currentColor" d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458.289 8.83-5.946 12.21M10.704 15.841a11.05 11.05 0 0 0-.009-.032l.009.032m-.851-2.447c-.081.065-.123.101-.123.101s.064-.067.123-.101m-.827-.913s.057-.103.155-.249c-.058.091-.11.175-.155.249M4.374 11.512C4.72 6.279 9.425 4.966 10.701 2.575c.795 2.3.195 3.891-.986 5.747-1.289 2.02-5.331 3.568-5.331 3.568-.002-.128-.01-.252-.01-.378"/>
      </svg>
    )
  },
  {
    label: 'React',
    color: '#61DAFB',
    secondaryColor: '#2d7a94',
    icon: (
      <svg viewBox="0 0 512 512" className="w-full h-full p-2">
        <path fill="currentColor" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
      </svg>
    )
  }
];

export default function Hero() {
  const { t, language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Reset text when language changes
  useEffect(() => {
    setCurrentText("");
    setIsDeleting(false);
  }, [language]);
  
  // Typing animation effect for h1
  useEffect(() => {
    const currentPhrases = phrases[language as 'pt-BR' | 'en'];
    const fullText = currentPhrases[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      
      if (isDeleting) {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
        setTypingSpeed(30);
        
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % currentPhrases.length);
          setCurrentFontIndex((prev) => (prev + 1) % fontStyles.length);
          setTypingSpeed(80);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typingSpeed, language]);
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 35%, rgba(38, 57, 77, 0.2) 0%, rgba(255, 255, 255, 0) 25%)',
        }}
      />
      
      <div
        className={`absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-0 ${
          isLoaded ? 'animate-blur-in' : ''
        }`}
      />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <FadeIn direction="up">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {t('designerDeveloper')}
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={100}>
              <h1 className={cn("text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight", fontStyles[currentFontIndex])}>
                {currentText}
                <span className="animate-pulse">|</span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={200}>
              <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
                {t('heroDescription')}
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={300}>
              <div className="flex flex-wrap gap-4">
                <CustomButton 
                  href="/#projects" 
                  variant="default" 
                  size="lg"
                  arrowIcon
                  iconPosition="right"
                >
                  {t('viewProjects')}
                </CustomButton>
                
                <CustomButton 
                  href="/#contact" 
                  variant="outline" 
                  size="lg"
                >
                  {t('getInTouch')}
                </CustomButton>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn direction="scale" delay={400} className="hidden md:flex justify-center items-center">
            <div className="relative max-w-md mx-auto">
              {/* Profile image container with animation */}
              <div className="relative w-80 h-80 animate-float">
                {/* Center avatar */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-56 h-56 rounded-full border-4 border-primary/30 p-1 bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg animate-pulse">
                    <Avatar className="w-full h-full">
                      <AvatarImage src="/portfolio_281089.png" alt="Profile" className="object-cover" />
                      <AvatarFallback className="text-4xl font-bold bg-primary/10">EZ</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                {/* Tech icons around the avatar */}
                {techIcons.map((tech, index) => {
                  // Calculate position around the profile picture
                  const angle = (index / techIcons.length) * Math.PI * 2; // Distribute evenly in a circle
                  const radius = 145; // Distance from center
                  const top = 50 + Math.sin(angle) * radius;
                  const left = 50 + Math.cos(angle) * radius;
                  
                  return (
                    <div 
                      key={tech.label}
                      className="absolute flex flex-col items-center"
                      style={{
                        top: `${top}%`,
                        left: `${left}%`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 20
                      }}
                    >
                      {/* Tech icon */}
                      <div 
                        className="w-16 h-16 rounded-lg shadow-lg flex items-center justify-center animate-float"
                        style={{ 
                          backgroundColor: `${tech.color}`, 
                          animationDelay: `${index * 0.5}s`,
                          boxShadow: `0 10px 25px -5px ${tech.secondaryColor}80`
                        }}
                      >
                        <div className="w-10 h-10 text-white">
                          {tech.icon}
                        </div>
                      </div>
                      
                      {/* Tech label */}
                      <span 
                        className="mt-2 px-3 py-1 bg-white/90 dark:bg-black/80 text-sm font-bold rounded-full shadow-md"
                        style={{ color: tech.color }}
                      >
                        {tech.label}
                      </span>
                    </div>
                  );
                })}
                
                {/* Animated background circles */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse" style={{ animationDuration: "3s" }}></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-16 -left-8 w-24 h-24 bg-primary/10 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg animate-float" style={{ animationDelay: "2s" }}></div>
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/20 backdrop-blur-sm border border-white/10 rounded-full shadow-lg animate-float" style={{ animationDelay: "1.2s" }}></div>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={600} className="absolute left-1/2 transform -translate-x-1/2 bottom-10">
          <a 
            href="#projects" 
            className="flex flex-col items-center justify-center mt-12 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="mb-2">{t('scrollToExplore')}</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
