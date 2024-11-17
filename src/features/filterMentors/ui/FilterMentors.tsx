import { Card } from "../../../shared/ui"
import s from './FilterMentors.module.css'
import { filterDirection, sortByExperience } from "../lib/mentorsFilter"
import { useRef, useState } from "react"
import { Mentor } from "../../../app/types/global"

interface MentorsProps {
    mentors: Mentor[] | null;
    setFilteredMentors: React.Dispatch<React.SetStateAction<Mentor[] | null>>;
}

const directionsDummy = ['frontend', 'backend', 'test'];

export const FilterMentors = ({mentors, setFilteredMentors}: MentorsProps) => {
    const [directions, setDirections] = useState<string[]>(directionsDummy);
    const filterDropdownRef = useRef<HTMLDivElement | null>(null);

    function toggleDropdown() {
        if (filterDropdownRef.current) {
            if(filterDropdownRef.current.style.display === "block") {
                filterDropdownRef.current.style.display = "none";
                return;
            }
            filterDropdownRef.current.style.display = "block";
        }
    }

    function handleFilter(e: React.FormEvent<HTMLInputElement>) {
        let newDirections;
        if(!e.currentTarget.checked) {
            e.currentTarget.checked = false;
            newDirections = directions.filter(el => el !== e.currentTarget.value);
            e.currentTarget.checked = false;
        }  else {
            newDirections = [...directions, e.currentTarget.value];
        }
        setDirections(newDirections);
        const filteredMentors = filterDirection(mentors, newDirections);
        if(filteredMentors) {
            setFilteredMentors(filteredMentors);
        }
    }

    function handleSort() {
        if(mentors) {
            const sortedMentors = sortByExperience(mentors);
            if (sortedMentors) {
                setFilteredMentors(sortedMentors)
            }
        }
    }

    return (
        <div className="flex gap-2 mb-4 relative" >
            <button onClick={toggleDropdown}>
                <Card className={s.filterCardStyle}>
                    Filter
                </Card>
            </button>
            <div className={s.filterDropdown} ref={filterDropdownRef}>
                {directionsDummy?.map((direction) => (
                    <div className="flex gap-2" key={direction}>
                        <input
                            type="checkbox"
                            id={direction}
                            name={direction}
                            value={direction}
                            checked={directions.includes(direction)}
                            onChange={handleFilter} 
                        />
                        <label htmlFor={direction}>{direction}</label>
                    </div>
                ))}
            </div>
            <button onClick={handleSort}>
                <Card className={s.filterCardStyle}>
                    Sort
                </Card>
            </button>
        </div>
    )
}
