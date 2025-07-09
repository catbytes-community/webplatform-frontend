import axios from "axios";
import { useEffect } from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";

export const AuthDiscordCallbackPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const authWithCode = async (code: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DEVAPI}users/login`,
        {},
        { headers: { "X-Discord-Code": code }, withCredentials: true }
      );

      const user = response.data;

      localStorage.setItem("user", JSON.stringify(user.user));
      navigate("/");
    } catch (error) {
      console.error("Get user error", error);

      const errorMessage =
        "You are not a member of our community yet. Please click Join Us first to join our community.";

      navigate("/login", {
        state: { errorMessage },
      });
    }
  };

  useEffect(() => {
    const discordCode = searchParams.get("code");

    if (discordCode) {
      authWithCode(discordCode);
    }
  }, [location]);

  return <div>Loading ...</div>;
};
