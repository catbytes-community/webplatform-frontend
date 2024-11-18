import style from "./Filters.module.css";
import { useState, useRef, useEffect } from "react";
import { IAd } from "../../../ui/StudyBuddyPage";

export default function Filters({
  ads,
  onFilter,
  isEmptyFilter,
}: {
  ads: IAd[];
  onFilter: any;
  isEmptyFilter: any;
}) {
  const [filteredAds, setFilteredAds] = useState<IAd[]>(ads);
  const LevelDropdownRef = useRef<HTMLDivElement | null>(null);
  const DaysDropdownRef = useRef<HTMLDivElement | null>(null);
  const TimesDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    onFilter(filteredAds);
  }, [filteredAds, onFilter]);

  function toggleDropdown(element: any) {
    if (element.current) {
      if (element.current.style.display === "block") {
        element.current.style.display = "none";
        return;
      }
      element.current.style.display = "block";
    }
  }
  function filter(filterGroup: string) {
    let checkboxes = document.getElementsByName(filterGroup);
    let checked: string[] = [];
    for (let checkbox of checkboxes) {
      if (checkbox.checked) checked.push(checkbox.value);
    }
    let filtered: IAd[] = [];
    if (checked.length) {
      switch (filterGroup) {
        case "level": {
          filtered = ads.filter((ad) => checked.includes(ad.level));
          break;
        }
        case "days": {
          filtered = ads.filter((ad) =>
            checked.some((check) => ad.studyTime.has(check))
          );
          break;
        }
        case "times": {
          const morning = ["06.00", "07.00", "08.00", "09.00", "10.00", "11.00"];
          const day = ["12.00", "13.00", "14.00", "15.00", "16.00", "17.00"];
          const evening = ["18.00", "19.00", "20.00", "21.00", "22.00", "23.00"];
          filtered = ads.filter((ad) => {
            return Array.from(ad.studyTime.values()).some((time) => {
              const isMorning = checked.includes("Morning") && morning.includes(time.from);
              const isDay = checked.includes("Day") && day.includes(time.from);
              const isEvening = checked.includes("Evening") && evening.includes(time.from);
              return isMorning || isDay || isEvening;
            });
          });
          break;
        }
      }
      setFilteredAds(filtered);
      isEmptyFilter(!Boolean(filtered.length));
    } else {
      setFilteredAds([]);
      isEmptyFilter(false);
    }
  }

  return (
    <div className="relative flex gap-2 my-4">
      <button className={`${style.filterButton_active} ${style.filterButton}`}>
        All
      </button>
      <button className={style.filterButton}>Study topic ▼</button>
      <button
        onClick={() => toggleDropdown(LevelDropdownRef)}
        className={style.filterButton}
      >
        Level ▼
      </button>
      <div
        ref={LevelDropdownRef}
        className={`${style.filterDropdown} ${style.filterLevelDropdown}`}
      >
        <div className="flex gap-2">
          <input
            onChange={() => filter("level")}
            type="checkbox"
            id="Zero experience"
            name="level"
            value="Zero experience"
          />
          <label htmlFor="Zero experience">Zero experience</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={() => filter("level")}
            type="checkbox"
            id="Beginner"
            name="level"
            value="Beginner"
          />
          <label htmlFor="Beginner">Beginner</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={() => filter("level")}
            type="checkbox"
            id="Medium"
            name="level"
            value="Medium"
          />
          <label htmlFor="Medium">Medium</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={() => filter("level")}
            type="checkbox"
            id="High"
            name="level"
            value="High"
          />
          <label htmlFor="High">High</label>
        </div>
      </div>
      <button
        onClick={() => toggleDropdown(DaysDropdownRef)}
        className={style.filterButton}
      >
        Study days ▼
      </button>
      <div
        ref={DaysDropdownRef}
        className={`${style.filterDropdown} ${style.filterDaysDropdown}`}
      >
        <div className="flex gap-2">
          <input
            onChange={() => filter("days")}
            type="checkbox"
            id="Monday"
            name="days"
            value="Monday"
          />
          <label htmlFor="Monday">Monday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={() => filter("days")}
            type="checkbox"
            id="Tuesday"
            name="days"
            value="Tuesday"
          />
          <label htmlFor="Tuesday">Tuesday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={() => filter("days")}
            type="checkbox"
            id="Wednesday"
            name="days"
            value="Wednesday"
          />
          <label htmlFor="Wednesday">Wednesday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={() => filter("days")}
            type="checkbox"
            id="Thursday"
            name="days"
            value="Thursday"
          />
          <label htmlFor="Thursday">Thursday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={() => filter("days")}
            type="checkbox"
            id="Friday"
            name="days"
            value="Friday"
          />
          <label htmlFor="Friday">Friday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={() => filter("days")}
            type="checkbox"
            id="Saturday"
            name="days"
            value="Saturday"
          />
          <label htmlFor="Saturday">Saturday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={() => filter("days")}
            type="checkbox"
            id="Sunday"
            name="days"
            value="Sunday"
          />
          <label htmlFor="Sunday">Sunday</label>
        </div>
      </div>
      <button
        onClick={() => toggleDropdown(TimesDropdownRef)}
        className={style.filterButton}
      >
        Study times ▼
      </button>
      <div
        ref={TimesDropdownRef}
        className={`${style.filterDropdown} ${style.filterTimesDropdown}`}
      >
        <div className="flex gap-2">
          <input
            onChange={() => filter("times")}
            type="checkbox"
            id="Morning"
            name="times"
            value="Morning"
          />
          <label htmlFor="Morning">Morning</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={() => filter("times")}
            type="checkbox"
            id="Day"
            name="times"
            value="Day"
          />
          <label htmlFor="Day">Day</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={() => filter("times")}
            type="checkbox"
            id="Evening"
            name="times"
            value="Evening"
          />
          <label htmlFor="Evening">Evening</label>
        </div>
      </div>
    </div>
  );
}
