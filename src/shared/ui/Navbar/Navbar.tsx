import Button from "../Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BecomeMentorButton } from "../../../features/Mentor";
import pinkLogo from "../../assets/images/pinkLogo.png";

export default function Navbar({ isLogin = false }: { isLogin?: boolean }) {
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
        user?.roles?.filter(
          (role: { role_id: number; role_name: string }) =>
            role.role_name === "mentor"
        ).length > 0
      );
    }

    // Check if the user is authenticated
    console.log("current user", auth.currentUser);

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is authenticated via Firebase");
        setIsAuth(true); // User is authenticated via Firebase
      } else {
        console.log("User is not authenticated via Firebase");
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

  function ShowingBecomeMentorButton() {
    if (isAuth && isMentor === false) {
      return <BecomeMentorButton />;
    }
  }

  return (
    <div className="flex items-center justify-between w-full p-5 gap-30 pl-10 pr-5 font-[Monserrat]">
      <div className="flex items-center gap-10">
        <Link to="/">
          <img src={pinkLogo} className="w-24" />
        </Link>

        <div className="flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/pomodoro">Tools</Link>
          {isMentor && <Link to="/applications">Applications</Link>}
        </div>
      </div>

      {/* <div className="flex justify-between gap-6 w-611px h-25px ml-1 pl-5 bg-indigo-500">
        
      </div> */}

      <div className="flex justify-between gap-10 font-[Monserrat]">

        <ShowingBecomeMentorButton />
        
        {!isAuth && (
          <Button
            label="JOIN US"
            btnType="primary_btn"
            onClick={handleClickJoinUs}
            disabled={isCreateApplication}
          />
        )}

        {!isLogin && (
          <Button
            label={isAuth ? "SIGN OUT" : "SIGN IN"}
            btnType="secondary_btn"
            onClick={isAuth ? handleClickSignOut : handleClickSignIn}
            disabled={isLogInPage}
          />
        )}
      </div>
    </div>
  );
}
