import s from "./MentorsPage.module.css";
import { MentorsList } from "../../../widgets/MentorsList";
// import { FilterMentors } from "../../../features";
import { useEffect, useState } from "react";
import { Mentor } from "../../../app/types/global";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import axios from "axios";
export interface MentorsProps {
  mentors: Mentor[] | null;
}

export const MentorsPage = () => {
  const [mentors, setMentors] = useState<Mentor[] | null>(null);
  //   const [filteredMentors, setFilteredMentors] = useState<Mentor[] | null>(null);

  useEffect(() => {
    const getMentors = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_DEVAPI}mentors`,
        {
          withCredentials: true,
        }
      );
      return response.data.mentors;
    };

    getMentors()
      .then((mentors) => {
        setMentors(
          mentors.filter(
            (m: any) => m.status === "active" || m.status === "inactive"
          )
        );
      })
      .catch((err) => console.log("Err getting mentors", err));
  }, []);

  return (
    <div className={s.mentorsContainer}>
      <Navbar />
      <h1 className="text-black font-montserrat text-xl my-10">Our Mentors</h1>
      {/* <FilterMentors
        mentors={mentors}
        setFilteredMentors={setFilteredMentors}
      /> */}
      {mentors && mentors.length && <MentorsList mentors={mentors} />}
    </div>
  );
};
