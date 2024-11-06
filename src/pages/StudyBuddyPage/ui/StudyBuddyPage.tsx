import Header from "../../../shared/ui/Header/Header";
import style from "./StudyBuddyPage.module.css";

export const StudyBuddyPage = () => {
  const ads = [
    {
      id: 1,
      author: 'Jane Doe',
      studyTopic: 'JavaScript',
      level: 'Beginner',
      description: 'I want to study js together',
      studyPeriodFrom: '01.12.2024',
      studyPeriodTo: '31.01.2025',
      studyTime: new Map([
        ['Monday', { from: '20.00', to: '21.30' }],
        ['Saturday', { from: '11.00', to: '13.00' }]
      ])
    },
    {
      id: 2,
      author: 'Ivan Ivanov',
      studyTopic: 'Machine Learning with Python',
      level: 'Medium',
      description: 'Medium level, can do basic models',
      studyPeriodFrom: '28.10.2024',
      studyPeriodTo: '15.12.2024',
      studyTime: new Map([
        ['Saturday', { from: '13.00', to: '15.00' }]
      ])
    },
    {
      id: 3,
      author: 'Name Surname',
      studyTopic: 'Web design',
      level: 'Beginner',
      description: 'I want to study js together',
      studyPeriodFrom: '01.12.2024',
      studyPeriodTo: '31.01.2025',
      studyTime: new Map([
        ['Monday', { from: '19.00', to: '21.00' }],
        ['Saturday', { from: '12.00', to: '14.40' }],
        ['Sunday', { from: '12.00', to: '14.40' }]
      ])
    },
  ];

  return (
    <div className={style.header}>
      <Header text='Study Groups' />
    </div>
  );
};
