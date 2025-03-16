
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '../animations/FadeIn';
import CustomButton from '../ui/CustomButton';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
          
          <FadeIn direction="scale" delay={400} className="hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-70 animate-pulse" />
              
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl flex items-center justify-center animate-float">
                  <div className="text-5xl font-display font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    Portfolio
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent/30 rounded-lg" />
                  </div>
                </div>
                
                <div className="absolute -top-16 -left-8 w-40 h-40 bg-primary/10 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-5 bg-primary/20 rounded-full mb-2" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={600} className="absolute left-1/2 transform -translate-x-1/2">
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
