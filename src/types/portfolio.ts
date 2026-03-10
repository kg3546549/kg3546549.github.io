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

export interface CareerEntry {
  company: string;
  position: string;
  duration: string;
  description: string;
  projects?: string[];
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
  techStack: TechCategory[];
  achievements: Achievement[];
  projects: Project[];
  thankYou: {
    message: string;
  };
}
