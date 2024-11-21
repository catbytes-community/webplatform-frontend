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

export interface Project {
    title: string,
    status: string,
    duration: string,
    period: string,
    manager: string,
    image: string,
    description: string,
    directions: Direction[],
}