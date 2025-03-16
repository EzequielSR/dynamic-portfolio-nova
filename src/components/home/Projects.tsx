
import React from 'react';
import FadeIn from '../animations/FadeIn';
import ProjectCard from '../ui/ProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Interface para os projetos específicos
interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  imageUrl: string;
}

export default function Projects() {
  const { t, language } = useLanguage();
  
  // Lista de projetos específicos
  const specificProjects: Project[] = [
    {
      id: 1,
      name: "POO_Naruto_DB",
      description: language === 'pt-BR' 
        ? "Banco de dados de personagens de Naruto usando Programação Orientada a Objetos em Java" 
        : "Naruto character database using Object-Oriented Programming in Java",
      html_url: "https://github.com/EzequielSR/POO_Naruto_DB",
      homepage: "",
      topics: ["Java", "OOP", "Database"],
      imageUrl: "https://opengraph.githubassets.com/1/EzequielSR/POO_Naruto_DB"
    },
    {
      id: 2,
      name: "O_Desafio_Simon",
      description: language === 'pt-BR' 
        ? "Jogo de memória inspirado no clássico Simon, desenvolvido com JavaScript" 
        : "Memory game inspired by the classic Simon, developed with JavaScript",
      html_url: "https://github.com/EzequielSR/O_Desafio_Simon",
      homepage: "",
      topics: ["JavaScript", "HTML", "CSS", "Game"],
      imageUrl: "https://opengraph.githubassets.com/1/EzequielSR/O_Desafio_Simon"
    },
    {
      id: 3,
      name: "DiceeChallenge",
      description: language === 'pt-BR' 
        ? "Jogo de dados virtual desenvolvido com JavaScript para praticar manipulação do DOM" 
        : "Virtual dice game developed with JavaScript to practice DOM manipulation",
      html_url: "https://github.com/EzequielSR/DiceeChallenge",
      homepage: "",
      topics: ["JavaScript", "DOM", "Game"],
      imageUrl: "https://opengraph.githubassets.com/1/EzequielSR/DiceeChallenge"
    },
    {
      id: 4,
      name: "ecommerce-product-page-main",
      description: language === 'pt-BR' 
        ? "Página de produto de e-commerce responsiva, desenvolvida com HTML, CSS e JavaScript" 
        : "Responsive e-commerce product page, developed with HTML, CSS and JavaScript",
      html_url: "https://github.com/EzequielSR/ecommerce-product-page-main",
      homepage: "",
      topics: ["HTML", "CSS", "JavaScript", "E-commerce"],
      imageUrl: "https://opengraph.githubassets.com/1/EzequielSR/ecommerce-product-page-main"
    }
  ];

  return (
    <section className="relative py-24 sm:py-32" id="projects">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 75%, rgba(38, 57, 77, 0.2) 0%, rgba(255, 255, 255, 0) 25%)',
        }}
      />

      <div className="section-container">
        <FadeIn direction="up">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            {t('portfolio')}
          </span>
        </FadeIn>

        <FadeIn direction="up" delay={100}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight flex items-center gap-3">
            {t('featuredProjects')}
            <a href="https://github.com/EzequielSR" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Github className="h-8 w-8 text-primary hover:text-accent transition-colors" />
            </a>
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl">
            {t('projectsDescription')}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {specificProjects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={300 + index * 100}>
              <ProjectCard
                title={project.name}
                description={project.description}
                image={project.imageUrl}
                tags={project.topics}
                liveUrl={project.homepage || ""}
                githubUrl={project.html_url}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
