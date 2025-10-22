import Navbar from "../../../shared/ui/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./MentorUserProfilePage.module.css";
import axios from "axios";

type Mentor = {
  name: string;
  discord_nickname: string;
  about: string;
  user_id: number;
  status: string;
  mentor_id: number;
};

export default function MentorUserProfilePage() {
  const { id } = useParams();
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const isToggled = mentor?.status === "active";

  useEffect(() => {
    const getMentor = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_DEVAPI}mentors/${id}`,
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        setMentor(response.data);
      } catch (err) {
        console.error("Get mentor error: ", err);
      }
    };

    getMentor();
  }, [id]);

  if (!mentor) {
    return <div>Loading...</div>;
  }

  const updateStatus = async (id: number) => {
    const newStatus = mentor?.status === "active" ? "inactive" : "active";
    try {
      await axios.patch(
        `${import.meta.env.VITE_DEVAPI}mentors/${id}`,
        { status: newStatus },
        { withCredentials: true }
      );
      setMentor({ ...mentor, status: newStatus });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-[1200px] px-5 sm:px-10 mx-auto">
      <Navbar />

      <h2 className="text-3xl sm:text-4xl font-semibold mt-10 text-[#170103]">
        Cat Bytes Mentor
      </h2>

      <div className="flex flex-row flex-wrap mt-7 justify-between">
        <div className="w-full flex flex-row flex-wrap md:flex-nowrap justify-between rounded-3xl p-8 bg-[#fef7f8] shadow-[0_6px_10px_0_rgba(255,166,173,0.4)]">
          <div className="flex flex-row gap-5 sm:gap-6 ">
            <div className="w-full flex flex-col h-fit">
              <p className="text-2xl sm:text-3xl font-semibold text-[#170103]">
                {mentor?.name}
              </p>

              <p className="text-sm sm:text-base font-montserrat mt-4 sm:mt-5 flex flex-row items-center gap-3 text-[#170103]">
                <span className="text-xs sm:text-sm w-[82px] text-[#4B5563]">
                  Discord:
                </span>
                {mentor?.discord_nickname}
              </p>
              <Link
                to={`/user_profile/${mentor.user_id}`}
                className="underline text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {mentor?.name}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              className={`${style.toggleBtn} ${
                isToggled ? style.isToggled : ""
              }`}
              onClick={() => updateStatus(mentor.mentor_id)}
            >
              <div className={`${style.thumb}`}></div>
            </button>
            <p className="text-sm sm:text-base font-montserrat">
              {mentor?.status === "active" ? "Active 🟢 " : "Inactive ⚪"}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[66%] h-fit flex flex-col rounded-3xl p-8 mt-5 bg-[#fef7f8] shadow-[0_6px_10px_0_rgba(255,166,173,0.4)]">
          <h2 className="text-lg sm:text-2xl font-medium text-[#170103]">
            Experience
          </h2>
          <p className="mt-4 sm:mt-5 font-montserrat text-base sm:text-lg text-[#170103]">
            {mentor?.about}
          </p>
        </div>
      </div>
    </div>
  );
}
