import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
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
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();

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

      setEmail("");
      setPassword("");
      setError("");
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios error details:",
          error.response?.data || error.message
        );
        setError(error.response?.data?.message || "Login request failed");
      } else {
        console.error("Login error:", error);
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      }
    }
  };

  const handleForgotPassword = async () => {
    setIsForgotPassword(true);
    if (!email) {
      setError("Please enter your email first.");
      return;
    }

    // Проверка валидности email
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert(`Password reset email sent to ${email}`);
    } catch (err) {
      console.error("Password reset error:", err);
      alert(
        `Error sending reset email. Please try again later. Error: ${JSON.stringify(
          err
        )}`
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Navbar />
      <form className={style.form} onSubmit={handleLogin}>
        <div>
          <input
            className={style.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {!isForgotPassword && (
          <div>
            <input
              className={style.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}
        {error && <p className={style.error}>{error}</p>}
        <div>
          <Button
            label={isForgotPassword ? "Reset Password" : "Login"}
            btnType={ButtonsEnum.PRIMARY}
            onClick={isForgotPassword ? handleForgotPassword : handleLogin}
          />
        </div>
      </form>

      {isForgotPassword ? (
        <Button
          label="Cancel"
          btnType={ButtonsEnum.SECONDARY}
          onClick={() => {
            setIsForgotPassword(false);
            setError("");
          }}
        />
      ) : (
        <Button
          label="Forgot Password"
          btnType={ButtonsEnum.TERTIARY_NO_ARROW}
          onClick={() => setIsForgotPassword(true)}
        />
      )}

      <button onClick={() => navigate("/create_application")}>
        Not a member? Apply here
      </button>
    </div>
  );
}
