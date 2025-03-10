
import React from 'react';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className={cn(
        "flex items-center justify-center px-3 py-1 rounded-full",
        "text-foreground bg-muted/60 hover:bg-muted",
        "text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
      )}
      aria-label={language === 'pt-BR' ? t('switchToEnglish') : t('switchToPortuguese')}
    >
      <Globe className="w-4 h-4 mr-1" />
      {language === 'pt-BR' ? 'EN' : 'PT'}
    </button>
  );
}
