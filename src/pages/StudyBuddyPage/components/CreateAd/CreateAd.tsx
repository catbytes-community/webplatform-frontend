import Button, { ButtonsEnum } from "../../../../shared/ui/Button/Button";
import style from "./CreateAd.module.css";

export default function CreateAd() {
  const today = new Date().toISOString().slice(0, 10);

  function handleCancel(e: MouseEvent) {
    e.preventDefault();
    document.getElementById("form").reset();
  }

  return (
    <div className={style.createAd}>
      <form className={style.innerInfo} id="form">
        <h3 className="text-center">Create study group</h3>
        <div className={style.inputContainer}>
          <label htmlFor="studyTopic">
            Study topic<span className={style.asterisk}>*</span>
          </label>
          <select id="studyTopic" required>
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
          <textarea id="description"></textarea>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="level">
            Level<span className={style.asterisk}>*</span>
          </label>
          <select id="level" required>
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
          <input id="discord" type="text" required></input>
        </div>
        <p>Study period</p>
        <div className={`${style.inputContainer} ${style.checkboxContainer}`}>
          <input id="continuous" type="checkbox" name="Continuous" />
          <label htmlFor="continuous">Continuous</label>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="startDate">
            Start date<span className={style.asterisk}>*</span>
          </label>
          <input id="startDate" type="date" required min={today} />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="endDate">
            End date<span className={style.asterisk}>*</span>
          </label>
          <input id="endDate" type="date" required min={today} />
        </div>
        <div className={style.inputContainer}>
          <p>
            Week days<span className={style.asterisk}>*</span>
          </p>
          <div className={style.daysContainer}>
            <div className={style.checkboxContainer}>
              <input
                type="checkbox"
                name="weekday"
                value="Monday"
                id="monday"
              />
              <label htmlFor="monday">Monday</label>
              <div className={style.timesContainer}>
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
              />
              <label htmlFor="tuesday">Tuesday</label>
              <div className={style.timesContainer}>
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
              />
              <label htmlFor="wednesday">Wednesday</label>
              <div className={style.timesContainer}>
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
              />
              <label htmlFor="thursday">Thursday</label>
              <div className={style.timesContainer}>
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
              />
              <label htmlFor="friday">Friday</label>
              <div className={style.timesContainer}>
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
              />
              <label htmlFor="saturday">Saturday</label>
              <div className={style.timesContainer}>
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
              />
              <label htmlFor="sunday">Sunday</label>
              <div className={style.timesContainer}>
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
