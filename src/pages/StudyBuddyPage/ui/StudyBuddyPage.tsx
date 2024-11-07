import Header from "../../../shared/ui/Header/Header";
import style from "./StudyBuddyPage.module.css";

export const StudyBuddyPage = () => {
  const ads = [
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
        ["Monday", { from: "19.00", to: "21.00" }],
        ["Saturday", { from: "12.00", to: "14.40" }],
        ["Sunday", { from: "12.00", to: "14.40" }],
      ]),
    },
  ];

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
      formattedMins -= 60;
    }
    return formattedMins !== 0
      ? `${formattedHours}.${formattedMins}`
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

  function displaySchedule(schedule: any[]) {
    const times = schedule.map(([day, time]) => [time.from, time.to]);
    const timesDiff = times.map((time) => getTimeDifference(time[0], time[1]));
    return getTimeSum(timesDiff);
  }

  return (
    <div className={style.header}>
      <Header text="Study Groups" />
      {ads.map((ad) => (
        <div key={ad.id}>
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
          {formatDate(ad.studyPeriodFrom)} – {formatDate(ad.studyPeriodTo)} (
          {getDaysDifference(new Date(ad.studyPeriodTo), new Date())} days left)
          <br />
          <b>Study schedule: </b>
          {displaySchedule(Array.from(ad.studyTime.entries()))} hours per week
          <br />
          <b>Study time (UTC): </b>
          {Array.from(ad.studyTime.entries()).map(([day, time]) => (
            <div>{`${day} | ${time.from} –  ${time.to}`}</div>
          ))}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};
