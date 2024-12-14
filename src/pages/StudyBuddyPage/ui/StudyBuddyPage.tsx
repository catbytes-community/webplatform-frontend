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
      studyTopic: "Backend",
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
      studyTopic: "Other",
      level: "Medium",
      description:
        "Machine Learning with Python. Medium level, can do basic models",
      studyPeriodFrom: "2024-10-28",
      studyPeriodTo: "2024-12-25",
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
  const [isCreateAdShown, setIsCreateAdShown] = useState(false);

  useEffect(() => {
    setAds(adsDummy);
  }, []);

  function handleFilteredAds(filtered: IAd[]) {
    setFilteredAds(filtered);
  }
  function handleEmptyAds(filtered: boolean) {
    setIsEmptyFilter(filtered);
  }

  function showCreateModal() {
    setIsCreateAdShown(true);
  }

  function handleShowCreateAd(shown: boolean) {
    setIsCreateAdShown(shown);
  }

  return (
    <div className={style.studyBuddyContainer}>
      <h1 className="text-black text-xl my-10">Study Groups</h1>
      <div className={style.createStudyGroup}>
        <Button
          label="+ Create Study Group"
          btnType={ButtonsEnum.PRIMARY}
          onClick={showCreateModal}
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
          (filteredAds.length ? filteredAds : ads).map((ad) => <Ad key={ad.id} ad={ad} />)
        )}
      </div>
      {isCreateAdShown && <CreateAd setIsActive={handleShowCreateAd} />}
    </div>
  );
};
