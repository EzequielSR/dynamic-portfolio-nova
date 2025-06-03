
import React from 'react';
import FadeIn from '../animations/FadeIn';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay?: number;
}

const SkillCategory = ({ title, skills, delay = 0 }: SkillCategoryProps) => (
  <FadeIn direction="up" delay={delay} className="p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-lg">
    <h3 className="font-display font-bold text-xl mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill}
          className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  </FadeIn>
);

interface SkillProgressProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillProgress = ({ name, percentage, delay = 0 }: SkillProgressProps) => {
  const [loaded, setLoaded] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <FadeIn direction="up" delay={delay}>
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{name}</span>
          <span className="text-primary">{percentage}%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out-expo"
            style={{ width: loaded ? `${percentage}%` : '0%' }}
          />
        </div>
      </div>
    </FadeIn>
  );
};

export default function Skills() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-24 sm:py-32" id="skills">
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 75%, rgba(38, 57, 77, 0.2) 0%, rgba(255, 255, 255, 0) 25%)',
        }}
      />
      
      <div className="section-container">
        <FadeIn direction="up">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            {t('skillsTitle')}
          </span>
        </FadeIn>
        
        <FadeIn direction="up" delay={100}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight">
            {t('myCompetencies')}
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={200}>
          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl">
            {t('skillsDescription')}
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <SkillCategory
            title={t('frontendDev')}
            skills={["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "JQuery"]}
            delay={300}
          />
          
          <SkillCategory
            title={t('backendDev')}
            skills={["Java", "Spring Boot","Node.js","REST API", "Express", "SQL","PostgreSQL"]}
            delay={400}
          />
          
          <SkillCategory
            title={t('designTools')}
            skills={["Figma", "UI/UX", "Git","Vite", "Tailwind CSS", "Bootstrap"]}
            delay={500}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <FadeIn direction="up" delay={200}>
              <h3 className="font-display font-bold text-2xl mb-6">{t('technicalSkills')}</h3>
            </FadeIn>
            
            <SkillProgress name={t('frontendDev')} percentage={90} delay={300} />
            <SkillProgress name="UI/UX Design" percentage={90} delay={400} />
            <SkillProgress name={t('backendDev')} percentage={85} delay={500} />
            <SkillProgress name="Mobile Development" percentage={15} delay={600} />
          </div>
          
          <div>
            <FadeIn direction="up" delay={200}>
              <h3 className="font-display font-bold text-2xl mb-6">{t('softSkills')}</h3>
            </FadeIn>
            
            <SkillProgress name={t('communication')} percentage={85} delay={300} />
            <SkillProgress name={t('teamwork')} percentage={90} delay={400} />
            <SkillProgress name={t('problemSolving')} percentage={85} delay={500} />
            <SkillProgress name={t('timeManagement')} percentage={90} delay={600} />
          </div>
        </div>
      </div>
    </section>
  );
}
