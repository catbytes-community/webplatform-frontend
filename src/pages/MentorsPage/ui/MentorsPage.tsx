import s from './MentorsPage.module.css';
// import { mentorsData } from '../api/dummyMentorsData';
// import {  filterDirection } from '../lib/mentorsFilter';
import { MentorsList } from '../../../widgets/MentorsList';
import { FilterMentors } from '../../../features';

export const MentorsPage = () => {
    return (
        <div className={s.mentorsContainer}>
            <h2 className={s.mentorsTitle}>Mentors</h2>
            <FilterMentors/>
            <MentorsList/>
        </div>
    );
}