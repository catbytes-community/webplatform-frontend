import { useState } from "react";
import { MentorApplication } from "../../../../app/types/global";
import Button, { ButtonsEnum } from "../../../../shared/ui/Button/Button";
import style from "./ApplicationBlock.module.css";
import ConfirmModal from "../../../../shared/ui/ConfirmModal/ConfirmModal";
// import axios from "axios";
// import { auth } from "../../../../firebaseConfig";
// import { Link } from "react-router-dom";

export const MentorApplicationBlock = ({
  application,
}: {
  application: MentorApplication;
}) => {
  const [isConfirmRejectShown, setIsConfirmRejectShown] = useState(false);
  const [isConfirmApproveShown, setIsConfirmApproveShown] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<number | null>(null);
//   const [comment, setComment] = useState("");

//   const getProfileLink = async (userId: string) => {
//     const response = await axios.get(
//       `${import.meta.env.VITE_DEVAPI}users/${userId}`,
//       {
//         withCredentials: true,
//       }
//     );
//     return response.data;
//   };

//   useEffect(() => {
//     if (application.modified_by) {
//       getProfileLink(application.modified_by).then((data) => {
//         setMentorUser({
//           id: data.id,
//           name: data.name,
//         });
//       });
//     }
//   }, [application.modified_by]);

  const handleReject = async (confirm: boolean) => {
    if(confirm) {
      alert(`Mentor application ${selectedApplication} rejected`)
    }
    
    //   const user = localStorage.getItem("user")
    //     ? JSON.parse(localStorage.getItem("user") as string)
    //     : null;

        // TODO: waiting for API to be ready
    //   if (!comment || comment === "") {
    //     alert("Please add a comment");
    //     return;
    //   } else {
        // try {
        //   await axios.put(
        //     `${import.meta.env.VITE_DEVAPI}applications/${application.id}`,
        //     {
        //       status: "rejected",
        //       comment: comment,
        //       user_id: user.id,
        //     },
        //     {
        //       withCredentials: true,
        //     }
        //   );

        //   alert("Application rejected");
        // //   setComment("");
        // } catch (error) {
        //   console.log(error);
        // }
    //   }
    setIsConfirmRejectShown(false);
    setSelectedApplication(null);
  };

  const handleApprove = async (confirm: boolean) => {
    if(confirm) {
      alert(`Mentor application ${selectedApplication} approved`)
    }
    
    //   const user = localStorage.getItem("user")
    //     ? JSON.parse(localStorage.getItem("user") as string)
    //     : null;

    // TODO: waiting for API to be ready
    //   try {
    //     const response = await axios.put(
    //       `${import.meta.env.VITE_DEVAPI}mentors/${application.mentor_id}`,
    //       {
    //         status: "approved",
    //         // user_id: user.id,
    //       },
    //       {
    //         withCredentials: true,
    //       }
    //     );

    //     if(response.status === 200) {
    //         alert("Mentor application approved");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     alert("Error approving mentor application. Please try again later")
    //   }
    setIsConfirmApproveShown(false);
    setSelectedApplication(null);
  };

  return (
    <>
      {isConfirmRejectShown && (
        <ConfirmModal
          getConfirmation={handleReject}
          text="Are you sure you want to reject the application?"
        />
      )}
      {isConfirmApproveShown && (
        <ConfirmModal
          getConfirmation={handleApprove}
          text="Are you sure you want to approve the application?"
        />
      )}
      <div
        data-id={application.mentor_id}
        className={`${style.application} w-[320px] sm:w-[500px]`}
      >
        <p>Name: {application.name}</p>
        <p>About: {application.about}</p>
        <p>Mentor status: {application.status}</p>
        {/* {application.status !== "pending" && (
          <div>
            <p>
              Modified by:{" "}
              <Link
                to={`/user_profile/${mentorUser?.id}`}
                className="underline text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {mentorUser?.name}
              </Link>
            </p>
          </div>
        )} */}
        {/* {application.status === "rejected" && (
          <p>Comment: {application.comment}</p>
        )} */}
        {application.status === "pending" ? (
          <div className={style.buttons}>
            <Button
              label="Reject"
              btnType={ButtonsEnum.SECONDARY}
              onClick={() => {
                setIsConfirmRejectShown(true);
                setSelectedApplication(application.mentor_id)
              }}
            ></Button>
            <Button
              label="Approve"
              btnType={ButtonsEnum.PRIMARY}
              onClick={() => {
                setIsConfirmApproveShown(true);
                setSelectedApplication(application.mentor_id)
              }}
            ></Button>
          </div>
        ) : (
          <div className="flex justify-end">
            <p className={`${application.status === 'rejected' ? 'bg-red-500' : application.status === 'inactive' ? 'bg-red-300' : 'bg-green-500'} p-1 rounded text-center font-bold text-white`}>
              {application.status.toUpperCase()}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
