import Navbar from "../../../shared/ui/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./MentorUserProfilePage.module.css";
import axios from "axios";
import EditPencilIcon from "../../../shared/ui/icons/EditPencilIcon";
import TickIcon from "../../../shared/ui/icons/TickIcon";
import CancelIcon from "../../../shared/ui/icons/CancelIcon";

type Mentor = {
  name: string;
  discord_nickname: string;
  about: string;
  user_id: number;
  status: string;
  mentor_id: number;
  contact: string;
  languages: string[];
};

export default function MentorUserProfilePage() {
  const { id } = useParams();
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const isToggled = mentor?.status === "active";
  const [isEditContact, setIsEditContact] = useState<boolean>(false);
  const [newContact, setNewContact] = useState<string>("");
  const currentUser = id === mentor?.user_id.toString();
  const [error, setError] = useState<string | null>(null);

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
      console.error("Error updating status: ", err);
      setError("Error updating status. Please try again later");
    }
  };

  const updateContact = async (id: number) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_DEVAPI}mentors/${id}`,
        { contact: newContact },
        { withCredentials: true }
      );
      setMentor({ ...mentor, contact: newContact });
      setIsEditContact(false);
    } catch (err) {
      console.error("Error updating contact: ", err);
      setError("Error updating contact. Please try again later");
    }
  };

  return (
    <div className="max-w-[1200px] px-5 sm:px-10 mx-auto">
      <Navbar />

      <h2 className="text-3xl sm:text-4xl font-semibold mt-10 text-[#170103]">
        Cat Bytes Mentor
      </h2>
      {error && <p className="text-red-500 italic">{error}</p>}

      <div className="flex flex-row flex-wrap mt-7 justify-between">
        <div className="w-full flex flex-row flex-wrap md:flex-nowrap justify-between rounded-3xl p-8 bg-[#fef7f8] shadow-[0_6px_10px_0_rgba(255,166,173,0.4)]">
          <div className="w-full flex flex-col h-fit">
            <p className="text-2xl sm:text-3xl font-semibold text-[#170103]">
              <span className="flex flex-row justify-between">
                {mentor?.name}
                <div className="flex gap-4 items-center">
                  <p className="text-sm sm:text-base font-montserrat">
                    {mentor?.status === "active" ? "🟢 Active " : "⚪ Inactive"}
                  </p>
                  {currentUser && (
                    <button
                      className={`${style.toggleBtn} ${
                        isToggled ? style.isToggled : ""
                      }`}
                      onClick={() => updateStatus(mentor.mentor_id)}
                    >
                      <div className={`${style.thumb}`}></div>
                    </button>
                  )}
                </div>
              </span>
            </p>

            <p className="text-sm sm:text-base font-montserrat mt-4 sm:mt-5 flex sm:flex-row flex-col sm:items-center text-[#170103]">
              <span className="text-xs sm:text-sm w-[82px] text-[#4B5563]">
                Discord:
              </span>
              {mentor?.discord_nickname}
            </p>

            <p className="text-sm sm:text-base font-montserrat mt-2 flex flex-col sm:flex-row sm:items-center text-[#170103]">
              <span className="text-xs sm:text-sm w-[82px] text-[#4B5563]">
                Contact:
              </span>
              {isEditContact ? (
                <span className="flex flex-row items-center gap-2">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md p-1 sm:p-2 text-sm sm:text-base"
                    value={newContact}
                    onChange={(e) => setNewContact(e.target.value)}
                  />{" "}
                  <TickIcon
                    className="inline ml-2 cursor-pointer"
                    size={16}
                    color="green"
                    onClick={() => updateContact(mentor.mentor_id)}
                  />
                  <CancelIcon
                    className="inline ml-2 cursor-pointer"
                    color="red"
                    onClick={() => setIsEditContact(false)}
                  />
                </span>
              ) : (
                <span>
                  {mentor?.contact}

                  {currentUser && (
                    <EditPencilIcon
                      className="inline ml-2 cursor-pointer"
                      size={16}
                      color="gray"
                      onClick={() => {
                        setNewContact(mentor.contact);
                        setIsEditContact(true);
                      }}
                    />
                  )}
                </span>
              )}
            </p>

            <Link
              to={`/user_profile/${mentor.user_id}`}
              className="underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {mentor?.name}
            </Link>

            <p className="text-sm sm:text-base font-montserrat mt-3 flex flex-row items-center gap-3 text-[#170103]">
              <span className="text-xs sm:text-sm w-[82px] text-[#4B5563]">
                Languages:
              </span>
              {mentor?.languages.join(", ")}
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
