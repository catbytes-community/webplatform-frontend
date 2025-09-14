import Navbar from "../../../shared/ui/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./MentorUserProfilePage.module.css";

type Mentor = {
  mentor_id: string;
  name: string;
  discord_nickname: string;
  languages: string[];
  tags: string[];
  about: string;
};

export default function MentorUserProfilePage() {
  const { id } = useParams();
  const [mentor, setMentor] = useState<Mentor | null>(null);

  useEffect(() => {
    const getMentor = async () => {
      try {
        // TODO: Fetch mentor from API
        setMentor({
          mentor_id: "1",
          name: "Jane Doe",
          discord_nickname: "janeDoe_123",
          languages: ["English", "English", "English"],
          tags: [
            "Nodejs",
            "WebDevelopment",
            "React",
            "JavaScript",
            "FrontentDevelopment",
          ],
          about:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        });
      } catch (err) {
        console.error("get mentor error", err);
      }
    };

    getMentor();
  }, [id]);

  if (!mentor) {
    return <div>Loading...</div>;
  }

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
              <p className="text-sm sm:text-base font-montserrat mt-3 flex flex-row items-center gap-3 text-[#170103]">
                <span className="text-xs sm:text-sm w-[82px] text-[#4B5563]">
                  Languages:
                </span>
                {mentor?.languages.join(", ")}
              </p>
            </div>
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

        <div
          className={`${style.cardShadow} ${style.tagsContainer} mt-5 w-full lg:w-[32%] h-fit justify-center lg:justify-start`}
        >
          {mentor?.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`${style.tags} text-sm sm:text-m font-montserrat font-medium text-[#170103]`}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
