import { useState } from "react";
import { Application } from "../../../../app/types/global";
import Button, { ButtonsEnum } from "../../../../shared/ui/Button/Button";
import style from "./ApplicationBlock.module.css";
import ConfirmModal from "../../../../shared/ui/ConfirmModal/ConfirmModal";

export const ApplicationBlock = ({
  application,
}: {
  application: Application;
}) => {
  const [name, lastName] = application.name.split(" ");
  const [isConfirmShown, setIsConfirmShown] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  function handleReject() {
    setConfirmText("Are you sure you want to reject the application?");
    setIsConfirmShown(true);
  }

  function handleApprove() {
    setConfirmText("Are you sure you want to approve the application?");
    setIsConfirmShown(true);
  }

  function handleShowConfirm(confirm: boolean) {
    if (confirm) {
      //code to handle approving or rejecting
    }
    setIsConfirmShown(false);
  }

  return (
    <>
      {isConfirmShown  && (
        <ConfirmModal getConfirmation={handleShowConfirm} text={confirmText} />
      )}
      <div data-id={application.id} className={style.application}>
        <p>Name: {name}</p>
        <p>Last name: {lastName}</p>
        <p>Email: {application.email}</p>
        <p>Discord: {application.discord_username}</p>
        <p>About: {application.about}</p>
        <p>Link to video: <a href={application.video_link}>{application.video_link}</a></p>
        <div className={style.buttons}>
          <Button
            label="Reject"
            btnType={ButtonsEnum.SECONDARY}
            onClick={handleReject}
          ></Button>
          <Button
            label="Approve"
            btnType={ButtonsEnum.PRIMARY}
            onClick={handleApprove}
          ></Button>
        </div>
      </div>
    </>
  );
};
