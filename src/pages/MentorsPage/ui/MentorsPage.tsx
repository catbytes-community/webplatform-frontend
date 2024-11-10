import s from './MentorsPage.module.css';
// import { mentorsData } from '../api/dummyMentorsData';
// import {  filterDirection } from '../lib/mentorsFilter';
import { MentorsList } from '../../../widgets/MentorsList';
import { FilterMentors } from '../../../features';

export const MentorsPage = () => {
    return (
        <div className={s.mentorsContainer}>
            <h1 className={s.mentorsTitle}>Our Mentors</h1>
            <FilterMentors/>
            <MentorsList/>
        </div>
    );
}