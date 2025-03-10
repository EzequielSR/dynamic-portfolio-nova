
import React, { useEffect, useState } from 'react';
import FadeIn from '../animations/FadeIn';
import CustomButton from '../ui/CustomButton';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
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
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight">
                {t('creatingExperiences')}
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
        
        <FadeIn delay={600} className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <a 
            href="#projects" 
            className="flex flex-col items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="mb-2">{t('scrollToExplore')}</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
