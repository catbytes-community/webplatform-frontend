import style from "./CreateApplicationPage.module.css";
import React, { useState } from "react";
import axios from "axios";
import Button, { ButtonsEnum } from "../../../shared/ui/Button/Button";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import Alert from "../../../shared/ui/Alert/Alert";

export const CreateApplicationPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [discord, setDiscord] = useState<string>("");
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showAlert, setShowAlert] = useState<boolean>(false);

  //uncommit if need message in ui
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Validation rules
  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "name":
        return /^[A-Za-z\s]+$/.test(value)
          ? ""
          : "Name must contain only letters and spaces.";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please enter a valid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'";
      case "about":
        return value.trim().length >= 10
          ? ""
          : "About must be at least 10 characters long.";
      case "link":
        return /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/.test(value)
          ? ""
          : "Invalid video link. Valid link https://example.com";
      case "discord":
        return /^(?=.{2,32}$)[a-zA-Z0-9._]+$/.test(value)
          ? ""
          : "Discord username must be 2-32 characters long and can only contain letters, numbers, dots, and underscores.";
      default:
        return "";
    }
  };

  // Validate all fields before submission
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    newErrors.name = validateField("name", name);
    newErrors.email = validateField("email", email);
    newErrors.about = validateField("about", about);
    newErrors.link = validateField("link", link);
    newErrors.discord = validateField("discord", discord);

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleBlur = (field: string, value: string): void => {
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return; // If validation fails, don't proceed
    }

    if (!agreeToTerms) {
      setError("You must agree to the Terms and Conditions.");
      return;
    }

    const data = {
      name,
      about,
      email,
      video_link: link,
      discord_nickname: discord,
      agreeToTerms,
    };

    try {
      setError(null);
      //uncommit if need message in ui
      setSuccessMessage(null);

      // send data on server

      await axios.post(`${import.meta.env.VITE_DEVAPI}applications`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // if response server sucsessful
      setShowAlert(true);

      // clean form
      setName("");
      setEmail("");
      setAbout("");
      setLink("");
      setDiscord("");
      setAgreeToTerms(false);
      setErrors({});
    } catch (error) {
      // catch errors
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.error ||
            "An error occurred while submitting the form."
        );
      } else {
        setError("An unexpected error occurred.");
      }

      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      {showAlert && (
        <Alert
          setShowAlert={setShowAlert}
          title="Application submitted!"
          subtitle="Thank you for your application. One of our mentors will review it shortly and you will receive a relevant email 😽"
        />
      )}
      <p className="font-bold font-montserrat w-80 m-auto my-10 text-center">
        Please complete the below form to apply for joining our community
      </p>
      <div className="flex flex-col items-center justify-center gap-5 w-80 m-auto">
        {error && <p className={style.error}>{error}</p>}

        {successMessage && <p className={style.success}>{successMessage}</p>}

        <form onSubmit={handleSubmit} className={style.form}>
          <div>
            <input
              className={style.input}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  name: validateField("name", e.target.value),
                }));
              }}
            />
            {errors.name && <p className={style.error}>{errors.name}</p>}
          </div>
          <div>
            <input
              className={style.input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                handleBlur("email", e.target.value)
              }
            />
            {errors.email && <p className={style.error}>{errors.email}</p>}
          </div>
          <div>
            <input
              className={style.input}
              type="text"
              placeholder="About"
              value={about}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAbout(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  about: validateField("about", e.target.value),
                }));
              }}
            />
            {errors.about && <p className={style.error}>{errors.about}</p>}
          </div>
          <div>
            <input
              className={style.input}
              type="text"
              placeholder="Link to video"
              value={link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLink(e.target.value)
              }
              onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                handleBlur("link", e.target.value)
              }
            />
            <p className="w-[290px] m-auto italic text-sm ">
              Please upload a short video introducing yourslef and why you would
              like to join our community. <br />
              You can upload a video unlisted to YouTube and share the link with
              us.
            </p>
            {errors.link && <p className={style.error}>{errors.link}</p>}
          </div>
          <div>
            <input
              className={style.input}
              type="text"
              placeholder="Discord nickname"
              value={discord}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDiscord(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  discord: validateField("discord", e.target.value),
                }));
              }}
            />
            <p className="w-[290px] m-auto italic text-sm ">
              You need a Discord account to be able to join our private Discord
              server.
            </p>
            {errors.discord && <p className={style.error}>{errors.discord}</p>}
          </div>
          <div className="mb-5 w-full p-2">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAgreeToTerms(e.target.checked)
              }
              className="mr-2"
            />
            <label className="text-sm">
              I agree to the{" "}
              <a href="/privacy_policy" target="_blank" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/terms_and_conditions"
                target="_blank"
                className="underline"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
          <Button
            label="Submit"
            btnType={ButtonsEnum.PRIMARY}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};
