import style from "./StudyBuddyPage.module.css";
import Ad from "../components/Ad/Ad";
import Button, { ButtonsEnum } from "../../../shared/ui/Button/Button";
import Filters from "../components/Ad/Filters/Filters";
import { useEffect, useState } from "react";
import CreateAd from "../components/CreateAd/CreateAd";

export interface IAd {
  id: number;
  author: string;
  studyTopic: string;
  level: string;
  description: string;
  studyPeriodFrom: string;
  studyPeriodTo: string;
  studyTime: Map<string, { from: string; to: string }>;
}

export const StudyBuddyPage = () => {
  const adsDummy: IAd[] = [
    {
      id: 1,
      author: "Jane Doe",
      studyTopic: "JavaScript",
      level: "Beginner",
      description: "I want to study js together",
      studyPeriodFrom: "2024-12-01",
      studyPeriodTo: "2025-01-31",
      studyTime: new Map([
        ["Monday", { from: "20.00", to: "21.30" }],
        ["Saturday", { from: "11.00", to: "13.00" }],
      ]),
    },
    {
      id: 2,
      author: "Ivan Ivanov",
      studyTopic: "Machine Learning with Python",
      level: "Medium",
      description: "Medium level, can do basic models",
      studyPeriodFrom: "2024-10-28",
      studyPeriodTo: "2024-12-15",
      studyTime: new Map([["Saturday", { from: "13.00", to: "15.00" }]]),
    },
    {
      id: 3,
      author: "Name Surname",
      studyTopic: "Web design",
      level: "Beginner",
      description: "Let's study and make amazing designs",
      studyPeriodFrom: "2024-11-10",
      studyPeriodTo: "2024-12-31",
      studyTime: new Map([
        ["Monday", { from: "19.00", to: "21.50" }],
        ["Tuesday", { from: "19.00", to: "21.40" }],
        ["Thursday", { from: "19.00", to: "22.15" }],
        ["Saturday", { from: "12.00", to: "14.40" }],
        ["Sunday", { from: "12.00", to: "14.40" }],
      ]),
    },
  ];
  const [ads, setAds] = useState<IAd[]>([]);
  const [filteredAds, setFilteredAds] = useState<IAd[]>([]);
  const [isEmptyFilter, setIsEmptyFilter] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  useEffect(() => {
    setAds(adsDummy);
  }, []);

  function getTimeDifference(startTime: string, endTime: string) {
    const [startHours, startMinutes] = startTime.split(".").map(Number);
    const [endHours, endMinutes] = endTime.split(".").map(Number);
    const start = new Date();
    start.setHours(startHours, startMinutes, 0);
    const end = new Date();
    end.setHours(endHours, endMinutes, 0);
    let diff = (end.getTime() - start.getTime()) / 1000;
    const hours = Math.floor(diff / 3600);
    diff %= 3600;
    const minutes = Math.floor(diff / 60);
    return minutes !== 0 ? `${hours}.${minutes}` : `${hours}.00`;
  }

  function getTimeSum(times: string[]) {
    let timesInMs = times.map((time) => {
      let [hours, minutes] = time.split(".").map(Number);
      const milliseconds = [hours * 3600 * 1000, minutes * 60 * 1000];
      return milliseconds;
    });
    const totalMilliseconds = timesInMs
      .reduce((acc, current) => {
        return acc.map((num, id) => num + current[id]);
      })
      .map((value) => value / 1000);
    let formattedHours = totalMilliseconds[0] / 3600;
    let formattedMins = totalMilliseconds[1] / 60;
    if (formattedMins >= 60) {
      formattedHours += Math.floor(formattedMins / 60);
      formattedMins -= 60 * Math.floor(formattedMins / 60);
    }
    return formattedMins !== 0
      ? `${formattedHours}.${
          formattedMins < 10 ? `0${formattedMins}` : formattedMins
        }`
      : `${formattedHours}`;
  }

  function getDaysDifference(startDay: Date, endDay: Date) {
    const diffInTime = startDay.getTime() - endDay.getTime();
    return Math.floor(diffInTime / (1000 * 3600 * 24));
  }

  function formatDate(date: string) {
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
  }

  function getSchedule(schedule: any[]) {
    const times = schedule.map(([day, time]) => [time.from, time.to]);
    const timesDiff = times.map((time) => getTimeDifference(time[0], time[1]));
    return getTimeSum(timesDiff);
  }
  function handleFilteredAds(filtered: IAd[]) {
    setFilteredAds(filtered);
  }
  function handleEmptyAds(filtered: boolean) {
    setIsEmptyFilter(filtered);
  }

  function showModal() {
    setIsModalShown(true);
  }

  function handleShowModal(shown: boolean) {
    setIsModalShown(shown);
  }

  return (
    <div className={style.studyBuddyContainer}>
      <h1 className="text-black text-xl my-10">Study Groups</h1>
      <div className={style.createStudyGroup}>
        <Button
          label="+ Create Study Group"
          btnType={ButtonsEnum.PRIMARY}
          onClick={showModal}
        />
      </div>
      <Filters
        ads={ads}
        onFilter={handleFilteredAds}
        isEmptyFilter={handleEmptyAds}
      />
      <div className="flex flex-col gap-4">
        {isEmptyFilter ? (
          <div className="text-center text-xl">No ads were found :(</div>
        ) : (
          (filteredAds.length ? filteredAds : ads).map((ad) => (
            <Ad
              key={ad.id}
              id={ad.id}
              author={ad.author}
              studyTopic={ad.studyTopic}
              level={ad.level}
              description={ad.description}
              studyPeriodFrom={formatDate(ad.studyPeriodFrom)}
              studyPeriodTo={formatDate(ad.studyPeriodTo)}
              daysLeft={getDaysDifference(
                new Date(ad.studyPeriodTo),
                new Date()
              )}
              studySchedule={getSchedule(Array.from(ad.studyTime.entries()))}
              studyTime={Array.from(ad.studyTime.entries()).map(
                ([day, time]) => (
                  <div key={day}>
                    <div>{`${day}`}</div>
                    <div>|</div>
                    <div>{` ${time.from} –  ${time.to}`}</div>
                  </div>
                )
              )}
            />
          ))
        )}
      </div>
      {isModalShown && <CreateAd setIsActive={handleShowModal}/>}
    </div>
  );
};
