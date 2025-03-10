
import React from 'react';
import FadeIn from '../animations/FadeIn';
import ProjectCard from '../ui/ProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: t('ecommerceRedesign.title'),
      description: t('ecommerceRedesign.description'),
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Node.js", "Tailwind CSS", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: t('taskApp.title'),
      description: t('taskApp.description'),
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["TypeScript", "Vue.js", "Firebase", "PWA"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: t('analyticsApp.title'),
      description: t('analyticsApp.description'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "D3.js", "REST API", "Material UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: t('fitnessApp.title'),
      description: t('fitnessApp.description'),
      image: "https://images.unsplash.com/photo-1603575448360-153f093fd0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React Native", "Redux", "GraphQL", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
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
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight">
            {t('featuredProjects')}
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={200}>
          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl">
            {t('projectsDescription')}
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={300 + index * 100}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
