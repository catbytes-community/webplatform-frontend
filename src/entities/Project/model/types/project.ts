export interface Project {
    id: number;
    title: string;
    description: string;
    manager: number;
    status: number;
    duration: number;
    startDate: Date;
    endDate: Date;
    directions: string[];
}

export type ProjectSchema = {
    schema?: Project
}