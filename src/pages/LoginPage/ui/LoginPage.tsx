import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";

import Navbar from "../../../shared/ui/Navbar/Navbar";
import Button, { ButtonsEnum } from "../../../shared/ui/Button/Button";
import style from "./LoginPage.module.css";

export function LoginPage() {
  // hooks
  const navigate = useNavigate();

  // component state
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLinkSent, setIsLinkSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // Check if the user clicked the email link to sign in
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let storedEmail = window.localStorage.getItem("emailForSignIn");

      if (!storedEmail) {
        storedEmail = prompt("Please enter your email to confirm sign-in");
      }

      if (storedEmail) {
        signInWithEmailLink(auth, storedEmail, window.location.href)
          .then(async (userCredential) => {
            const user = userCredential.user;
            const token = await user.getIdToken();
            console.log("token", token);

            // Send token to backend for authentication
            const loginRes = await axios.post(
              `${import.meta.env.VITE_DEVAPI}users/login`,
              {},
              { headers: { token }, withCredentials: true }
            );

            const userDataRes = await axios.get(
              `${import.meta.env.VITE_DEVAPI}users/${loginRes?.data?.user?.id}`,
              { headers: { token }, withCredentials: true }
            );

            localStorage.setItem("user", JSON.stringify(userDataRes.data));
            window.localStorage.removeItem("emailForSignIn");

            navigate("/");
          })
          .catch((error) => {
            console.error("Sign-in error:", error);
            setError("Failed to sign in. Please try again.");
          });
      }
    }
  }, [navigate]);

  const handleLoginWithEmailLink = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    try {
      const actionCodeSettings = {
        // url: "http://localhost:5173/login",
        url:
          import.meta.env.VITE_ENV === "localhost"
            ? "http://localhost:5173/login"
            : import.meta.env.VITE_ENV === "dev"
            ? "https://dev.catbytes.io/login"
            : "https://catbytes.io/login",
        handleCodeInApp: true,
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setIsLinkSent(true);
      setMessage("Sign-in link sent. Please check your email.");
      setError("");
    } catch (error) {
      console.error("Error sending sign-in link:", error);
      setError("Failed to send sign-in link. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Navbar isLogin={true} />
      {message && <p className={style.message}>{message}</p>}
      <form className={style.form} onSubmit={handleLoginWithEmailLink}>
        <div>
          <input
            className={style.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
              setMessage("");
              setIsLinkSent(false);
            }}
          />
        </div>
        {error && <p className={style.error}>{error}</p>}
        <div>
          <Button
            label={isLinkSent ? "Resend Link" : "Send Login Link"}
            btnType={ButtonsEnum.PRIMARY}
            onClick={handleLoginWithEmailLink}
          />
        </div>
      </form>

      <button onClick={() => navigate("/create_application")}>
        Not a member? Apply here
      </button>
    </div>
  );
}
