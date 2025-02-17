import { useState } from "react";
import { Application } from "../../../../app/types/global";
import Button, { ButtonsEnum } from "../../../../shared/ui/Button/Button";
import style from "./ApplicationBlock.module.css";
import ConfirmModal from "../../../../shared/ui/ConfirmModal/ConfirmModal";
import axios from "axios";
import { auth } from "../../../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export const ApplicationBlock = ({
  application,
}: {
  application: Application;
}) => {
  const [name, lastName] = application.name.split(" ");
  const [isConfirmRejectShown, setIsConfirmRejectShown] = useState(false);
  const [isConfirmApproveShown, setIsConfirmApproveShown] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [comment, setComment] = useState("");

  function handleRejectClick() {
    setIsConfirmRejectShown(true);
  }

  function handleApproveClick() {
    setIsConfirmApproveShown(true);
  }
  const handleReject = async (confirm: boolean) => {
    if (confirm) {
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null;

      if (!comment || comment === "") {
        alert("Please add a comment");
        return;
      } else {
        try {
          await axios.put(
            `${import.meta.env.VITE_DEVAPI}applications/${application.id}`,
            {
              status: "rejected",
              comment: comment,
              user_id: user.id,
            },
            {
              withCredentials: true,
            }
          );

          alert("Application rejected");
          setIsRejected(false);
          setComment("");
        } catch (error) {
          console.log(error);
        }
      }
    }
    setIsConfirmRejectShown(false);
  };

  function generatePassword() {
    const length = 8;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  const handleApprove = async (confirm: boolean) => {
    if (confirm) {
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null;

      console.log("Approve application user: ", application.id, user.id);
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_DEVAPI}applications/${application.id}`,
          {
            status: "approved",
            user_id: user.id,
          },
          {
            withCredentials: true,
          }
        );

        console.log("Approve application response: ", response);
        const tempPassword = generatePassword();
        createUserWithEmailAndPassword(auth, response.data.email, tempPassword)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("User created: ", user);

            if (auth.currentUser) {
              sendEmailVerification(auth.currentUser).then(() => {
                alert("Email verification email is sent to the user");

                // send random password to backend to include into email
                // or we ask them to reset password on first login
                axios.put(
                  `${import.meta.env.VITE_DEVAPI}applications/${
                    application.id
                  }`,
                  {
                    tempPassword: tempPassword,
                  },
                  {
                    withCredentials: true,
                  }
                );
              });
            } else {
              console.error("No current user to send email verification");
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error creating user: ", errorCode, errorMessage);
          });

        alert("Application approved");
      } catch (error) {
        console.log(error);
      }
    }
    setIsConfirmApproveShown(false);
  };

  return (
    <>
      {isConfirmRejectShown && (
        <ConfirmModal
          getConfirmation={handleReject}
          text="Are you sure you want to reject the application?"
        />
      )}
      {isConfirmApproveShown && (
        <ConfirmModal
          getConfirmation={handleApprove}
          text="Are you sure you want to approve the application?"
        />
      )}
      <div data-id={application.id} className={style.application}>
        <p>Name: {name}</p>
        <p>Last name: {lastName}</p>
        <p>Email: {application.email}</p>
        <p>Discord: {application.discord_username}</p>
        <p>About: {application.about}</p>
        <p>
          Link to video:{" "}
          <a href={application.video_link}>{application.video_link}</a>
        </p>
        {isRejected && (
          <div className="mt-5">
            <input
              placeholder="Why do you want to reject it?"
              className="w-full p-3 rounded border-[1px] border-gray-300"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <p className="italic text-xs text-gray-500 mt-1 mb-5">
              Note: this information will be viewed by the applicant
            </p>
            <Button
              label="Reject"
              btnType={ButtonsEnum.PRIMARY}
              onClick={handleRejectClick}
            ></Button>
            <Button
              label="Cancel"
              btnType={ButtonsEnum.SECONDARY}
              onClick={() => setIsRejected(false)}
            ></Button>
          </div>
        )}
        {application.status === "pending" && !isRejected ? (
          <div className={style.buttons}>
            <Button
              label="Reject"
              btnType={ButtonsEnum.SECONDARY}
              onClick={() => setIsRejected(true)}
            ></Button>
            <Button
              label="Approve"
              btnType={ButtonsEnum.PRIMARY}
              onClick={handleApproveClick}
            ></Button>
          </div>
        ) : application.status === "rejected" && !isRejected ? (
          <div className="flex justify-end">
            <p className="bg-red-500 p-3 rounded w-1/6 text-center font-bold text-white">
              REJECTED
            </p>
          </div>
        ) : application.status === "approved" && !isRejected ? (
          <div className="flex justify-end">
            <p className="bg-teal-500 p-3 rounded w-1/6 text-center font-bold text-white">
              APPROVED
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
