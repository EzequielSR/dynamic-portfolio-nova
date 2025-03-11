
import React, { useEffect, useState } from 'react';
import FadeIn from '../animations/FadeIn';
import ProjectCard from '../ui/ProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github } from 'lucide-react';

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
}

export default function Projects() {
  const { t } = useLanguage();
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/EzequielSR/repos');
        const data = await response.json();

        // Filter to show only repositories with descriptions and sort by updated date
        const filteredRepos = data
          .filter((repo: GithubRepo) => repo.description)
          .slice(0, 4);

        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

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

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="h-80 rounded-lg bg-card/40 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {repos.map((repo, index) => (
              <FadeIn key={repo.id} direction="up" delay={300 + index * 100}>
                <ProjectCard
                  title={repo.name}
                  description={repo.description || ""}
                  image={`https://opengraph.githubassets.com/1/EzequielSR/${repo.name}`}
                  tags={repo.topics.length > 0 ? repo.topics : ["GitHub"]}
                  liveUrl={repo.homepage || ""}
                  githubUrl={repo.html_url}
                />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
