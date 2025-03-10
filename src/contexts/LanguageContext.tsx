
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available languages and their translations
export const translations = {
  'pt-BR': {
    // Navigation
    projects: 'Projetos',
    about: 'Sobre',
    skills: 'Habilidades',
    contact: 'Contato',
    switchToEnglish: 'Switch to English',
    darkMode: 'Modo escuro',
    lightMode: 'Modo claro',

    // Hero section
    designerDeveloper: 'Designer & Desenvolvedor',
    creatingExperiences: 'Criando experiências digitais extraordinárias',
    heroDescription: 'Combinando design minimalista com tecnologia de ponta para criar soluções digitais elegantes, funcionais e memoráveis.',
    viewProjects: 'Ver projetos',
    getInTouch: 'Entre em contato',
    scrollToExplore: 'Scroll para explorar',

    // Projects section
    portfolio: 'Portfolio',
    featuredProjects: 'Projetos em destaque',
    projectsDescription: 'Uma seleção dos meus melhores trabalhos, demonstrando minha abordagem para resolver problemas complexos através do design e desenvolvimento.',
    viewProject: 'Ver projeto',
    github: 'GitHub',

    // Projects data
    ecommerceRedesign: {
      title: "Redesign de E-commerce",
      description: "Uma experiência de compra moderna e intuitiva com foco em desempenho e usabilidade. Implementado com React e Node.js."
    },
    taskApp: {
      title: "App de Gerenciamento de Tarefas",
      description: "Aplicativo web responsivo para gerenciamento de tarefas com interface minimalista e funcionalidades avançadas."
    },
    analyticsApp: {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados de marketing digital e análise de métricas-chave."
    },
    fitnessApp: {
      title: "App Mobile Fitness",
      description: "Aplicativo móvel para acompanhamento de treinos e nutrição, com sincronização em nuvem e análise de progresso."
    },

    // About section
    aboutMe: 'Sobre mim',
    passionateDevDesigner: 'Designer e desenvolvedor apaixonado por criar',
    aboutIntro: 'Olá! Sou um desenvolvedor front-end e designer de interfaces, com mais de 5 anos de experiência na criação de experiências digitais elegantes e funcionais.',
    aboutDescription1: 'Meu foco está em criar produtos digitais que sejam não apenas esteticamente agradáveis, mas também intuitivos e acessíveis. Acredito que o bom design é aquele que passa despercebido enquanto cumpre seu propósito.',
    aboutDescription2: 'Quando não estou codificando ou desenhando interfaces, estou explorando novas tecnologias, lendo sobre design ou caminhando ao ar livre para renovar a criatividade.',
    downloadCV: 'Download CV',
    myJourney: 'Minha jornada',

    // Timeline
    leadDesigner: {
      title: "Lead UX/UI Designer",
      description: "Liderando projetos de design de produto e colaborando com equipes multidisciplinares para criar experiências de usuário excepcionais."
    },
    seniorDev: {
      title: "Desenvolvedor Front-end Sênior",
      description: "Desenvolvimento de aplicações web responsivas e performáticas usando tecnologias modernas como React, TypeScript e TailwindCSS."
    },
    bachelorCS: {
      title: "Bacharel em Ciência da Computação",
      description: "Formação acadêmica com foco em programação, algoritmos, estruturas de dados e desenvolvimento de software."
    },
    uiCertification: {
      title: "Certificação em UI/UX Design",
      description: "Especialização em design de interfaces e experiência do usuário, com foco em metodologias centradas no usuário."
    },

    // Skills section
    skillsTitle: 'Habilidades',
    myCompetencies: 'Minhas competências',
    skillsDescription: 'Ao longo da minha carreira, desenvolvi um conjunto diversificado de habilidades que me permitem criar soluções digitais completas e eficientes.',
    frontendDev: 'Desenvolvimento Frontend',
    backendDev: 'Desenvolvimento Backend',
    designTools: 'Design & Ferramentas',
    technicalSkills: 'Habilidades técnicas',
    softSkills: 'Soft skills',
    communication: 'Comunicação',
    teamwork: 'Trabalho em equipe',
    problemSolving: 'Resolução de problemas',
    timeManagement: 'Gerenciamento de tempo',

    // Contact section
    contactTitle: 'Contato',
    letsChat: 'Vamos conversar',
    contactDescription: 'Interessado em trabalhar juntos? Preencha o formulário abaixo ou entre em contato através de um dos canais disponíveis.',
    name: 'Nome',
    email: 'Email',
    subject: 'Assunto',
    message: 'Mensagem',
    yourName: 'Seu nome',
    yourEmail: 'seu@email.com',
    howCanIHelp: 'Como posso ajudar?',
    projectDescription: 'Descreva seu projeto ou dúvida...',
    sending: 'Enviando...',
    sendMessage: 'Enviar mensagem',
    messageSent: 'Mensagem enviada!',
    thankYou: 'Obrigado pelo contato. Responderei o mais breve possível.',
    phone: 'Telefone',
    location: 'Localização',

    // Footer
    quickLinks: 'Links Rápidos',
    copyright: '© {year} Portfolio. Todos os direitos reservados.',

    // Not Found Page
    error404: 'Erro 404',
    pageNotFound: 'Página não encontrada',
    pageNotFoundDesc: 'A página que você está tentando acessar não existe ou foi movida.',
    backToHome: 'Voltar para a página inicial'
  },
  'en': {
    // Navigation
    projects: 'Projects',
    about: 'About',
    skills: 'Skills',
    contact: 'Contact',
    switchToPortuguese: 'Mudar para Português',
    darkMode: 'Dark mode',
    lightMode: 'Light mode',

    // Hero section
    designerDeveloper: 'Designer & Developer',
    creatingExperiences: 'Creating extraordinary digital experiences',
    heroDescription: 'Combining minimalist design with cutting-edge technology to create elegant, functional, and memorable digital solutions.',
    viewProjects: 'View projects',
    getInTouch: 'Get in touch',
    scrollToExplore: 'Scroll to explore',

    // Projects section
    portfolio: 'Portfolio',
    featuredProjects: 'Featured Projects',
    projectsDescription: 'A selection of my best work, demonstrating my approach to solving complex problems through design and development.',
    viewProject: 'View project',
    github: 'GitHub',

    // Projects data
    ecommerceRedesign: {
      title: "E-commerce Redesign",
      description: "A modern and intuitive shopping experience focused on performance and usability. Implemented with React and Node.js."
    },
    taskApp: {
      title: "Task Management App",
      description: "Responsive web application for task management with a minimalist interface and advanced features."
    },
    analyticsApp: {
      title: "Analytics Dashboard",
      description: "Interactive dashboard for digital marketing data visualization and key metrics analysis."
    },
    fitnessApp: {
      title: "Fitness Mobile App",
      description: "Mobile application for workout and nutrition tracking, with cloud synchronization and progress analysis."
    },

    // About section
    aboutMe: 'About me',
    passionateDevDesigner: 'Passionate designer and developer',
    aboutIntro: 'Hello! I am a front-end developer and interface designer, with over 5 years of experience creating elegant and functional digital experiences.',
    aboutDescription1: 'My focus is on creating digital products that are not only aesthetically pleasing but also intuitive and accessible. I believe that good design is one that goes unnoticed while fulfilling its purpose.',
    aboutDescription2: 'When I\'m not coding or designing interfaces, I\'m exploring new technologies, reading about design, or walking outdoors to renew creativity.',
    downloadCV: 'Download CV',
    myJourney: 'My journey',

    // Timeline
    leadDesigner: {
      title: "Lead UX/UI Designer",
      description: "Leading product design projects and collaborating with multidisciplinary teams to create exceptional user experiences."
    },
    seniorDev: {
      title: "Senior Front-end Developer",
      description: "Development of responsive and high-performance web applications using modern technologies such as React, TypeScript, and TailwindCSS."
    },
    bachelorCS: {
      title: "Bachelor in Computer Science",
      description: "Academic training focused on programming, algorithms, data structures, and software development."
    },
    uiCertification: {
      title: "UI/UX Design Certification",
      description: "Specialization in interface design and user experience, focusing on user-centered methodologies."
    },

    // Skills section
    skillsTitle: 'Skills',
    myCompetencies: 'My competencies',
    skillsDescription: 'Throughout my career, I\'ve developed a diverse set of skills that allow me to create complete and efficient digital solutions.',
    frontendDev: 'Frontend Development',
    backendDev: 'Backend Development',
    designTools: 'Design & Tools',
    technicalSkills: 'Technical skills',
    softSkills: 'Soft skills',
    communication: 'Communication',
    teamwork: 'Teamwork',
    problemSolving: 'Problem solving',
    timeManagement: 'Time management',

    // Contact section
    contactTitle: 'Contact',
    letsChat: 'Let\'s chat',
    contactDescription: 'Interested in working together? Fill out the form below or get in touch through one of the available channels.',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    yourName: 'Your name',
    yourEmail: 'your@email.com',
    howCanIHelp: 'How can I help?',
    projectDescription: 'Describe your project or question...',
    sending: 'Sending...',
    sendMessage: 'Send message',
    messageSent: 'Message sent!',
    thankYou: 'Thank you for reaching out. I will reply as soon as possible.',
    phone: 'Phone',
    location: 'Location',

    // Footer
    quickLinks: 'Quick Links',
    copyright: '© {year} Portfolio. All rights reserved.',

    // Not Found Page
    error404: 'Error 404',
    pageNotFound: 'Page not found',
    pageNotFoundDesc: 'The page you are trying to access does not exist or has been moved.',
    backToHome: 'Back to home'
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
    // Handle nested keys (using dot notation like 'projects.title')
    if (key.includes('.')) {
      const parts = key.split('.');
      const mainKey = parts[0] as keyof typeof translations[typeof language];
      const nestedKey = parts[1];
      
      const mainObject = translations[language][mainKey];
      if (mainObject && typeof mainObject === 'object' && nestedKey in mainObject) {
        return (mainObject as any)[nestedKey];
      }
      return key; // Fallback to key if not found
    }
    
    // Handle string formatting (replace {year} with current year for copyright)
    if (key === 'copyright') {
      const currentYear = new Date().getFullYear();
      return (translations[language][key] as string).replace('{year}', currentYear.toString());
    }
    
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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
