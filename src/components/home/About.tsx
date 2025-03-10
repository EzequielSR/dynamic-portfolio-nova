
import React from 'react';
import FadeIn from '../animations/FadeIn';
import CustomButton from '../ui/CustomButton';
import { ArrowRight, Award, Briefcase, Clock, GraduationCap } from 'lucide-react';
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
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight">
                {t('passionateDevDesigner')}
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t('aboutIntro')}
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={300}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t('aboutDescription1')}
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={400}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t('aboutDescription2')}
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={500}>
              <CustomButton 
                href="/cv.pdf" 
                external
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                {t('downloadCV')}
              </CustomButton>
            </FadeIn>
          </div>
          
          <div>
            <FadeIn direction="up" delay={200}>
              <h3 className="font-display font-bold text-2xl mb-8">{t('myJourney')}</h3>
            </FadeIn>
            
            <div className="ml-4">
              <FadeIn direction="up" delay={300}>
                <TimelineItem
                  year="2021 - Presente"
                  title={t('leadDesigner.title')}
                  description={t('leadDesigner.description')}
                  icon={<Briefcase className="w-5 h-5" />}
                />
              </FadeIn>
              
              <FadeIn direction="up" delay={400}>
                <TimelineItem
                  year="2018 - 2021"
                  title={t('seniorDev.title')}
                  description={t('seniorDev.description')}
                  icon={<Clock className="w-5 h-5" />}
                />
              </FadeIn>
              
              <FadeIn direction="up" delay={500}>
                <TimelineItem
                  year="2016 - 2018"
                  title={t('bachelorCS.title')}
                  description={t('bachelorCS.description')}
                  icon={<GraduationCap className="w-5 h-5" />}
                />
              </FadeIn>
              
              <FadeIn direction="up" delay={600}>
                <TimelineItem
                  year="2015"
                  title={t('uiCertification.title')}
                  description={t('uiCertification.description')}
                  icon={<Award className="w-5 h-5" />}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
