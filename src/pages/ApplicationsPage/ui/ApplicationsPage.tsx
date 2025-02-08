import style from "./ApplicationsPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import { Application } from "../../../app/types/global";
import { ApplicationBlock } from "../components/Application/ApplicationBlock";

export const ApplicationsPage = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    try {
      axios
        .get(`${import.meta.env.VITE_DEVAPI}applications`, {
          withCredentials: true,
        })
        .then((res) => {
          setApplications(res.data.applications || []);
        })
        .catch((error) => {
          console.error("Error fetching applications:", error);
        });
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className={style.applicationsContainer}>
        <h1 className="font-bold mb-5 text-xl">Applications</h1>
        {/* below will be implement in later release
        <div className='flex gap-2 mt-5 mb-5'>
          <button className={style.filterButtons}>All</button>
          <button className={style.filterButtons}>Members</button>
          <button className={style.filterButtons}>Mentors</button>
        </div> */}
        <div className="applications">
          {applications?.map((application) => (
            <ApplicationBlock key={application.id} application={application} />
          ))}
        </div>
      </div>
    </>
  );
};
