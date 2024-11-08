import { Mentor } from "../../../app/types/global";

export function sortByExperience(mentors: Mentor[]): Mentor[] {
    return mentors.sort((a,b) => a.experience - b.experience);
}

export function filterDirection(mentors: Mentor[], filter: string[]): Mentor[] {
    return mentors.filter((mentor) => {
        return mentor.direction.filter(direction => filter.includes(direction)).length > 0;
    });
}