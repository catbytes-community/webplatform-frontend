import style from "./CreateApplicationMentorPage.module.css";
import React, { useState } from "react";
import axios from "axios";
import Button, { ButtonsEnum } from "../../../shared/ui/Button/Button";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import Alert from "../../../shared/ui/Alert/Alert";
import CreatableSelect from "react-select/creatable";
import { MultiValue } from "react-select";

export const CreateApplicationMentorPage: React.FC = () => {
  const [about, setAbout] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [tags, setTags] = useState<
    MultiValue<{ label: string; value: string }>
  >([]);

  //uncommit if need message in ui
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Validation rules
  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "about":
        return value.trim().length >= 10
          ? ""
          : "About must be at least 10 characters long.";
      default:
        return "";
    }
  };

  // Validate all fields before submission
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    newErrors.about = validateField("about", about);

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return; // If validation fails, don't proceed
    }

    const data = {
      about,
      contact,
      tags: tags.map((t) => t.value),
    };

    console.log("Data to be sent:", data);

    try {
      setError(null);
      //uncommit if need message in ui
      setSuccessMessage(null);

      // send data on server

      await axios.post(`${import.meta.env.VITE_DEVAPI}mentors`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // if response server sucsessful
      setShowAlert(true);

      // clean form
      setAbout("");
      setTags([]);
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

  const handleChangeTags = (
    selectedOptions: MultiValue<{ label: string; value: string }>
  ) => {
    setTags(selectedOptions || []);
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
        Please complete the below form to apply for becoming a mentor in our
        community
      </p>
      <div className="flex flex-col items-center justify-center gap-5 w-80 m-auto">
        {error && <p className={style.error}>{error}</p>}

        {successMessage && <p className={style.success}>{successMessage}</p>}

        <form onSubmit={handleSubmit} className={style.form}>
          <div>
            <p className="text-sm italic mb-2 w-[290px]">
              Tell us about your experience and in which areas you can provide
              mentorship support
            </p>
            <textarea
              className={style.textareaInput}
              placeholder="About"
              value={about}
              rows={3}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setAbout(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  about: validateField("about", e.target.value),
                }));

                // Adjust height dynamically
                e.target.style.height = "auto"; // Reset height to calculate new height
                e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on scrollHeight
              }}
              style={{ overflow: "hidden" }} // Prevent scrollbar
            />
            {errors.about && <p className={style.error}>{errors.about}</p>}
          </div>
          <div>
            <p className="w-[290px] m-auto italic text-sm mb-2">
              Please provide your preferred contact method. It can be either
              contact nickname, link to LinkedIn profile or telegram channel
            </p>
            <input
              className={style.input}
              type="text"
              placeholder="Contact"
              value={contact}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setContact(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  contact: e.target.value,
                }));
              }}
            />
            {errors.contact && <p className={style.error}>{errors.contact}</p>}
          </div>

          <div className="p-5">
            <p className="w-[290px] m-auto italic text-sm mb-2">
              Provide tags related to your area of expertise, for example web
              development, React, JavaScript, Machine Learning etc.
            </p>
            <CreatableSelect
              isClearable
              isMulti
              options={tags}
              onChange={handleChangeTags}
            />
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
