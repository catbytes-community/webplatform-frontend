import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import Button from "../../../shared/ui/Button/Button";
import ConfirmModal from "../../../shared/ui/ConfirmModal/ConfirmModal";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import EditPencilIcon from "../../../shared/ui/icons/EditPencilIcon";
import TickIcon from "../../../shared/ui/icons/TickIcon";
import CancelIcon from "../../../shared/ui/icons/CancelIcon";

type User = {
  id: string;
  name: string;
  discord_nickname: string;
  email: string;
  roles: { role_id: number; role_name: string }[];
  mentor_id?: string;
  created_at: string;
  languages: string[];
  about: string;
};

export default function UserProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [discordLink, setDiscordLink] = useState<string | null>();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const currentUserId = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string).id
    : undefined;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>("");
  const [isEditLanguages, setIsEditLanguages] = useState<boolean>(false);
  const [newLanguages, setNewLanguages] = useState<string[]>([]);
  const [isEditAbout, setIsEditAbout] = useState<boolean>(false);
  const [newAbout, setNewAbout] = useState<string>("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_DEVAPI}users/${id}`,
          {
            withCredentials: true,
          }
        );
        setUser(response.data);
      } catch (err) {
        console.error("Get user error", err);
        signOut(auth)
          .then(() => {
            axios.post(
              `${import.meta.env.VITE_DEVAPI}users/logout`,
              {},
              {
                withCredentials: true,
              }
            );
            localStorage.removeItem("user"); // Clear the user data from local storage
            navigate("/"); // Redirect to the home page
          })
          .catch((error) => {
            console.error(error);
          });

        window.location.href = "/login";
      }
    };

    try {
      getUser();
    } catch (err) {
      console.error("Catch error:", err);
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
        if (res?.data?.invite_link) {
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

  const handleConfirm = (confirm: boolean) => {
    if (confirm) {
      axios
        .delete(`${import.meta.env.VITE_DEVAPI}users/${id}`, {
          withCredentials: true,
        })
        .then(() => {
          localStorage.removeItem("user");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        });
    } else {
      setIsConfirmModalOpen(false);
    }
  };

  const updateUser = async (id: string) => {
    try {
      // API call to update user name
      await axios.put(
        `${import.meta.env.VITE_DEVAPI}users/${id}`,
        { name: newName },
        { withCredentials: true }
      );
      setIsEdit(false);
      localStorage.setItem("user", JSON.stringify({ ...user, name: newName }));
      setUser({ ...user, name: newName });
    } catch (err) {
      console.error("Error updating user name: ", err);
    }
  };

  const updateLanguages = async (id: string) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_DEVAPI}users/${id}`,
        { languages: newLanguages },
        { withCredentials: true }
      );
      setIsEditLanguages(false);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, languages: newLanguages })
      );
      setUser({ ...user, languages: newLanguages });
    } catch (err) {
      console.error("Error updating user languages: ", err);
    }
  };

  const updateAbout = async (id: string) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_DEVAPI}users/${id}`,
        { about: newAbout },
        { withCredentials: true }
      );
      setIsEditAbout(false);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, about: newAbout })
      );
      setUser({ ...user, about: newAbout });
    } catch (err) {
      console.error("Error updating user about: ", err);
    }
  };

  return (
    <div>
      {isConfirmModalOpen && (
        <ConfirmModal
          getConfirmation={handleConfirm}
          text="Are you sure you want to delete your account?"
        />
      )}
      <Navbar />
      <div className="p-10 flex flex-col gap-5 w-96 m-auto">
        <h1 className="font-bold text-xl text-center mb-5 mt-10">
          User Profile
        </h1>
        <p className="flex gap-2 items-center">
          <span className="font-bold font-montserrat">Name:</span>
          {isEdit ? (
            <div className="flex items-center">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <TickIcon
                className="inline ml-2 cursor-pointer"
                size={16}
                color="green"
                onClick={() => updateUser(user.id)}
              />
              <CancelIcon
                className="inline ml-2 cursor-pointer"
                color="red"
                onClick={() => setIsEdit(false)}
              />
            </div>
          ) : (
            <div className="flex items-center">
              <p>{user.name}</p>
              {currentUserId === user.id && (
                <EditPencilIcon
                  className="inline ml-2 cursor-pointer"
                  size={16}
                  color="gray"
                  onClick={() => {
                    setNewName(user.name);
                    setIsEdit(true);
                  }}
                />
              )}
            </div>
          )}
        </p>
        <p>
          <span className="font-bold font-montserrat">Discord Nickname:</span>{" "}
          {user.discord_nickname}
        </p>
        {auth.currentUser?.email === user.email && (
          <p>
            <span className="font-bold font-montserrat">Email:</span>{" "}
            {auth.currentUser?.email}
            <p className="italic text-gray-500 text-sm">
              Note: email is only visible to you
            </p>
          </p>
        )}
        <p>
          <span className="font-bold font-montserrat">Role: </span>
          {user.roles.filter((role) => role.role_name === "mentor").length > 0
            ? "Mentor"
            : "Member"}
        </p>
        {user.roles.filter((role) => role.role_name === "mentor").length >
          0 && (
          <p>
            <span className="font-bold font-montserrat">
              Link to mentor profile:{" "}
            </span>
            <br />
            <Link
              to={`/mentor_user_profile/${user?.mentor_id}`}
              className="underline italic text-gray-500 text-sm"
              target="_blank"
            >
              Click here to view
            </Link>
          </p>
        )}
        <p>
          <span className="font-bold font-montserrat">Member since:</span>{" "}
          {new Date(user.created_at).toDateString()}
        </p>
        <p className="flex gap-2">
          <span className="font-bold font-montserrat">Languages:</span>{" "}
          {isEditLanguages ? (
            <div className="flex items-center">
              <input
                value={newLanguages.join(", ")}
                onChange={(e) => setNewLanguages(e.target.value.split(","))}
              />
              <TickIcon
                className="inline ml-2 cursor-pointer"
                size={16}
                color="green"
                onClick={() => updateLanguages(user.id)}
              />
              <CancelIcon
                className="inline ml-2 cursor-pointer"
                color="red"
                onClick={() => setIsEditLanguages(false)}
              />
            </div>
          ) : (
            <div className="flex items-center">
              <p>{user.languages?.join(", ")}</p>
              {currentUserId === user.id && (
                <EditPencilIcon
                  className="inline ml-2 cursor-pointer"
                  size={16}
                  color="gray"
                  onClick={() => {
                    setNewLanguages(user.languages || []);
                    setIsEditLanguages(true);
                  }}
                />
              )}
            </div>
          )}
        </p>
        <p className="flex flex-row gap-2">
          <span className="font-bold font-montserrat">About:</span>{" "}
          {isEditAbout ? (
            <div className="flex items-center">
              <input
                value={newAbout}
                onChange={(e) => setNewAbout(e.target.value)}
              />
              <TickIcon
                className="inline ml-2 cursor-pointer"
                size={16}
                color="green"
                onClick={() => updateAbout(user.id)}
              />
              <CancelIcon
                className="inline ml-2 cursor-pointer"
                color="red"
                onClick={() => setIsEditAbout(false)}
              />
            </div>
          ) : (
            <div className="flex items-center">
              {user?.about}
              {currentUserId === user.id && (
                <EditPencilIcon
                  className="inline ml-2 cursor-pointer"
                  size={16}
                  color="gray"
                  onClick={() => {
                    setNewAbout(user.about || "");
                    setIsEditAbout(true);
                  }}
                />
              )}
            </div>
          )}
        </p>
        {error && <p className="text-red-500 italic">{error}</p>}
        {discordLink ? (
          <a
            href={discordLink}
            target="_blank"
            rel="noreferrer"
            className="underline text-sky-500"
          >
            {discordLink}
          </a>
        ) : (
          currentUserId === user.id && (
            <Button
              label="Generate Discord Link"
              btnType="primary_btn"
              onClick={generateDiscordLink}
            />
          )
        )}
        {currentUserId === user.id && (
          <Button
            label="Delete Account"
            btnType="tertiary_no_arrow_btn"
            onClick={() => setIsConfirmModalOpen(true)}
          />
        )}
      </div>
    </div>
  );
}
