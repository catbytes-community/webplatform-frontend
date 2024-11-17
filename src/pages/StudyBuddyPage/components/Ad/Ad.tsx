import { Card } from "../../../../shared/ui";
import Button, { ButtonsEnum } from "../../../../shared/ui/Button/Button";
import style from "./ad.module.css";

export default function Ad({
  id,
  author,
  studyTopic,
  level,
  description,
  studyPeriodFrom,
  studyPeriodTo,
  daysLeft,
  studySchedule,
  studyTime,
}: {
  id: number;
  author: string;
  studyTopic: string;
  level: string;
  description: string;
  studyPeriodFrom: string;
  studyPeriodTo: string;
  daysLeft: number;
  studySchedule: string;
  studyTime: any;
}) {
  return (
    <Card className={style.ad}>
      <b>Created by: </b>
      {author}
      <br />
      <b>Study topic: </b>
      {studyTopic}
      <br />
      <b>Level: </b>
      {level}
      <br />
      <b>Description: </b>
      {description}
      <br />
      <b>Study period: </b>
      {studyPeriodFrom} – {studyPeriodTo} ({daysLeft} days left)
      <br />
      <b>Study schedule: </b>
      {studySchedule} hours per week
      <br />
      <b>Study time (UTC): </b>
      <div className={style.studyTime}>{studyTime}</div>
      <div className='flex justify-end gap-2 h-9'>
        <Button label="JOIN" btnType={ButtonsEnum.PRIMARY} onClick={() => {}} />
        <Button label="LEAVE" btnType={ButtonsEnum.SECONDARY} onClick={() => {}} />
      </div>
    </Card>
  );
}
