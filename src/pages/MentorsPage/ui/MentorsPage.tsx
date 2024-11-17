import s from './MentorsPage.module.css';
import { mentorsData } from '../api/dummyMentorsData';
import { MentorsList } from '../../../widgets/MentorsList';
import { FilterMentors } from '../../../features';
import { useEffect, useState } from 'react';
import { Mentor } from '../../../app/types/global';

export interface MentorsProps {
    mentors: Mentor[] | null
  }

export const MentorsPage = () => {
    const [mentors, setMentors] = useState<Mentor[] | null>(null);
    const [filteredMentors, setFilteredMentors] = useState<Mentor[] | null>(null);
    useEffect(() => {
        // API CALL 
        setMentors(mentorsData);
    }, []);

    return (
        <div className={s.mentorsContainer}>
            <h1 className="text-black text-xl my-10">Our Mentors</h1>
            <FilterMentors mentors={mentors} setFilteredMentors={setFilteredMentors} />
            <MentorsList mentors={filteredMentors ? filteredMentors : mentors} />
        </div>
    );
}