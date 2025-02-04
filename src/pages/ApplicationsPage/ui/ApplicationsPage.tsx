import style from "./ApplicationsPage.module.css";
import { Application } from "../../../app/types/global";
import { useEffect, useState } from "react";
import { ApplicationBlock } from "../components/Application/ApplicationBlock";
import axios from "axios";

export const ApplicationsPage = () => {
  const [applications, setApplications] = useState<Application[]>();

  const apps: Application[] = [
    {
      id: 1,
      name: "Marina Kim",
      about: "I’m a nice cat-loving person, want to study programming!",
      video_link: "https://link.com/video/123",
      discord_username: "SampleUsername",
      created_at: "2024-11-23T16:37:04.115Z",
      email: "jane@example.com",
    },
    {
      id: 2,
      name: "Ivanka Samoylova",
      about: "I’m a nice cat-loving person, want to study programming!",
      video_link: "https://link.com/video/123",
      discord_username: "discordik",
      created_at: "2024-11-23T16:37:04.115Z",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Jane Doe",
      about: "I’m a nice cat-loving person, want to study programming!",
      video_link: "https://link.com/video/123",
      discord_username: "username",
      created_at: "2024-11-23T16:37:04.115Z",
      email: "jane@example.com",
    },
  ];

  useEffect(() => {
    try {
      axios
        .get("https://devapi.catbytes.io/applications")
        .then((res) => {
          setApplications(res.data);
        })
        .catch((error) => {
          setApplications(apps);
          console.error("Error fetching applications:", error);
        });
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }, []);

  return (
    <>
      <div className={style.applicationsContainer}>
        <h1 className="font-bold">Applications</h1>
        <div className={style.filters}>
          <button>All</button>
          <button>Members</button>
          <button>Mentors</button>
        </div>
        <div className="applications">
          {applications?.map((application) => (
            <ApplicationBlock key={application.id} application={application} />
          ))}
        </div>
      </div>
    </>
  );
};
