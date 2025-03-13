
import React, { useState } from 'react';
import { sendEmail } from '@/services/emailService';
import FadeIn from '../animations/FadeIn';
import CustomButton from '../ui/CustomButton';
import { AtSign, MapPin, Phone, SendHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "@/hooks/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  delay?: number;
}

const ContactInfo = ({ icon, title, value, href, delay = 0 }: ContactInfoProps) => (
  <FadeIn direction="up" delay={delay}>
    <a 
      href={href}
      className={cn(
        "flex p-4 bg-card/40 backdrop-blur-sm border border-border/50 rounded-lg",
        "transition-all hover:shadow-md hover:border-primary/50",
        href ? "cursor-pointer" : "cursor-default"
      )}
      target={href?.startsWith('http') ? "_blank" : undefined}
      rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      <div className="mr-4 flex-shrink-0">
        <div className="p-3 bg-primary/10 text-primary rounded-md">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </a>
  </FadeIn>
);

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: t('error'),
        description: t('pleaseCompleteAllFields'),
        variant: "destructive",
      });
      return;
    }
    
    // Validate email format
    if (!validateEmail(formData.email)) {
      toast({
        title: t('error'),
        description: "Por favor, informe um e-mail válido.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await sendEmail(formData);
      console.log("Email sent successfully:", response);
      
      toast({
        title: t('messageSent'),
        description: t('thankYou'),
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error("Error in contact component:", error);
      
      // More specific error message based on the error
      let errorMessage = t('errorSendingMessage');
      if (error && typeof error === 'object' && 'text' in error) {
        errorMessage = `${t('errorSendingMessage')}: ${(error as any).text}`;
      }
      
      toast({
        title: t('error'),
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="relative py-24 sm:py-32 bg-muted/30" id="contact">
      <div className="section-container">
        <FadeIn direction="up">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            {t('contactTitle')}
          </span>
        </FadeIn>
        
        <FadeIn direction="up" delay={100}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight">
            {t('letsChat')}
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={200}>
          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl">
            {t('contactDescription')}
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FadeIn direction="up" delay={300}>
              <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-card/20 backdrop-blur-sm border border-border/50 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('name')}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 bg-background border border-input rounded-md",
                        "focus:outline-none focus:ring-2 focus:ring-primary/50",
                        "placeholder:text-muted-foreground/60 transition-all"
                      )}
                      placeholder={t('yourName')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('email')}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 bg-background border border-input rounded-md",
                        "focus:outline-none focus:ring-2 focus:ring-primary/50",
                        "placeholder:text-muted-foreground/60 transition-all"
                      )}
                      placeholder={t('yourEmail')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t('subject')}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 bg-background border border-input rounded-md",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "placeholder:text-muted-foreground/60 transition-all"
                    )}
                    placeholder={t('howCanIHelp')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 bg-background border border-input rounded-md",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "placeholder:text-muted-foreground/60 transition-all",
                      "resize-none"
                    )}
                    placeholder={t('projectDescription')}
                  />
                </div>
                
                <div>
                  <CustomButton 
                    type="submit" 
                    disabled={isSubmitting}
                    icon={<SendHorizontal className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? t('sending') : t('sendMessage')}
                  </CustomButton>
                </div>
              </form>
            </FadeIn>
          </div>
          
          <div className="space-y-4">
            <ContactInfo
              icon={<AtSign className="w-5 h-5" />}
              title={t('email')}
              value="ezequieldesr@gmail.com"
              href="mailto:ezequieldesr@gmail.com"
              delay={400}
            />
            
            <ContactInfo
              icon={<Phone className="w-5 h-5" />}
              title={t('phone')}
              value="+55 (53) 98128-4988"
              href="tel:+5553981284988"
              delay={500}
            />
            
            <ContactInfo
              icon={<MapPin className="w-5 h-5" />}
              title={t('location')}
              value="Rio Grande, Brasil"
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
