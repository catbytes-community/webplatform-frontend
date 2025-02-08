import Button from "../Button/Button";
import logo from "../../assets/images/logopurple.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMentor, setIsMentor] = useState(false);

  const isCreateApplication = location.pathname === "/create_application";
  const isLogInPage = location.pathname === "/login";

  useEffect(() => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null;
    if (user) {
      setIsMentor(
        user.roles.filter(
          (role: { role_id: number; role_name: string }) =>
            role.role_name === "mentor"
        ).length > 0
      );
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true); // User is authenticated via Firebase
      } else {
        setIsAuth(false); // User is not authenticated via Firebase
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  function handleClickJoinUs() {
    navigate("/create_application");
  }

  function handleClickSignIn() {
    navigate("/login");
  }

  function handleClickSignOut() {
    signOut(auth)
      .then(() => {
        Cookies.remove("userUID"); // Clear the cookie on sign out
        setIsAuth(false); // Update the authentication state
        localStorage.removeItem("user"); // Clear the user data from local storage
        setIsMentor(false); // Update the mentor state
        navigate("/"); // Redirect to the home page
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex items-center justify-between w-full p-5 gap-30 pl-10 pr-5 font-[Monserrat]">
      <Link to="/">
        <div className="w-24">
          <img src={logo} />
        </div>
      </Link>

      <div className="flex justify-between gap-6 w-611px h-25px ml-1 pl-5">
        <nav className="flex items-center gap-6 -ml-96">
          <Link to="/">HOME</Link>
          <Link to="/pomodoro">Tools</Link>
          {isMentor && <Link to="/applications">Applications</Link>}
        </nav>
      </div>

      <div className="flex justify-between gap-10 font-[Monserrat]">
        <Button
          label="JOIN US"
          btnType="primary_btn"
          onClick={handleClickJoinUs}
          disabled={isCreateApplication}
        />

        <Button
          label={isAuth ? "SIGN OUT" : "SIGN IN"}
          btnType="secondary_btn"
          onClick={isAuth ? handleClickSignOut : handleClickSignIn}
          disabled={isLogInPage}
        />
      </div>
    </div>
  );
}
