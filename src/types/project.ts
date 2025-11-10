export interface Project {
  id: number;
  slug: string;
  title: string;
  pitch: string;
  role: string;
  stack: string[];
  features: string[];
  status: string;
  dates: { start: string; end: string };
  links: {
    demo: string;
    github: string;
    brief: string;
  };
  images: {
    cover: string;
    gallery: string[];
    logo: string;
    video?: string;
  };
  brief: {
    problem: string;
    goals: string[];
    users: string[];
    arch: string[];
    db?: string[];
    api?: string[];
    kpi: string[];
    limits: string[];
    notes: string[];
  };
  tags: string[];
}
