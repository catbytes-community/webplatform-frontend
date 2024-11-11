import { Mentor } from "../../../app/types/global";

export function sortByExperience(mentors: Mentor[] | null){
    return mentors?.sort((a,b) => a.experience - b.experience);
}

export function filterDirection(mentors: Mentor[] | null, filter: string[]) {
    return mentors?.filter((mentor) => {
        return mentor.direction.filter(direction => filter.includes(direction)).length > 0;
    });
}