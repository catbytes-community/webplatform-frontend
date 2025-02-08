import { useState } from "react";
import { Application } from "../../../../app/types/global";
import Button, { ButtonsEnum } from "../../../../shared/ui/Button/Button";
import style from "./ApplicationBlock.module.css";
import ConfirmModal from "../../../../shared/ui/ConfirmModal/ConfirmModal";
import axios from "axios";

export const ApplicationBlock = ({
  application,
}: {
  application: Application;
}) => {
  const [name, lastName] = application.name.split(" ");
  const [isConfirmRejectShown, setIsConfirmRejectShown] = useState(false);
  const [isConfirmApproveShown, setIsConfirmApproveShown] = useState(false);

  function handleRejectClick() {
    setIsConfirmRejectShown(true);
  }

  function handleApproveClick() {
    setIsConfirmApproveShown(true);
  }
  function handleReject(confirm: boolean) {
    if (confirm) {
      //code to handle rejecting
    }
    setIsConfirmRejectShown(false);
  }
  const handleApprove = async (confirm: boolean) => {
    if (confirm) {
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null;

      try {
        await axios.put(
          `${import.meta.env.VITE_DEVAPI}applications/${application.id}`,
          {
            status: "approved",
            user_id: user.id,
          },
          {
            withCredentials: true,
          }
        );

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
        {application.status === "pending" ? (
          <div className={style.buttons}>
            <Button
              label="Reject"
              btnType={ButtonsEnum.SECONDARY}
              onClick={handleRejectClick}
            ></Button>
            <Button
              label="Approve"
              btnType={ButtonsEnum.PRIMARY}
              onClick={handleApproveClick}
            ></Button>
          </div>
        ) : application.status === "rejected" ? (
          <div className="flex justify-end">
            <p className="bg-red-500 p-3 rounded w-1/6 text-center font-bold text-white">
              REJECTED
            </p>
          </div>
        ) : (
          <div className="flex justify-end">
            <p className="bg-teal-500 p-3 rounded w-1/6 text-center font-bold text-white">
              APPROVED
            </p>
          </div>
        )}
      </div>
    </>
  );
};
