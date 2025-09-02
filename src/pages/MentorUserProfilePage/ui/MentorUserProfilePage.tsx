import Navbar from "../../../shared/ui/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mentorProfileAvatar from "../../../shared/assets/images/mentorProfileAvatar.png";
// import style from "./MentorUserProfilePage.module.css";

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

    try {
      getMentor();
    } catch (err) {
      console.error("Catch error:", err);
    }
  }, [id]);

  if (!mentor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="w-full max-w-[1200px] mx-auto">
        <h2 className="text-4xl leading-[1.2] font-semibold mt-10">
          Cat Bytes Mentor
        </h2>

        <div className="flex flex-row justify-between rounded-3xl p-8 mt-7 bg-[#fef7f8] shadow-[0_6px_10px_0_rgba(255,166,173,0.4)]">
          <div className="flex flex-row gap-6">
            <img
              src={mentorProfileAvatar}
              alt="Avatar Image"
              className="max-w-[170px] object-cover"
            ></img>

            <div className="flex flex-col">
              <p className="text-3xl font-semibold leading-[1.2]">
                {mentor?.name}
              </p>
              <p className="text-base font-montserrat font-medium mt-5 flex items-center gap-3 leading-[1.2]">
                <span className="text-sm w-[82px] font-normal">Discord:</span>
                {mentor?.discord_nickname}
              </p>
              <p className="text-base font-montserrat font-medium mt-3 flex items-center gap-3 leading-[1.2]">
                <span className="text-sm w-[82px] font-normal">Languages:</span>
                {mentor?.languages.join(", ")}
              </p>
            </div>
          </div>

          <button className="primary_big_btn">Contact</button>
        </div>

        <div className="flex flex-col rounded-3xl p-8 mt-5 bg-[#fef7f8] shadow-[0_6px_10px_0_rgba(255,166,173,0.4)]">
          <h2 className="text-2xl leading-[1.2] font-medium">Experience</h2>
          <p className="mt-5 font-montserrat text-lg leading-[1.5]">
            {mentor?.about}
          </p>
        </div>

        <div className="mt-5">
          <p>{mentor?.tags.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
