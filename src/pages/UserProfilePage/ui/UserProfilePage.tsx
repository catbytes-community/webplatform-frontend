import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import Button from "../../../shared/ui/Button/Button";

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
  const [error, setError] = useState<string | null>(null);
  const [discordLink, setDiscordLink] = useState<string | null>();

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

  const generateDiscordLink = () => {
    axios
      .post(
        `${import.meta.env.VITE_DEVAPI}generate-invite`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("res", res);
        if(res?.data?.invite_link) {
          setDiscordLink(res.data.invite_link);
        }
      })
      .catch((err) => {
        console.error(err);
        if (err?.response?.data?.error) {
          setError(err.response.data.error);
        }
      });
  };

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
        {error && <p className="text-red-500 italic">{error}</p>}
        {discordLink ? (
          <a href={discordLink} target="_blank" rel="noreferrer" className="underline text-sky-500">
            {discordLink}
          </a>
        ) : (
          <Button
          label="Generate Discord Link"
          btnType="primary_btn"
          onClick={generateDiscordLink}
        />
        )}
      </div>
    </div>
  );
}
