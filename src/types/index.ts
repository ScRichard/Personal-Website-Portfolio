export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
