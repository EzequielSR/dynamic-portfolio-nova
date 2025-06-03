
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
    designerDeveloper: 'Desenvolvedor Full-Stack Java',
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
    passionateDevDesigner: 'Desenvolvedor apaixonado por criar',
    aboutIntro: 'Ezequiel de Souza Rodrigues - Desenvolvedor Full-Stack Java | Spring Boot | NodeJS | React',
    aboutDescription1: 'Sou 𝐃𝐞𝐬𝐞𝐧𝐯𝐨𝐥𝐯𝐞𝐝𝐨𝐫 𝐅𝐮𝐥𝐥-𝐒𝐭𝐚𝐜𝐤 com foco em 𝐉𝐚𝐯𝐚, 𝐒𝐩𝐫𝐢𝐧𝐠 𝐁𝐨𝐨𝐭, 𝐑𝐞𝐚𝐜𝐭, 𝐍𝐨𝐝𝐞.𝐣𝐬 e 𝐒𝐐𝐋. Tenho experiência sólida em projetos web, 𝐚𝐮𝐭𝐨𝐦𝐚𝐜̧𝐚̃𝐨 𝐝𝐞 𝐭𝐞𝐬𝐭𝐞𝐬 (𝐂𝐲𝐩𝐫𝐞𝐬𝐬, 𝐉𝐔𝐧𝐢𝐭, 𝐒𝐞𝐥𝐞𝐧𝐢𝐮𝐦, 𝐑𝐞𝐬𝐭𝐀𝐬𝐬𝐮𝐫𝐞𝐝) e integração de 𝐀𝐏𝐈𝐬. Ao longo de 𝟐 𝐚𝐧𝐨𝐬, trabalhei em sistemas que vão de 𝐂𝐑𝐔𝐃𝐬 a aplicações escaláveis e seguras.',
    aboutDescription2: ' Além da minha experiência profissional, estou em formação acadêmica em Análise e Desenvolvimento de Sistemas pela Universidade Anhanguera, onde desenvolvi habilidades analíticas e de resolução de problemas que complementam minhas capacidades técnicas.',
    downloadCV: 'Baixar CV',
    myJourney: 'Minha jornada',

    // Timeline
    freelancer: {
      year: "2022 - 2024",
      title: "Freelancer Front-End",
      description: "Atuei como freelancer por 2 anos, desenvolvendo landing pages e projetos pessoais. Durante esse período, trabalhei com tecnologias com HTML, CSS, JavaScript e frameworks modernos para criar interfaces responsivas e funcionais."
    },
    developer: {
      year: "2024 - Presente",
      title: "Desenvolvedor I - DBServer",
      description: "Desenvolvo sistemas e aplicativos, codifico e testo linguagens de programação, determino design de interface e critérios de navegação ergonômicos."
    },
    bachelorAS: {
      year: "2024 - Presente",
      title: "Análise e Desenvolvimento de Sistemas - ANHANGUERA",
      description: "Formação em desenvolvimento em Análise e Desenvolvimento de Sistemas pela Anhanguera, com foco em desenvolvimento de software e boas práticas de engenharia."
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
    smallAbout: 'Desenvolvedor com especialização em NodeJS, JQuery e NodeJS, focado em criar soluções governamentais seguras e de alta qualidade.',
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
    designerDeveloper: 'Full-Stack Developer Java',
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
    passionateDevDesigner: 'Passionate developer to develop',
    aboutIntro: 'Ezequiel de Souza Rodrigues - Full-Stack Java Developer| Java | SpringBoot | NodeJS | React',
    aboutDescription1: 'I am 𝐃𝐞𝐬𝐞𝐧𝐯𝐨𝐥𝐯𝐞𝐝𝐨𝐫 𝐅𝐮𝐥𝐥-𝐒𝐭𝐚𝐜𝐤 with a focus on 𝐉𝐚𝐯𝐚, 𝐒𝐩𝐫𝐢𝐧𝐠 𝐁𝐨𝐨𝐭, 𝐑𝐞𝐚𝐜𝐭, 𝐍𝐨𝐝𝐞.𝐣𝐬 and 𝐒𝐐𝐋. I have solid experience in web projects, 𝐚𝐮𝐭𝐨𝐦𝐚𝐜̧𝐚̃𝐨 𝐝𝐞 𝐭𝐞𝐬𝐭𝐞𝐬 (𝐂𝐲𝐩𝐫𝐞𝐬𝐬, 𝐉𝐔𝐧𝐢𝐭, 𝐒𝐞𝐥𝐞𝐧𝐢𝐮𝐦, 𝐑𝐞𝐬𝐭𝐀𝐬𝐬𝐮𝐫𝐞𝐝) and integration of 𝐀𝐏𝐈𝐬. Throughout 𝟐 𝐚𝐧𝐨𝐬, I have worked on systems ranging from 𝐂𝐑𝐔𝐃𝐬 to scalable and secure applications.',
    aboutDescription2: 'In addition to my professional experience, I am in academic training in Systems Analysis and Development at Anhanguera University, where I developed analytical and solving skills of problems that complement my technical capabilities.',
    downloadCV: 'Download CV',
    myJourney: 'My journey',

    // Timeline
    freelancer: {
      year: "2022 - 2024",
      title: "Freelancer Front-End",
      description: "I worked as a freelancer for 2 years, developing landing pages and personal projects. During this time, I worked with technologies such as HTML, CSS, JavaScript, and modern frameworks to create responsive and functional interfaces."
    },
    developer: {
      year: "2024 - Present",
      title: "Developer I - DBServer",
      description: "I develop systems and applications, code and test programming languages, determine interface design and ergonomic navigation criteria."
    },
    bachelorAS: {
      year: "2024 - Present",
      title: "Systems Analysis and Development - ANHANGUERA",
      description: "Training in Systems Analysis and Development by Anhanguera, with a focus on software development and good engineering practices."
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
    smallAbout: 'Developer with specialization in NodeJS, JQuery and NodeJS, focused on creating secure and high-quality government solutions.',
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

// Define type for nested objects
type NestedObject = {
  [key: string]: string | NestedObject;
};

// Updated TranslationKeys to support nested keys
type TranslationKeys = string;

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

  // Translation function that handles nested keys
  const t = (key: TranslationKeys): string => {
    // Handle nested keys (using dot notation like 'projects.title')
    if (key.includes('.')) {
      const parts = key.split('.');
      let result: any = translations[language];
      
      // Navigate through the nested object
      for (const part of parts) {
        if (result && typeof result === 'object' && part in result) {
          result = result[part];
        } else {
          return key; // Fallback to key if not found
        }
      }
      
      return result && typeof result === 'string' ? result : key;
    }
    
    // Handle string formatting (replace {year} with current year for copyright)
    if (key === 'copyright') {
      const currentYear = new Date().getFullYear();
      const text = translations[language][key];
      return typeof text === 'string' ? text.replace('{year}', currentYear.toString()) : key;
    }
    
    const text = translations[language][key as keyof typeof translations[typeof language]];
    return typeof text === 'string' ? text : key;
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
