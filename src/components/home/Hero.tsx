
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '../animations/FadeIn';
import CustomButton from '../ui/CustomButton';
import { ArrowDown, Atom, CirclePower, Code, Coffee, Database, FileType2, Server } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';

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
                  <div className="w-48 h-48 rounded-full border-4 border-primary/30 p-1 bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg animate-pulse">
                    <Avatar className="w-full h-full">
                      <AvatarImage src="/ProfilePicture.jpg" alt="Profile" className="object-cover" />
                      <AvatarFallback className="text-4xl font-bold bg-primary/10">EZ</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                {/* Java icon - positioned further away at top */}
                <div className="absolute -top-13 left-1/2 -translate-x-1/2 w-auto h-auto animate-float" style={{ animationDelay: "0.5s" }}>
                  <Badge className="px-4 py-2 text-sm font-bold bg-[#D4382C] hover:bg-[#D4382C]/90 text-white shadow-lg border-0 flex items-center gap-2">
                    <Coffee className="w-5 h-5" />
                    <span className="font-bold">Java</span>
                  </Badge>
                </div>
                
                {/* Spring Boot icon - positioned further left */}
                <div className="absolute top-1/2 -left-28 -translate-y-1/2 w-auto h-auto animate-float" style={{ animationDelay: "1s" }}>
                  <Badge className="px-4 py-2 text-sm font-bold bg-[#6DB33F] hover:bg-[#6DB33F]/90 text-white shadow-lg border-0 flex items-center gap-2">
                    <CirclePower className="w-5 h-5" />
                    <span className="font-bold">Spring Boot</span>
                  </Badge>
                </div>
                
                {/* React icon - positioned further right */}
                <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-auto h-auto animate-float" style={{ animationDelay: "1.5s" }}>
                  <Badge className="px-4 py-2 text-sm font-bold bg-[#61DAFB] hover:bg-[#61DAFB]/90 text-black shadow-lg border-0 flex items-center gap-2">
                    <Atom className="w-5 h-5" />
                    <span className="font-bold">React</span>
                  </Badge>
                </div>
                
                {/* New bottom positioned technology badge */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-auto h-auto animate-float" style={{ animationDelay: "2s" }}>
                  <Badge className="px-4 py-2 text-sm font-bold bg-[#764ABC] hover:bg-[#764ABC]/90 text-white shadow-lg border-0 flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    <span className="font-bold">SQL</span>
                  </Badge>
                </div>
                
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
    </section>
  );
}
