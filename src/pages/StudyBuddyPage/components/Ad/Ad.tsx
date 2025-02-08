import { Card } from "../../../../shared/ui";
import Button, { ButtonsEnum } from "../../../../shared/ui/Button/Button";
import style from "./ad.module.css";
import ConfirmModal from "../../../../shared/ui/ConfirmModal/ConfirmModal";
import UpdateAd from "../UpdateAd/UpdateAd";
import { useState, useEffect, useRef } from "react";
import { IAd } from "../../ui/StudyBuddyPage";
import moment from "moment";

export default function Ad({ ad }: { ad: IAd }) {
  const [isConfirmShown, setIsConfirmShown] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const ownerMenu = useRef<HTMLDivElement | null>(null);
  const [isUpdateAdShown, setIsUpdateAdShown] = useState(false);

  useEffect(() => {
    setIsLoggedIn(true);
    setIsOwner(true);
  }, []);

  function showOwnerMenu() {
    if (ownerMenu.current) {
      if (ownerMenu.current.style.display === "grid") {
        ownerMenu.current.style.display = "none";
        return;
      }
      ownerMenu.current.style.display = "grid";
    }
  }

  function handleShowConfirm(confirm: boolean) {
    if (confirm) {
      //code to handle leaving will be added later
    }
    setIsConfirmShown(false);
  }

  function handleUpdate(shown: boolean) {
    setIsUpdateAdShown(shown);
  }

  function handleLeave() {
    setConfirmText("Are you sure you want to leave the team?");
    setIsConfirmShown(true);
  }

  function handleDelete() {
    setConfirmText("Are you sure you want to delete the team?");
    setIsConfirmShown(true);
  }

  function getTimeDifference(startTime: string, endTime: string) {
    const start = moment(startTime, "HH.mm");
    const end = moment(endTime, "HH.mm");
    const duration = moment.duration(end.diff(start));
    const hours = Math.floor(duration.asHours());
    const minutes = duration.minutes();
    return minutes !== 0 ? `${hours}:${minutes}` : `${hours}:00`;
  }

  function getTimeSum(times: string[]) {
    const totalDuration = times.reduce((acc, time) => {
      const [hours, minutes] = time.split(":").map(Number);
      const duration = moment.duration({ hours, minutes });
      return acc.add(duration);
    }, moment.duration());

    let hours = Math.floor(totalDuration.asHours());
    let minutes = totalDuration.minutes();

    if (minutes >= 60) {
      hours += Math.floor(minutes / 60);
      minutes %= 60;
    }

    return minutes !== 0
      ? `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
      : `${hours}:00`;
  }

  function getDaysDifference(startDay: Date, endDay: Date) {
    const start = moment(startDay);
    const end = moment(endDay);
    return start.diff(end, "days");
  }

  function formatDate(date: string) {
    return moment(date, "YYYY-MM-DD").format("DD.MM.YYYY");
  }

  function getSchedule(schedule: any[]) {
    const times = schedule.map(([day, time]) => [time.from, time.to]);
    const timesDiff = times.map((time) => getTimeDifference(time[0], time[1]));
    return getTimeSum(timesDiff);
  }

  return (
    <>
      {isConfirmShown && (
        <ConfirmModal getConfirmation={handleShowConfirm} text={confirmText} />
      )}
      {isUpdateAdShown ? <UpdateAd setIsActive={handleUpdate} ad={ad} /> : null}
      <Card className={style.ad}>
        {isOwner && (
          <>
            <button onClick={showOwnerMenu} className={style.additionalMenu}>
              <span className={style.circle}></span>
              <span className={style.circle}></span>
              <span className={style.circle}></span>
            </button>
            <div className={style.ownerManage} ref={ownerMenu}>
              <button onClick={handleUpdate}>Update</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </>
        )}
        <b>Created by: </b>
        {ad.author}
        <br />
        <b>Study topic: </b>
        {ad.studyTopic}
        <br />
        <b>Level: </b>
        {ad.level}
        <br />
        <b>Description: </b>
        {ad.description}
        <br />
        <b>Study period: </b>
        {formatDate(ad.studyPeriodFrom)} – {formatDate(ad.studyPeriodTo)}(
        {getDaysDifference(new Date(ad.studyPeriodTo), new Date())} days left)
        <br />
        <b>Study schedule: </b>
        {getSchedule(Array.from(ad.studyTime.entries()))} hours per week
        <br />
        <b>Study time (UTC): </b>
        <div className={style.studyTime}>
          {Array.from(ad.studyTime.entries()).map(([day, time]) => (
            <div key={day}>
              <div>{`${day}`}</div>
              <div>|</div>
              <div>{` ${time.from} –  ${time.to}`}</div>
            </div>
          ))}
        </div>
        {isLoggedIn && (
          <div className="flex justify-end gap-2 h-9">
            <Button
              label="JOIN"
              btnType={ButtonsEnum.PRIMARY}
              onClick={() => {}}
            />
            <Button
              label="LEAVE"
              btnType={ButtonsEnum.SECONDARY}
              onClick={handleLeave}
            />
          </div>
        )}
      </Card>
    </>
  );
}
