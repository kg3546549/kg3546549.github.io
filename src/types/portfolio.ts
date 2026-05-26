export interface Technology {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  badges?: string[];
}

export interface TechCategory {
  category: string;
  technologies: Technology[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  duration: string;
  github?: string;
  link?: string;
  image?: string;
  content?: string;
  highlights: string[];
  type: 'project' | 'toy' | 'research';
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
  youtubeLink?: string;
  githubLink?: string;
}

export interface Activity {
  title: string;
  organization: string;
  duration: string;
  description: string;
  type: 'Technical Committee' | 'Interpretation' | 'Volunteer' | 'Mentoring' | 'Other';
}

export interface LanguageCertification {
  language: string;
  exam: string;
  level: string;
  description?: string;
}

export interface CareerEntry {
  company: string;
  position: string;
  duration: string;
  description: string;
  projects?: string[];
}

export interface EducationEntry {
  school: string;
  major: string;
  duration: string;
  status: string;
}

export interface MilitaryEntry {
  organization: string;
  position: string;
  duration: string;
  description: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    email: string;
    github: string;
    phone: string;
    location: string;
    avatar: string;
  };
  about: {
    introduction: string;
    highlights: string[];
  };
  career: CareerEntry[];
  education?: EducationEntry[];
  military?: MilitaryEntry[];
  techStack: TechCategory[];
  achievements: Achievement[];
  languages?: LanguageCertification[];
  activities?: Activity[];
  projects: Project[];
  thankYou: {
    message: string;
  };
}
