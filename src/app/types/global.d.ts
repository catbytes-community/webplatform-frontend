export type Direction = 'frontend' | 'design' | 'test' | 'backend' | 'QA';

type mentorLinks = {
  telegram?: string;
  discord: string;
  email?: string;
};

export interface Role {
  role_id: number;
  role_name: string;
}
export interface User {
  id: number;
  mentor_id: number;
  is_mentor_active: boolean;
  name: string;
  about: string;
  email: string;
  discord_nickname: string;
  languages: string[];
  img: string | null;
  roles: Role[];
  created_at: string;
}

export type UserRole = 'admin' | 'member' | 'mentor';

export interface UserRoleRecord {
  role_name: UserRole;
  role_id: number;
}

export interface ApiUser {
  id: number;
  name: string;
  email: string;
  about: string;
  created_at: string;
  languages: string[] | null;
  roles: UserRoleRecord[];
  mentor_id: string | null;
  is_mentor_active: boolean;
}

export interface Mentor extends User {
  mentor_id: number;
  about: string;
  status: string;
  direction: Direction[];
  experience: number;
  description: string;
  links: mentorLinks;
}

export type ProjectRole = {
  level: string;
  title: string;
  description: string;
  status: 'Open' | 'Closed' | 'Applied';
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
  video_filename?: string | null;
  video_file?: string | null;
}

export interface MentorApplication {
  mentor_id: number;
  user_id: number;
  about: string;
  status: string;
  tags: string[];
  name: string;
}
