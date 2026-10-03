export type ProjectType = 
  | 'Custom Software'
  | 'Website'
  | 'SaaS Product'
  | 'AI / Automation'
  | 'Cloud Infrastructure'
  | 'Mobile Application'
  | 'Enterprise System'
  | 'Other';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  deliverables: string[];
  techFocus: string[];
  iconName: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'ai';
  tagline: string;
  useCase: string;
  featured?: boolean;
}

export interface ArchitectureLayer {
  id: string;
  step: string;
  name: string;
  role: string;
  specs: string[];
  protocols: string[];
  icon: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  solutions: string[];
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  timeframe: string;
}

export interface CaseStudyItem {
  id: string;
  badge: string;
  title: string;
  clientType: string;
  challenge: string;
  solution: string;
  modules: string[];
  architecture: string[];
  statusNote: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  date: string;
  readTime: string;
  content: string[];
  keyTakeaways: string[];
}

export interface LabModule {
  id: string;
  code: string;
  name: string;
  description: string;
  status: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}
