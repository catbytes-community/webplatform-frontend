import s from './MentorsPage.module.css';

import { Card } from "../../../shared/ui";


export const MentorsPage = () => {
    return (
        <div className={s.mentorsContainer}>
            <h1 className={s.mentorsTitle}>Mentors</h1>
            <Card>
                <h1>Mentor1</h1>
            </Card>
        </div>
    );
}