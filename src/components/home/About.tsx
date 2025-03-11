
import React from 'react';
import FadeIn from '../animations/FadeIn';
import CustomButton from '../ui/CustomButton';
import { ArrowRight, Award, Briefcase, Clock, GraduationCap, Github, Linkedin, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TimelineItem = ({ year, title, description, icon }: TimelineItemProps) => (
  <div className="flex mb-8 md:mb-12">
    <div className="flex flex-col items-center mr-6">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="w-px h-full bg-border/50 mt-4"></div>
    </div>
    <div className="pt-1">
      <span className="text-sm font-medium text-primary">{year}</span>
      <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-24 sm:py-32 bg-muted/30" id="about">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          <div>
            <FadeIn direction="up">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {t('aboutMe')}
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={100}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight flex items-center gap-3">
                {t('passionateDevDesigner')}
                <a href="https://github.com/EzequielSR" target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <Github className="h-8 w-8 text-primary hover:text-accent transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/ezequiel-de-souza-rodrigues-25b538227/" target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <Linkedin className="h-8 w-8 text-primary hover:text-accent transition-colors" />
                </a>
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Ezequiel de Souza Rodrigues - Desenvolvedor Front-End | QA| DevOps
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={300}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Sou um desenvolvedor apaixonado com experiência em  HTML/CSS, JavaScript, React e Typescript.
                Atualmente trabalho na DBServer como Desenvolvedor I,
                onde desenvolvo soluções para empresas parceiras  com foco em tecnologias de ponta e testes de seguranca.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={400}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Além da minha experiência profissional, tenho formação acadêmica em Análise e Desenvolvimento de Sistemas pela 
                Universidade Anhanguera, onde desenvolvi habilidades analíticas e de resolução 
                de problemas que complementam minhas capacidades técnicas.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={500}>
              <div className="flex gap-4">
                <CustomButton 
                  href="https://github.com/EzequielSR" 
                  external
                  variant="outline"
                  icon={<Github className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Ver GitHub
                </CustomButton>
                <CustomButton 
                  href="https://www.linkedin.com/in/ezequiel-de-souza-rodrigues-25b538227/" 
                  external
                  variant="outline"
                  icon={<Linkedin className="w-4 h-4" />}
                  iconPosition="left"
                >
                  LinkedIn
                </CustomButton >
                <CustomButton 
                  href="https://www.linkedin.com/in/ezequiel-de-souza-rodrigues-25b538227/" 
                  external
                  
                  icon={< Download className="w-4 h-4" />}
                  iconPosition="left"
                >
                Download CV</CustomButton >
              </div>
            </FadeIn>
          </div>
          
          <div>
            <FadeIn direction="up" delay={200}>
              <h3 className="font-display font-bold text-2xl mb-8">{t('myJourney')}</h3>
            </FadeIn>
            
            <div className="ml-4">
              <FadeIn direction="up" delay={300}>
                <TimelineItem
                  year="2024 - Presente"
                  title="Desenvolvedor I"
                  description="Desenvolvimento de soluções governamentais utilizando Python, Django e tecnologias relacionadas, com foco em segurança e alta disponibilidade."
                  icon={<Briefcase className="w-5 h-5" />}
                />
              </FadeIn>
              
              <FadeIn direction="up" delay={400}>
                <TimelineItem
                  year="2021 - 2023"
                  title="Freelancer Front-End"
                  description="Desenvolvimento de aplicações backend com Python, Django e PostgreSQL, implementando APIs RESTful e soluções escaláveis."
                  icon={<Clock className="w-5 h-5" />}
                />
              </FadeIn>
              
              <FadeIn direction="up" delay={500}>
                <TimelineItem
                  year="2017 - 2023"
                  title="Análise e Desenvolvimento de Sistemas - ANHANGUERA"
                  description="Formação em Engenharia de Produção pela Universidade Federal do Rio Grande, com foco em otimização de processos e análise de dados."
                  icon={<GraduationCap className="w-5 h-5" />}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
