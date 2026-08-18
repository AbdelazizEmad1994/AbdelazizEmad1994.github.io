export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  domain: string;
  domainColor: string;
  bullets: string[];
  techStack?: string[];
}

export interface WorkProcessStep {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  toolsUsed: string[];
  detailNote: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level?: string;
    tag?: string;
  }[];
}

export interface BpmnNode {
  id: string;
  title: string;
  type: 'start' | 'process' | 'decision' | 'end';
  actor: 'Patient / User' | 'Product Owner (Abdelaziz)' | 'Clinical / Medical Team' | 'Engineering Team';
  description: string;
  acceptanceCriteria?: string[];
}
