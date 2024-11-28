export type Direction = 'frontend' | 'design' | 'test' | 'backend' | 'QA';
type mentorLinks = {
    telegram?: string,
    discord: string,
    email?: string
}

export interface User {
    id: number,
    name: string,
    lastName: string,
    photo: string
}

export interface Mentor extends User {
    direction: Direction[],
    experience: number,
    description: string,
    links: mentorLinks
}

export type TeamMember = {
    level: string,
    title: string,
    description: string,
    status: string
}

export type Document = {
    link: string,
    description: string
}

export interface Project {
    name: string,
    summary: string,
    description: string,
    startDate: string,
    endDate: string,
    duration: string,
    manager: string,
    status: string,
    image?: string,
    tags: string[],
    projectTeam: TeamMember[],
    documentation: Document[]
}
