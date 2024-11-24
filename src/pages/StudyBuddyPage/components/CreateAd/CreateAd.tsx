import { useState } from "react";
import Button, { ButtonsEnum } from "../../../../shared/ui/Button/Button";
import style from "./CreateAd.module.css";

export default function CreateAd({ setIsActive }: { setIsActive: any }) {
  const today = new Date().toISOString().slice(0, 10);
  const shortWeekDays = {
    Monday: "mon",
    Tuesday: "tue",
    Wednesday: "wed",
    Thursday: "thur",
    Friday: "fri",
    Saturday: "sat",
    Sunday: "sun",
  };
  const [studyTopic, setStudyTopic] = useState("Web development");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("Zero experience");
  const [discordName, setDiscordName] = useState("");
  const [isStudyPeriodContinuous, setStudyPeriodContinuous] = useState(false);
  const [studyPeriodFrom, setStudyPeriodFrom] = useState("");
  const [studyPeriodTo, setStudyPeriodTo] = useState("");
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [isActive, setActive] = useState(true);

  function handleCancel(e: MouseEvent) {
    e.preventDefault();
    document.getElementById("form").reset();
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
  function handleOnChangeDiscordName(discord: string) {
    setDiscordName(discord);
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
  function handleOnChangeWeekDays(weekday: HTMLInputElement) {
    if (weekday.checked) {
      weekDays.push(weekday.value);
      const shortForm = shortWeekDays[weekday.value];
      const dayTimeContainer = document.getElementById(shortForm);
      dayTimeContainer.style.display = "flex";
      console.log(dayTimeContainer);
    } else {
      const index = weekDays.indexOf(weekday.value);
      weekDays.splice(index, 1);
      const shortForm = shortWeekDays[weekday.value];
      const dayTimeContainer = document.getElementById(shortForm);
      dayTimeContainer.style.display = "none";
    }
  }

  return (
    <div className={`${style.createAd} ${isActive && style.createAdActive}`}>
      <form className={style.innerInfo} id="form">
        <h3 className="text-center text-xl">Create study group</h3>
        <div className={style.inputContainer}>
          <label htmlFor="studyTopic">
            Study topic<span className={style.asterisk}>*</span>
          </label>
          <select
            id="studyTopic"
            required
            onChange={(e) => handleOnChangeStudyTopic(e.target.value)}
          >
            <option value="Web development">Web development</option>
            <option value="Game development">Game development</option>
            <option value="Mobile development">Mobile development</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Web design">Web design</option>
            <option value="Software testing">Software testing</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="description">Description (optional)</label>
          <textarea
            id="description"
            onChange={(e) => handleOnChangeDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="level">
            Level<span className={style.asterisk}>*</span>
          </label>
          <select
            id="level"
            required
            onChange={(e) => handleOnChangeLevel(e.target.value)}
          >
            <option value="Zero experience">Zero experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="discord">
            Discord nickname<span className={style.asterisk}>*</span>
          </label>
          <input
            id="discord"
            type="text"
            required
            onChange={(e) => handleOnChangeDiscordName(e.target.value)}
          ></input>
        </div>
        <p>Study period</p>
        <div className={`${style.inputContainer} ${style.checkboxContainer}`}>
          <input
            id="continuous"
            type="checkbox"
            name="Continuous"
            onChange={(e) =>
              handleOnChangeStudyPeriodContinuous(e.target.checked)
            }
          />
          <label htmlFor="continuous">Continuous</label>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="startDate">
            Start date<span className={style.asterisk}>*</span>
          </label>
          <input
            id="startDate"
            type="date"
            required
            min={today}
            onChange={(e) => handleOnChangeStudyPeriodFrom(e.target.value)}
          />
        </div>
        {!isStudyPeriodContinuous && (
          <div className={style.inputContainer}>
            <label htmlFor="endDate">
              End date<span className={style.asterisk}>*</span>
            </label>
            <input
              id="endDate"
              type="date"
              required
              min={today}
              onChange={(e) => handleOnChangeStudyPeriodTo(e.target.value)}
            />
          </div>
        )}
        <div className={style.inputContainer}>
          <p>
            Week days<span className={style.asterisk}>*</span><br/>
            <span className={style.warning}>required timezone: UTC</span>
          </p>
          <div className={style.daysContainer}>
            <div className={style.checkboxContainer}>
              <input
                type="checkbox"
                name="weekday"
                value="Monday"
                id="monday"
                onChange={(e) => handleOnChangeWeekDays(e.target)}
              />
              <label htmlFor="monday">Monday</label>
              <div id="mon" className={style.timesContainer}>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="monFrom">From</label>
                  <input type="time" required id="monFrom" />
                </div>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="monTo">To</label>
                  <input type="time" required id="monTo" />
                </div>
              </div>
            </div>
            <div className={style.checkboxContainer}>
              <input
                type="checkbox"
                name="weekday"
                value="Tuesday"
                id="tuesday"
                onChange={(e) => handleOnChangeWeekDays(e.target)}
              />
              <label htmlFor="tuesday">Tuesday</label>
              <div id="tue" className={style.timesContainer}>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="tueFrom">From</label>
                  <input type="time" required id="tueFrom" />
                </div>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="tueTo">To</label>
                  <input type="time" required id="tueTo" />
                </div>
              </div>
            </div>
            <div className={style.checkboxContainer}>
              <input
                type="checkbox"
                name="weekday"
                value="Wednesday"
                id="wednesday"
                onChange={(e) => handleOnChangeWeekDays(e.target)}
              />
              <label htmlFor="wednesday">Wednesday</label>
              <div id="wed" className={style.timesContainer}>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="wedFrom">From</label>
                  <input type="time" required id="wedFrom" />
                </div>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="wedTo">To</label>
                  <input type="time" required id="wedTo" />
                </div>
              </div>
            </div>
            <div className={style.checkboxContainer}>
              <input
                type="checkbox"
                name="weekday"
                value="Thursday"
                id="thursday"
                onChange={(e) => handleOnChangeWeekDays(e.target)}
              />
              <label htmlFor="thursday">Thursday</label>
              <div id="thur" className={style.timesContainer}>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="thurFrom">From</label>
                  <input type="time" required id="thurFrom" />
                </div>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="thurTo">To</label>
                  <input type="time" required id="thurTo" />
                </div>
              </div>
            </div>
            <div className={style.checkboxContainer}>
              <input
                type="checkbox"
                name="weekday"
                value="Friday"
                id="friday"
                onChange={(e) => handleOnChangeWeekDays(e.target)}
              />
              <label htmlFor="friday">Friday</label>
              <div id="fri" className={style.timesContainer}>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="friFrom">From</label>
                  <input type="time" required id="friFrom" />
                </div>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="friTo">To</label>
                  <input type="time" required id="friTo" />
                </div>
              </div>
            </div>
            <div className={style.checkboxContainer}>
              <input
                type="checkbox"
                name="weekday"
                value="Saturday"
                id="saturday"
                onChange={(e) => handleOnChangeWeekDays(e.target)}
              />
              <label htmlFor="saturday">Saturday</label>
              <div id="sat" className={style.timesContainer}>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="satFrom">From</label>
                  <input type="time" required id="satFrom" />
                </div>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="satTo">To</label>
                  <input type="time" required id="satTo" />
                </div>
              </div>
            </div>
            <div className={style.checkboxContainer}>
              <input
                type="checkbox"
                name="weekday"
                value="Sunday"
                id="sunday"
                onChange={(e) => handleOnChangeWeekDays(e.target)}
              />
              <label htmlFor="sunday">Sunday</label>
              <div id="sun" className={style.timesContainer}>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="sunFrom">From</label>
                  <input type="time" required id="sunFrom" />
                </div>
                <div
                  className={`${style.inputContainer} ${style.timeContainer}`}
                >
                  <label htmlFor="sunTo">To</label>
                  <input type="time" required id="sunTo" />
                </div>
              </div>
            </div>
            <div className={style.buttons}>
              <Button
                btnType={ButtonsEnum.SECONDARY}
                onClick={(e) => handleCancel(e)}
                label="Cancel"
              />
              <Button
                btnType={ButtonsEnum.PRIMARY}
                onClick={() => {}}
                label="Create"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
