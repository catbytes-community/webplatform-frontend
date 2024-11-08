export type Direction = 'frontend' | 'design' | 'test' | 'backend' | 'QA';

export interface User {
    id: number,
    name: string,
    lastName: string,
}

export interface Mentor extends User {
    direction: Direction[],
    experience: number
}