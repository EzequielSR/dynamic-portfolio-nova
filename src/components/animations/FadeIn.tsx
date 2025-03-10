
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'in' | 'scale';

interface FadeInProps {
  children: React.ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  className?: string;
  fullWidth?: boolean;
  viewTriggerOffset?: number;
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  fullWidth = false,
  viewTriggerOffset = 0.1,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: viewTriggerOffset,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [viewTriggerOffset]);

  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return 'animate-fade-up';
      case 'down':
        return 'animate-fade-down';
      case 'left':
        return 'animate-fade-left';
      case 'right':
        return 'animate-fade-right';
      case 'scale':
        return 'animate-scale-in';
      default:
        return 'animate-fade-in';
    }
  };

  const getDelayClass = () => {
    switch (delay) {
      case 100:
        return 'animate-delay-100';
      case 200:
        return 'animate-delay-200';
      case 300:
        return 'animate-delay-300';
      case 400:
        return 'animate-delay-400';
      case 500:
        return 'animate-delay-500';
      case 600:
        return 'animate-delay-600';
      case 700:
        return 'animate-delay-700';
      case 800:
        return 'animate-delay-800';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && getAnimationClass(),
        isVisible && getDelayClass(),
        fullWidth ? 'w-full' : '',
        className
      )}
    >
      {children}
    </div>
  );
}
