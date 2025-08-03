import style from "./ApplicationsPage.module.css";
import { Application } from "../../../app/types/global";
import { useEffect, useState } from "react";
import { ApplicationBlock } from "../components/Application/ApplicationBlock";
import axios from "axios";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const ApplicationsPage = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get(`${import.meta.env.VITE_DEVAPI}applications`, {
          withCredentials: true,
        })
        .then((res) => {
          if (filter === "All") {
            setApplications(res.data.applications || []);
          } else if (filter === "Pending review") {
            setApplications(
              res.data.applications.filter(
                (application: Application) => application.status === "pending"
              )
            );
          } else if (filter === "Approved") {
            setApplications(
              res.data.applications.filter(
                (application: Application) => application.status === "approved"
              )
            );
          } else if (filter === "Rejected") {
            setApplications(
              res.data.applications.filter(
                (application: Application) => application.status === "rejected"
              )
            );
          }
          //
          // setApplications(res.data.applications || []);
        })
        .catch((error) => {
          console.error("Error fetching applications:", error);
          if (error.response?.status === 401) {

            signOut(auth)
              .then(() => {
                axios.post(
                  `${import.meta.env.VITE_DEVAPI}users/logout`,
                  {},
                  {
                    withCredentials: true,
                  }
                );
                localStorage.removeItem("user"); // Clear the user data from local storage
                navigate("/"); // Redirect to the home page
              })
              .catch((error) => {
                console.error(error);
              });

            window.location.href = "/login";
          }
        });
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }, [filter]);

  return (
    <>
      <Navbar />
      <div
        className={`font-montserrat flex flex-col items-center ${style.container}`}
      >
        <h1 className="font-bold mb-5 text-xl mt-10">Applications</h1>
        {/* below will be implement in later release
        <div className='flex gap-2 mt-5 mb-5'>
          <button className={style.filterButtons}>All</button>
          <button className={style.filterButtons}>Members</button>
          <button className={style.filterButtons}>Mentors</button>
        </div> */}
        <div className="w-full flex justify-center gap-1 sm:gap-5 p-5">
          <button
            className={`${style.filterButtons} ${filter === "All" ? "bg-black text-white" : ""
              }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`${style.filterButtons} ${filter === "Pending review" ? "bg-black text-white" : ""
              }`}
            onClick={() => setFilter("Pending review")}
          >
            Pending review
          </button>
          <button
            className={`${style.filterButtons} ${filter === "Approved" ? "bg-black text-white" : ""
              }`}
            onClick={() => setFilter("Approved")}
          >
            Approved
          </button>
          <button
            className={`${style.filterButtons} ${filter === "Rejected" ? "bg-black text-white" : ""
              }`}
            onClick={() => setFilter("Rejected")}
          >
            Rejected
          </button>
        </div>
        <div className="overflow-y-auto max-h-[70vh] flex flex-col gap-5 p-5">
          {applications?.map((application) => (
            <ApplicationBlock key={application.id} application={application} />
          ))}
        </div>
      </div>
    </>
  );
};
