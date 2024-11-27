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

export interface Option {
    value: string,
    label: string
}