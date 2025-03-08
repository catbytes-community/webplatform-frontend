import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../shared/ui/Navbar/Navbar";

type User = {
  id: string;
  name: string;
  discord_nickname: string;
  roles: { role_id: number; role_name: string }[];
  created_at: string;
};

export default function UserProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_DEVAPI}users/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log("get user response", response.data);
      setUser(response.data);
    };
    const getDiscordLink = async () => {
      const response = await axios.post(
        `${import.meta.env.VITE_DEVAPI}generate-invite`,
        {
          withCredentials: true,
        }
      );
      console.log("get discord link response", response);
    };

    try {
      getUser();
      getDiscordLink();
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-10 flex flex-col gap-5 w-96 m-auto">
        <h1 className="font-bold text-xl text-center mb-5 mt-10">
          User Profile
        </h1>
        <p>
          <span className="font-bold font-montserrat">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-bold font-montserrat">Discord Nickname:</span>{" "}
          {user.discord_nickname}
        </p>
        <p>
          <span className="font-bold font-montserrat">Role: </span>
          {user.roles.filter((role) => role.role_name === "mentor").length > 0
            ? "Mentor"
            : "Member"}
        </p>
        <p>
          <span className="font-bold font-montserrat">Member since:</span>{" "}
          {new Date(user.created_at).toDateString()}
        </p>
      </div>
    </div>
  );
}
