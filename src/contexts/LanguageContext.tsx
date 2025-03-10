
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available languages and their translations
export const translations = {
  'pt-BR': {
    projects: 'Projetos',
    about: 'Sobre',
    skills: 'Habilidades',
    contact: 'Contato',
    switchToEnglish: 'Switch to English',
    darkMode: 'Modo escuro',
    lightMode: 'Modo claro',
  },
  'en': {
    projects: 'Projects',
    about: 'About',
    skills: 'Skills',
    contact: 'Contact',
    switchToPortuguese: 'Mudar para Português',
    darkMode: 'Dark mode',
    lightMode: 'Light mode',
  }
};

type Language = 'pt-BR' | 'en';
type TranslationKeys = keyof typeof translations['en'] | keyof typeof translations['pt-BR'];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return localStorage.getItem('language') as Language || 'pt-BR';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: TranslationKeys): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
