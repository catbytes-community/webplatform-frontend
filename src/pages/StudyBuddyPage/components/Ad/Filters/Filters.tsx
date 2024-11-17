import style from "./Filters.module.css";
import { useRef } from "react";

export default function Filters() {
  const LevelDropdownRef = useRef<HTMLDivElement | null>(null);
  const DaysDropdownRef = useRef<HTMLDivElement | null>(null);
  const TimesDropdownRef = useRef<HTMLDivElement | null>(null);

  function toggleDropdown(element) {
    if (element.current) {
      if (element.current.style.display === "block") {
        element.current.style.display = "none";
        return;
      }
      element.current.style.display = "block";
    }
  }
  return (
    <div className="relative flex gap-2 my-4">
      <button className={`${style.filterButton_active} ${style.filterButton}`}>
        All
      </button>
      <button className={style.filterButton}>Study topic ▼</button>
      <button onClick={()=>toggleDropdown(LevelDropdownRef)} className={style.filterButton}>
        Level ▼
      </button>
      <div
        ref={LevelDropdownRef}
        className={`${style.filterDropdown} ${style.filterLevelDropdown}`}
      >
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="Zero experience"
            name="days"
            value="Zero experience"
          />
          <label htmlFor="Zero experience">Zero experience</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="Beginner" name="days" value="Beginner" />
          <label htmlFor="Beginner">Beginner</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="Medium" name="days" value="Medium" />
          <label htmlFor="Medium">Medium</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="High" name="days" value="High" />
          <label htmlFor="High">High</label>
        </div>
      </div>
      <button
        onClick={()=>toggleDropdown(DaysDropdownRef)}
        className={style.filterButton}
      >
        Study days ▼
      </button>
      <div ref={DaysDropdownRef} className={`${style.filterDropdown} ${style.filterDaysDropdown}`}>
        <div className="flex gap-2">
          <input type="checkbox" id="Monday" name="days" value="Monday" />
          <label htmlFor="Monday">Monday</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="Tuesday" name="days" value="Tuesday" />
          <label htmlFor="Tuesday">Tuesday</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="Wednesday" name="days" value="Wednesday" />
          <label htmlFor="Wednesday">Wednesday</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="Thursday" name="days" value="Thursday" />
          <label htmlFor="Thursday">Thursday</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="Friday" name="days" value="Friday" />
          <label htmlFor="Friday">Friday</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="Saturday" name="days" value="Saturday" />
          <label htmlFor="Saturday">Saturday</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="Sunday" name="days" value="Sunday" />
          <label htmlFor="Sunday">Sunday</label>
        </div>
      </div>
      <button
        onClick={()=>toggleDropdown(TimesDropdownRef)}
        className={style.filterButton}
      >
        Study times ▼
      </button>
      <div ref={TimesDropdownRef} className={`${style.filterDropdown} ${style.filterTimesDropdown}`}>
        <div className="flex gap-2">
          <input type="checkbox" id="Morning" name="days" value="Morning" />
          <label htmlFor="Morning">Morning</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="Day" name="days" value="Day" />
          <label htmlFor="Day">Day</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="Evening" name="days" value="Evening" />
          <label htmlFor="Evening">Evening</label>
        </div>
      </div>
    </div>
  );
}
