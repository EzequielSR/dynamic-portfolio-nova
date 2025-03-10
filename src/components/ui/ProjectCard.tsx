
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import CustomButton from './CustomButton';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  className
}: ProjectCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border/50",
        "transition-all duration-300 hover:shadow-lg hover:shadow-primary/10",
        "flex flex-col bg-card/60 backdrop-blur-sm",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <div 
          className={cn(
            "absolute inset-0 bg-muted/20 animate-pulse",
            isImageLoaded ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          src={image}
          alt={title}
          className={cn(
            "object-cover w-full h-full transition-all duration-500 ease-out-expo",
            "group-hover:scale-105",
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <CustomButton 
              href={liveUrl} 
              external
              variant="default"
              size="sm"
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
            >
              Ver projeto
            </CustomButton>
          )}
          
          {githubUrl && (
            <CustomButton 
              href={githubUrl} 
              external
              variant="outline"
              size="sm"
              icon={<Github className="w-4 h-4" />}
              iconPosition="left"
            >
              GitHub
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
}
