import style from "./Filters.module.css";
import { useState, useRef, useEffect } from "react";
import { IAd } from "../../../ui/StudyBuddyPage";

export default function Filters({
  ads,
  onFilter,
  isAdsFound,
}: {
  ads: IAd[];
  onFilter: (value: IAd[]) => void;
  isAdsFound: (value: boolean) => void;
}) {
  const [filteredAds, setFilteredAds] = useState<IAd[]>(ads);
  const TopicDropdownRef = useRef<HTMLDivElement | null>(null);
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

  function filter() {
    const topicCheckboxes = document.getElementsByName("topic");
    const levelCheckboxes = document.getElementsByName("level");
    const dayCheckboxes = document.getElementsByName("days");
    const timeCheckboxes = document.getElementsByName("times");

    const checkedTopics: string[] = [];
    const checkedLevels: string[] = [];
    const checkedDays: string[] = [];
    const checkedTimes: string[] = [];

    for (let checkbox of topicCheckboxes)
      if (checkbox.checked) checkedTopics.push(checkbox.value);

    for (let checkbox of levelCheckboxes)
      if (checkbox.checked) checkedLevels.push(checkbox.value);

    for (let checkbox of dayCheckboxes)
      if (checkbox.checked) checkedDays.push(checkbox.value);

    for (let checkbox of timeCheckboxes)
      if (checkbox.checked) checkedTimes.push(checkbox.value);
    
    const morning = ["06.00", "07.00", "08.00", "09.00", "10.00", "11.00"];
    const day = ["12.00", "13.00", "14.00", "15.00", "16.00", "17.00"];
    const evening = ["18.00", "19.00", "20.00", "21.00", "22.00", "23.00"];

    const filtered = ads.filter((ad) => {
      const matchesTopics =
        !checkedTopics.length || checkedTopics.includes(ad.studyTopic);
      const matchesLevel =
        !checkedLevels.length || checkedLevels.includes(ad.level);
      const matchesDay =
        !checkedDays.length ||
        checkedDays.some((check) => ad.studyTime.has(check));
      const matchesTime =
        !checkedTimes.length ||
        Array.from(ad.studyTime.values()).some((time) => {
          const isMorning =
            checkedTimes.includes("Morning") && morning.includes(time.from);
          const isDay = checkedTimes.includes("Day") && day.includes(time.from);
          const isEvening =
            checkedTimes.includes("Evening") && evening.includes(time.from);
          return isMorning || isDay || isEvening;
        });
      return matchesTopics && matchesLevel && matchesDay && matchesTime;
    });
    setFilteredAds(filtered);
    isAdsFound(!Boolean(filtered.length));
  }

  function cancelFilters() {
    setFilteredAds(ads);
    isAdsFound(false);

    const levelCheckboxes = document.getElementsByName("level");
    const dayCheckboxes = document.getElementsByName("days");
    const timeCheckboxes = document.getElementsByName("times");

    for (let checkbox of levelCheckboxes) checkbox.checked = false;

    for (let checkbox of dayCheckboxes) checkbox.checked = false;

    for (let checkbox of timeCheckboxes) checkbox.checked = false;
  }

  return (
    <div className="relative flex gap-2 my-4">
      <button
        onClick={cancelFilters}
        className={`${style.filterButton_active} ${style.filterButton}`}
      >
        All
      </button>
      <button
        onClick={() => toggleDropdown(TopicDropdownRef)}
        className={`${style.filterButton} ${style.filterTopicButton}`}
      >
        Study topic ▼
      </button>
      <div
        ref={TopicDropdownRef}
        className={`${style.filterDropdown} ${style.filterTopicDropdown}`}
      >
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Webdev"
            name="topic"
            value="Web development"
          />
          <label htmlFor="Webdev">Web development</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Gamedev"
            name="topic"
            value="Game development"
          />
          <label htmlFor="Gamedev">Game development</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Mobiledev"
            name="topic"
            value="Mobile development"
          />
          <label htmlFor="Mobiledev">Mobile development</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Frontend"
            name="topic"
            value="Frontend"
          />
          <label htmlFor="Frontend">Frontend</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Backend"
            name="topic"
            value="Backend"
          />
          <label htmlFor="Backend">Backend</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Design"
            name="topic"
            value="Web design"
          />
          <label htmlFor="Design">Web design</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Testing"
            name="topic"
            value="Software testing"
          />
          <label htmlFor="Testing">Software testing</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Other"
            name="topic"
            value="Other"
          />
          <label htmlFor="Other">Other</label>
        </div>
      </div>
      <button
        onClick={() => toggleDropdown(LevelDropdownRef)}
        className={`${style.filterButton} ${style.filterLevelButton}`}
      >
        Level ▼
      </button>
      <div
        ref={LevelDropdownRef}
        className={`${style.filterDropdown} ${style.filterLevelDropdown}`}
      >
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Zero experience"
            name="level"
            value="Zero experience"
          />
          <label htmlFor="Zero experience">Zero experience</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Beginner"
            name="level"
            value="Beginner"
          />
          <label htmlFor="Beginner">Beginner</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Medium"
            name="level"
            value="Medium"
          />
          <label htmlFor="Medium">Medium</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
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
        className={`${style.filterButton} ${style.filterDaysButton}`}
      >
        Study days ▼
      </button>
      <div
        ref={DaysDropdownRef}
        className={`${style.filterDropdown} ${style.filterDaysDropdown}`}
      >
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Monday"
            name="days"
            value="Monday"
          />
          <label htmlFor="Monday">Monday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Tuesday"
            name="days"
            value="Tuesday"
          />
          <label htmlFor="Tuesday">Tuesday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Wednesday"
            name="days"
            value="Wednesday"
          />
          <label htmlFor="Wednesday">Wednesday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Thursday"
            name="days"
            value="Thursday"
          />
          <label htmlFor="Thursday">Thursday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Friday"
            name="days"
            value="Friday"
          />
          <label htmlFor="Friday">Friday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Saturday"
            name="days"
            value="Saturday"
          />
          <label htmlFor="Saturday">Saturday</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
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
        className={`${style.filterButton} ${style.filterTimesButton}`}
      >
        Study times ▼
      </button>
      <div
        ref={TimesDropdownRef}
        className={`${style.filterDropdown} ${style.filterTimesDropdown}`}
      >
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Morning"
            name="times"
            value="Morning"
          />
          <label htmlFor="Morning">Morning</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
            type="checkbox"
            id="Day"
            name="times"
            value="Day"
          />
          <label htmlFor="Day">Day</label>
        </div>
        <div className="flex gap-2">
          <input
            onChange={filter}
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
