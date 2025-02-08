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
  function handleApprove(confirm: boolean) {
    if (confirm) {
      //code to handle approving
    }
    setIsConfirmApproveShown(false);
  }

  return (
    <>
      {isConfirmRejectShown  && (
        <ConfirmModal getConfirmation={handleReject} text='Are you sure you want to reject the application?' />
      )}
      {isConfirmApproveShown && (
        <ConfirmModal getConfirmation={handleApprove} text='Are you sure you want to approve the application?' />
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
            onClick={handleRejectClick}
          ></Button>
          <Button
            label="Approve"
            btnType={ButtonsEnum.PRIMARY}
            onClick={handleApproveClick}
          ></Button>
        </div>
      </div>
    </>
  );
};
