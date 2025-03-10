
import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LanguageToggle() {
  const [language, setLanguage] = useState<'pt-BR' | 'en'>(() => {
    return localStorage.getItem('language') as 'pt-BR' | 'en' || 'pt-BR';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Aqui você pode adicionar lógica para traduzir o conteúdo da página
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt-BR' ? 'en' : 'pt-BR');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className={cn(
        "flex items-center justify-center px-3 py-1 rounded-full",
        "text-foreground bg-muted/60 hover:bg-muted",
        "text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
      )}
      aria-label={language === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
    >
      <Globe className="w-4 h-4 mr-1" />
      {language === 'pt-BR' ? 'EN' : 'PT'}
    </button>
  );
}
