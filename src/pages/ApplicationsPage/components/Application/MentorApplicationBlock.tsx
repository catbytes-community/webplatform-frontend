import { useState } from "react";
import { MentorApplication } from "../../../../app/types/global";
import Button, { ButtonsEnum } from "../../../../shared/ui/Button/Button";
import style from "./ApplicationBlock.module.css";
import ConfirmModal from "../../../../shared/ui/ConfirmModal/ConfirmModal";
import { Link } from "react-router-dom";
import axios from "axios";

export const MentorApplicationBlock = ({
  application,
}: {
  application: MentorApplication;
}) => {
  const [isConfirmRejectShown, setIsConfirmRejectShown] = useState(false);
  const [isConfirmApproveShown, setIsConfirmApproveShown] = useState(false);

  const handleReject = async (confirm: boolean) => {
    if (confirm) {
      try {
        await axios.patch(
          `${import.meta.env.VITE_DEVAPI}mentors/${application.mentor_id}`,
          {
            status: "rejected",
          },
          {
            withCredentials: true,
          }
        );

        alert("Application rejected");
      } catch (error) {
        console.log(error);
        alert("Error rejecting mentor application. Please try again later");
      }
    }
    setIsConfirmRejectShown(false);
  };

  const handleApprove = async (confirm: boolean) => {
    if (confirm) {
      try {
        const response = await axios.patch(
          `${import.meta.env.VITE_DEVAPI}mentors/${application.mentor_id}`,
          {
            status: "active",
          },
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          alert("Mentor application approved");
        }
      } catch (error) {
        console.log(error);
        alert("Error approving mentor application. Please try again later");
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
      <div
        data-id={application.mentor_id}
        className={`${style.application} w-[320px] sm:w-[500px]`}
      >
        <Link
          to={`/user_profile/${application.user_id}`}
          className="underline text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          {application.name}
        </Link>
        <p>About: {application.about}</p>
        <p>Mentor status: {application.status}</p>
        {application.status === "pending" ? (
          <div className={style.buttons}>
            <Button
              label="Reject"
              btnType={ButtonsEnum.SECONDARY}
              onClick={() => {
                setIsConfirmRejectShown(true);
              }}
            ></Button>
            <Button
              label="Approve"
              btnType={ButtonsEnum.PRIMARY}
              onClick={() => {
                setIsConfirmApproveShown(true);
              }}
            ></Button>
          </div>
        ) : (
          <div className="flex justify-end">
            <p
              className={`${
                application.status === "rejected"
                  ? "bg-red-500"
                  : application.status === "inactive"
                  ? "bg-red-300"
                  : "bg-green-500"
              } p-1 rounded text-center font-bold text-white`}
            >
              {application.status.toUpperCase()}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
