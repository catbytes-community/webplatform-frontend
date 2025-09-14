export type Direction = "frontend" | "design" | "test" | "backend" | "QA";
type mentorLinks = {
  telegram?: string;
  discord: string;
  email?: string;
};

export interface User {
  id: number;
  name: string;
  lastName: string;
  photo: string;
}
export interface Mentor extends User {
  direction: Direction[];
  experience: number;
  description: string;
  links: mentorLinks;
}

export type ProjectRole = {
  level: string;
  title: string;
  description: string;
  status: "Open" | "Closed" | "Applied";
};

export type Documentation = {
  link: string;
  description: string;
};

export interface Project {
  id?: number;
  name: string;
  summary: string;
  description: string;
  startDate: string;
  endDate: string;
  duration: string;
  manager: string;
  status: string;
  image?: string;
  tags: string[];
  roles: ProjectRole[];
  documentation: Documentation[];
}

export interface Application {
  id: number;
  name: string;
  about: string;
  video_link: string;
  discord_nickname: string;
  created_at: string;
  email: string;
  status: string;
  comment: string;
  modified_by: string;
}

export interface MentorApplication {
  mentor_id: number;
  user_id: number;
  about: string;
  status: string;
  tags: string[];
  name: string; 
}