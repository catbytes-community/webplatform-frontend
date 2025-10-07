import Navbar from "../../../shared/ui/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import style from "./MentorUserProfilePage.module.css";
import axios from "axios";
import EditPencilIcon from "../../../shared/ui/icons/EditPencilIcon";
import TickIcon from "../../../shared/ui/icons/TickIcon";
import CancelIcon from "../../../shared/ui/icons/CancelIcon";

type Mentor = {
  name: string;
  discord_nickname: string;
  // languages: string[];
  // TODO: tags are not returned from backend at the moment, TBD with backend team
  // tags: string[];
  about: string;
  user_id: number;
};

export default function MentorUserProfilePage() {
  const { id } = useParams();
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [isEditAbout, setIsEditAbout] = useState(false);
  const [newAbout, setNewAbout] = useState("");

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

  // TODO: updateAbout function
  const updateAbout = () => {
    console.log("update about...");
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
              {/* TODO: will be implemented later in GET mentors/{mentor_id} */}
              {/* <p className="text-sm sm:text-base font-montserrat mt-3 flex flex-row items-center gap-3 text-[#170103]">
                <span className="text-xs sm:text-sm w-[82px] text-[#4B5563]">
                  Languages:
                </span>
                {mentor?.languages.join(", ")}
              </p> */}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[66%] h-fit flex flex-col rounded-3xl p-8 mt-5 bg-[#fef7f8] shadow-[0_6px_10px_0_rgba(255,166,173,0.4)]">
          <h2 className="text-lg sm:text-2xl font-medium text-[#170103]">
            Experience
          </h2>
          {isEditAbout ? (
            <div>
              <textarea
                value={newAbout}
                onChange={(e) => setNewAbout(e.target.value)}
              />
              <TickIcon
                className="inline ml-2 cursor-pointer"
                size={16}
                color="green"
                onClick={() => updateAbout()}
              />
              <CancelIcon
                className="inline ml-2 cursor-pointer"
                color="red"
                onClick={() => setIsEditAbout(false)}
              />
            </div>
          ) : (
            <div>
              <p className="mt-4 sm:mt-5 font-montserrat text-base sm:text-lg text-[#170103]">
                {mentor?.about}
              </p>
              <EditPencilIcon
                className="inline ml-2 cursor-pointer"
                size={16}
                color="gray"
                onClick={() => {
                  setNewAbout(mentor.about);
                  setIsEditAbout(true);
                }}
              />
            </div>
          )}
        </div>

        {/* below to be finished when tags are ready and can be fetched from backend */}
        {/* <div
          className={`${style.cardShadow} ${style.tagsContainer} mt-5 w-full lg:w-[32%] h-fit justify-center lg:justify-start`}
        >
          {mentor?.tags?.map((tag, idx) => (
            <span
              key={idx}
              className={`${style.tags} text-sm sm:text-m font-montserrat font-medium text-[#170103]`}
            >
              #{tag}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
}
