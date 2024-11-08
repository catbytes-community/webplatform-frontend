import s from './MentorsPage.module.css';
import { mentorsData } from '../api/dummyMentorsData';
import {  filterDirection } from '../lib/mentorsFilter';
import { MentorsList } from '../../../widgets/MentorsList';

export const MentorsPage = () => {
    console.log(filterDirection(mentorsData, ['test', 'frontend']));
    return (
        <div className={s.mentorsContainer}>
            <h2 className={s.mentorsTitle}>Mentors</h2>
            <MentorsList/>
        </div>
    );
}