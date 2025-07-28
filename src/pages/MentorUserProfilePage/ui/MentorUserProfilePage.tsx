import Navbar from "../../../shared/ui/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Mentor = {
  id: string;
  name: string;
  discord_nickname: string;
  languages: string[];
  //tags_name: string[]; // how to show mentor tags?
  about: string; // it's experiance description?
  // how to show mentor status ?
};

export default function MentorUserProfilePage() {
  const { id } = useParams();
  const [mentor, setMentor] = useState<Mentor | null>(null);

  useEffect(() => {
    const getMentor = async () => {
      try {
        // TODO: Fetch mentor from API
        setMentor({
          id: "1",
          name: "John Doe",
          discord_nickname: "johndoe#1234",
          languages: ["JavaScript", "Python"],
          //tags_name: ["Web Development", "AI"],
          about: "5 years of experience in web development and AI.",
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
      <div className="p-10 flex flex-col gap-5 w-96 m-auto">
        <h1 className="font-bold text-xl text-center mb-5 mt-10">
          Mentor User Profile Page
        </h1>
        <p>
          <span className="font-bold font-montserrat">Name:</span>
          {mentor?.name}
        </p>
        <p>
          <span className="font-bold font-montserrat">Discord Nickname:</span>
          {mentor?.discord_nickname}
        </p>
        <p>
          <span className="font-bold font-montserrat">Languages:</span>
          {mentor?.languages.join(", ")}
        </p>
        {/* <p>
          <span className="font-bold font-montserrat">Tags:</span>
          {mentor?.tags_name.join(", ")}
        </p> */}
        <p>
          <span className="font-bold font-montserrat">
            Experience description:
          </span>
          {mentor?.about}
        </p>
      </div>
    </div>
  );
}
