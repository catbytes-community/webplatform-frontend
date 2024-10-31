import s from './MentorsPage.module.css';

import { Card } from "../../../shared/ui";

const mentorsData = [{
    id: 1,
    name: "Marcy",
    lastName: "Kim",
    direction: ['frontend', 'design'],
    experience: 4
}, {
    id: 2,
    name: "Minnie",
    lastName: "Maus",
    direction: ['backend'],
    experience: 1
}, {
    id: 3,
    name: "Hermione",
    lastName: "Granger",
    direction: ['test'],
    experience: 6
}];

// const directionsCard: React.CSSProperties = {
//     padding: "8px 4px",
//     fontSize: "12px"
// }

export const MentorsPage = () => {
    return (
        <div className={s.mentorsContainer}>
            <h2 className={s.mentorsTitle}>Mentors</h2>
            {mentorsData?.map(mentor => (
                <Card key={mentor?.id}>
                    <p>Name: {mentor?.name}</p>
                    <p>Last Name: {mentor?.lastName}</p>
                    <div className={s.experienceContainer}>
                        {mentor?.direction?.map((direction, ind) => (
                            <Card  key={ind}>
                                {direction}
                            </Card>
                        ))}
                    </div>
                    <p>Experience: {mentor?.experience} years</p>
                </Card>
            ))}
            
        </div>
    );
}