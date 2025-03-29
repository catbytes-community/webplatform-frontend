import { useEffect, useRef, useState } from "react";
import Button, { ButtonsEnum } from "../../../../shared/ui/Button/Button";
import style from "./UpdateAd.module.css";
import ConfirmModal from "../../../../shared/ui/ConfirmModal/ConfirmModal";
import { IAd } from "../../ui/StudyBuddyPage";
import moment from "moment";

export default function UpdateAd({
  setIsActive,
  ad,
}: {
  setIsActive: any;
  ad: IAd;
}) {
  const today = new Date().toISOString().slice(0, 10);
  const shortSchedule = {
    Monday: "mon",
    Tuesday: "tue",
    Wednesday: "wed",
    Thursday: "thur",
    Friday: "fri",
    Saturday: "sat",
    Sunday: "sun",
  };
  const daysOrder = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [studyTopic, setStudyTopic] = useState(ad.studyTopic);
  const [description, setDescription] = useState(ad.description);
  const [level, setLevel] = useState(ad.level);
  const [studyPeriodFrom, setStudyPeriodFrom] = useState(ad.studyPeriodFrom);
  const [studyPeriodTo, setStudyPeriodTo] = useState(ad.studyPeriodTo);
  const [isStudyPeriodContinuous, setStudyPeriodContinuous] = useState(
    !Boolean(ad.studyPeriodTo)
  );
  const [schedule, setSchedule] = useState<Map<string, object>>(ad.studyTime);
  const [isActive, setActive] = useState(true);
  const [isConfirmShown, setIsConfirmShown] = useState(false);
  const weekdaysRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    setStudyTopic(ad.studyTopic);
    setDescription(ad.description);
    setLevel(ad.level);
    setStudyPeriodFrom(ad.studyPeriodFrom);
    setStudyPeriodTo(ad.studyPeriodTo);
    setStudyPeriodContinuous(!Boolean(ad.studyPeriodTo));
    setSchedule(ad.studyTime);
    weekdaysRef.current = Array.from(document.getElementsByName("weekday"));
  }, [
    ad.studyTopic,
    ad.description,
    ad.level,
    ad.studyPeriodFrom,
    ad.studyPeriodTo,
    ad.studyTime,
  ]);

  useEffect(() => {
    weekdaysRef.current.forEach((weekday) => {
      if (weekday.checked) {
        const shortForm = shortSchedule[weekday.value];
        const dayTimeContainer = document.getElementById(shortForm);
        if (dayTimeContainer) {
          dayTimeContainer.style.display = "flex";
          const times = dayTimeContainer.getElementsByTagName("input");
          if (times[0]) {
            times[0].value = moment(
              ad.studyTime.get(weekday.value)?.from,
              "HH.mm"
            ).format("HH:mm");
          }
          if (times[1]) {
            times[1].value = moment(
              ad.studyTime.get(weekday.value)?.to,
              "HH.mm"
            ).format("HH:mm");
          }
        }
      }
    });
  }, [ad.studyTime]);

  function handleCancel(e: MouseEvent) {
    e.preventDefault();
    setIsConfirmShown(true);
  }
  function confirm(choice: boolean) {
    if (choice) {
      document.getElementById("form").reset();
      setIsConfirmShown(false);
      setIsActive(false);
      setActive(false);
    } else setIsConfirmShown(false);
  }

  function handleUpdate(e: MouseEvent) {
    e.preventDefault();
    setIsActive(false);
    setActive(false);
  }

  function handleOnChangeStudyTopic(topic: string) {
    setStudyTopic(topic);
  }
  function handleOnChangeDescription(description: string) {
    setDescription(description);
  }
  function handleOnChangeLevel(level: string) {
    setLevel(level);
  }
  function handleOnChangeStudyPeriodContinuous(periodContinuous: boolean) {
    setStudyPeriodContinuous(periodContinuous);
  }
  function handleOnChangeStudyPeriodFrom(studyPeriodFrom: string) {
    setStudyPeriodFrom(studyPeriodFrom);
  }
  function handleOnChangeStudyPeriodTo(studyPeriodTo: string) {
    setStudyPeriodTo(studyPeriodTo);
  }
  function handleOnChangeSchedule(weekday: HTMLInputElement) {
    const shortForm = shortSchedule[weekday.value];
    const dayTimeContainer = document.getElementById(shortForm);
    if (weekday.checked) {
      schedule.set(weekday.value, { from: "", to: "" });
      const newSchedule = Array.from(schedule.entries())
        .sort((a, b) => {
          return daysOrder.indexOf(a[0]) - daysOrder.indexOf(b[0]);
        })
        .reduce((acc, [key, value]) => {
          acc.set(key, value);
          return acc;
        }, new Map());
      setSchedule(newSchedule);

      dayTimeContainer.style.display = "flex";
    } else {
      schedule.delete(weekday.value);

      dayTimeContainer.style.display = "none";
    }
  }
  function handleOnChangeTimeFrom(timeFrom: HTMLInputElement) {
    const dayShort = timeFrom.id.replace("From", "");
    const day: string =
      Object.keys(shortSchedule).find(
        (key) => shortSchedule[key] === dayShort
      ) || "";
    setSchedule((prevSchedule) => {
      const newSchedule = new Map(prevSchedule);
      if (newSchedule.has(day)) {
        newSchedule.set(day, { from: timeFrom.value, to: "" });
      }
      return newSchedule;
    });
  }
  function handleOnChangeTimeTo(timeTo: HTMLInputElement) {
    const dayShort = timeTo.id.replace("To", "");
    const day: string =
      Object.keys(shortSchedule).find(
        (key) => shortSchedule[key] === dayShort
      ) || "";
    setSchedule((prevSchedule) => {
      const newSchedule = new Map(prevSchedule);
      if (newSchedule.has(day)) {
        const time = newSchedule.get(day);
        newSchedule.set(day, { from: time.from, to: timeTo.value });
      }
      return newSchedule;
    });
  }

  return (
    <div
      id="updateAd"
      className={`${style.updateAd} ${isActive && style.updateAdActive}`}
    >
      {isConfirmShown && (
        <ConfirmModal
          getConfirmation={confirm}
          text="Are you sure you want to close the window?"
        />
      )}
      <form className={style.innerInfo} id="form">
        <h3 className="text-center text-xl">Create study group</h3>
        <div className="flex flex-col">
          <label htmlFor="studyTopic">
            Study topic<span className={style.asterisk}>*</span>
          </label>
          <select
            id="studyTopic"
            required
            onChange={(e) => handleOnChangeStudyTopic(e.target.value)}
            value={ad.studyTopic}
          >
            <option value="Web development">Web development</option>
            <option value="Game development">Game development</option>
            <option value="Mobile development">Mobile development</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Web design">Web design</option>
            <option value="Software testing">Software testing</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description (optional)</label>
          <textarea
            id="description"
            onChange={(e) => handleOnChangeDescription(e.target.value)}
            value={ad.description}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="level">
            Level<span className={style.asterisk}>*</span>
          </label>
          <select
            id="level"
            required
            onChange={(e) => handleOnChangeLevel(e.target.value)}
            value={ad.level}
          >
            <option value="Zero experience">Zero experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <p>Study period</p>
        <div className="flex flex-col">
          <label htmlFor="startDate">
            Start date<span className={style.asterisk}>*</span>
          </label>
          <input
            id="startDate"
            type="date"
            required
            min={today}
            onChange={(e) => handleOnChangeStudyPeriodFrom(e.target.value)}
            value={ad.studyPeriodFrom}
          />
        </div>
        {!isStudyPeriodContinuous && (
          <div className="flex flex-col">
            <label htmlFor="endDate">
              End date<span className={style.asterisk}>*</span>
            </label>
            <input
              id="endDate"
              type="date"
              required
              min={today}
              onChange={(e) => handleOnChangeStudyPeriodTo(e.target.value)}
              value={studyPeriodTo}
            />
          </div>
        )}
        <div className="flex flex-row items-center gap-2 mt-1">
          <input
            id="continuous"
            type="checkbox"
            name="Continuous"
            onChange={(e) =>
              handleOnChangeStudyPeriodContinuous(e.target.checked)
            }
            checked={isStudyPeriodContinuous}
          />
          <label htmlFor="continuous">Continuous</label>
        </div>
        <div className="flex flex-col">
          <p>
            Week days<span className={style.asterisk}>*</span>
            <br />
          </p>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="weekday"
                  value="Monday"
                  id="monday"
                  onChange={(e) => handleOnChangeSchedule(e.target)}
                  checked={schedule.has("Monday")}
                />
                <label htmlFor="monday">Monday</label>
              </div>
              <div id="mon" className={style.timesContainer}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="monFrom">From</label>
                  <input
                    type="time"
                    required
                    id="monFrom"
                    onChange={(e) => handleOnChangeTimeFrom(e.target)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="monTo">To</label>
                  <input
                    type="time"
                    required
                    id="monTo"
                    min={
                      document.getElementById("monFrom") &&
                      document.getElementById("monFrom")?.value
                    }
                    onChange={(e) => handleOnChangeTimeTo(e.target)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="weekday"
                  value="Tuesday"
                  id="tuesday"
                  onChange={(e) => handleOnChangeSchedule(e.target)}
                  checked={schedule.has("Tuesday")}
                />
                <label htmlFor="tuesday">Tuesday</label>
              </div>
              <div id="tue" className={style.timesContainer}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="tueFrom">From</label>
                  <input
                    type="time"
                    required
                    id="tueFrom"
                    onChange={(e) => handleOnChangeTimeFrom(e.target)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="tueTo">To</label>
                  <input
                    type="time"
                    required
                    id="tueTo"
                    min={
                      document.getElementById("tueFrom") &&
                      document.getElementById("tueFrom")?.value
                    }
                    onChange={(e) => handleOnChangeTimeTo(e.target)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="weekday"
                  value="Wednesday"
                  id="wednesday"
                  onChange={(e) => handleOnChangeSchedule(e.target)}
                  checked={schedule.has("Wednesday")}
                />
                <label htmlFor="wednesday">Wednesday</label>
              </div>
              <div id="wed" className={style.timesContainer}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="wedFrom">From</label>
                  <input
                    type="time"
                    required
                    id="wedFrom"
                    onChange={(e) => handleOnChangeTimeFrom(e.target)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="wedTo">To</label>
                  <input
                    type="time"
                    required
                    id="wedTo"
                    min={
                      document.getElementById("wedFrom") &&
                      document.getElementById("wedFrom")?.value
                    }
                    onChange={(e) => handleOnChangeTimeTo(e.target)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="weekday"
                  value="Thursday"
                  id="thursday"
                  onChange={(e) => handleOnChangeSchedule(e.target)}
                  checked={schedule.has("Thursday")}
                />
                <label htmlFor="thursday">Thursday</label>
              </div>
              <div id="thur" className={style.timesContainer}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="thurFrom">From</label>
                  <input
                    type="time"
                    required
                    id="thurFrom"
                    onChange={(e) => handleOnChangeTimeFrom(e.target)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="thurTo">To</label>
                  <input
                    type="time"
                    required
                    id="thurTo"
                    min={
                      document.getElementById("thurTo") &&
                      document.getElementById("thurTo")?.value
                    }
                    onChange={(e) => handleOnChangeTimeTo(e.target)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="weekday"
                  value="Friday"
                  id="friday"
                  onChange={(e) => handleOnChangeSchedule(e.target)}
                  checked={schedule.has("Friday")}
                />
                <label htmlFor="friday">Friday</label>
              </div>
              <div id="fri" className={style.timesContainer}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="friFrom">From</label>
                  <input
                    type="time"
                    required
                    id="friFrom"
                    onChange={(e) => handleOnChangeTimeFrom(e.target)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="friTo">To</label>
                  <input
                    type="time"
                    required
                    id="friTo"
                    min={
                      document.getElementById("friFrom") &&
                      document.getElementById("friFrom")?.value
                    }
                    onChange={(e) => handleOnChangeTimeTo(e.target)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="weekday"
                  value="Saturday"
                  id="saturday"
                  onChange={(e) => handleOnChangeSchedule(e.target)}
                  checked={schedule.has("Saturday")}
                />
                <label htmlFor="saturday">Saturday</label>
              </div>
              <div id="sat" className={style.timesContainer}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="satFrom">From</label>
                  <input
                    type="time"
                    required
                    id="satFrom"
                    onChange={(e) => handleOnChangeTimeFrom(e.target)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="satTo">To</label>
                  <input
                    type="time"
                    required
                    id="satTo"
                    min={
                      document.getElementById("satFrom") &&
                      document.getElementById("satFrom")?.value
                    }
                    onChange={(e) => handleOnChangeTimeTo(e.target)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="weekday"
                  value="Sunday"
                  id="sunday"
                  onChange={(e) => handleOnChangeSchedule(e.target)}
                  checked={schedule.has("Sunday")}
                />
                <label htmlFor="sunday">Sunday</label>
              </div>
              <div id="sun" className={style.timesContainer}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="sunFrom">From</label>
                  <input
                    type="time"
                    required
                    id="sunFrom"
                    onChange={(e) => handleOnChangeTimeFrom(e.target)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="sunTo">To</label>
                  <input
                    type="time"
                    required
                    id="sunTo"
                    min={
                      document.getElementById("sunFrom") &&
                      document.getElementById("sunFrom")?.value
                    }
                    onChange={(e) => handleOnChangeTimeTo(e.target)}
                  />
                </div>
              </div>
            </div>
            <span className={style.warning}>required timezone: UTC +0</span>
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          <Button
            btnType={ButtonsEnum.SECONDARY}
            onClick={(e) => handleCancel(e)}
            label="Cancel"
          />
          <Button
            btnType={ButtonsEnum.PRIMARY}
            onClick={(e) => handleUpdate(e)}
            label="Update"
          />
        </div>
      </form>
    </div>
  );
}
