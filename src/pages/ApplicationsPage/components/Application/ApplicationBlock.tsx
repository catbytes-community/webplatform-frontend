import { useEffect, useState } from "react";
import { Application } from "../../../../app/types/global";
import Button, { ButtonsEnum } from "../../../../shared/ui/Button/Button";
import style from "./ApplicationBlock.module.css";
import ConfirmModal from "../../../../shared/ui/ConfirmModal/ConfirmModal";
import axios from "axios";
import { auth } from "../../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export const ApplicationBlock = ({
  application,
}: {
  application: Application;
}) => {
  const [isConfirmRejectShown, setIsConfirmRejectShown] = useState(false);
  const [isConfirmApproveShown, setIsConfirmApproveShown] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [comment, setComment] = useState("");

  type User = {
    id: string;
    name: string;
  };

  const [mentorUser, setMentorUser] = useState<User | null>(null);

  const getProfileLink = async (userId: string) => {
    const response = await axios.get(
      `${import.meta.env.VITE_DEVAPI}users/${userId}`,
      {
        withCredentials: true,
      }
    );
    console.log("getProfileLink response: ", response);
    return response.data;
  };

  useEffect(() => {
    if (application.modified_by) {
      getProfileLink(application.modified_by).then((data) => {
        setMentorUser({
          id: data.id,
          name: data.name,
        });
      });
    }
  }, [application.modified_by]);

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
          // TODO: implement flow in case there will be firebase error when creating user
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("User created: ", user);

            if (auth.currentUser) {
              // TODO: send passwordless sign in link
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
        <p>Name: {application.name}</p>
        <p>Discord: {application.discord_nickname}</p>
        <p>About: {application.about}</p>
        <p>
          Link to video:{" "}
          <a href={application.video_link}>{application.video_link}</a>
        </p>
        {application.status !== "pending" && (
          <div>
            <p>
              Modified by:{" "}
              <Link
                to={`/user_profile/${mentorUser?.id}`}
                className="underline text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {mentorUser?.name}
              </Link>
            </p>
          </div>
        )}
        {application.status === "rejected" && (
          <p>Comment: {application.comment}</p>
        )}
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
