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

    try {
      getUser();
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
      <div className="p-10 flex flex-col gap-5">
        <h1 className="font-bold text-xl">User Profile</h1>
        <p>Name: {user.name}</p>
        <p>
          Role:{" "}
          {user.roles.filter((role) => role.role_name === "mentor").length > 0
            ? "Mentor"
            : "Member"}
        </p>
        <p>Member since: {new Date(user.created_at).toDateString()}</p>
      </div>
    </div>
  );
}
