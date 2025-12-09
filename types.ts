export type Language = 'fa' | 'en';

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  current: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface WorkflowItem {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface SectionContent {
  nav: {
    home: string;
    experience: string;
    services: string;
    contact: string;
    brand: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: {
    items: StatItem[];
  };
  services: {
    title: string;
    items: ServiceItem[];
  };
  workflow: {
    title: string;
    items: WorkflowItem[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  skills: {
    title: string;
    items: Skill[];
    more: string;
  };
  contact: {
    title: string;
    description: string;
    copyright: string;
  };
}