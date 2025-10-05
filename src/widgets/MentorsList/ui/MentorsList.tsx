import { Card } from "../../../shared/ui";
import s from "./MentorsList.module.css";
import { MentorsProps } from "../../../pages/MentorsPage/ui/MentorsPage";
import { Link } from "react-router-dom";

export const MentorsList = ({ mentors }: MentorsProps) => {
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : undefined;

  return (
    <div className="flex flex-col gap-5">
      {mentors?.map((mentor) => (
        <Card className={s.cardStyle} key={mentor?.mentor_id}>
          <div className="flex gap-5">
            <img
              className={s.mentorPhoto}
              src={`https://robohash.org/${mentor.mentor_id}.png`}
              alt="mentor_photo"
            />
            <div>
              <p className="mb-3.5">
                {mentor?.name} {mentor?.lastName}
              </p>
              <p className="text-xs mb-2">{mentor?.description}</p>
              <p className="text-xs mb-2">{mentor?.about}</p>
              {currentUser && (
                <>
                  <p className="text-xs mb-2">
                    Status:{" "}
                    {mentor.status === "active" ? "Active 🟢 " : "Inactive ⚪"}
                  </p>
                  <Link
                    to={`/mentor_user_profile/${mentor?.mentor_id}`}
                    className="underline italic text-gray-500 text-sm"
                    target="_blank"
                  >
                    View mentor profile
                  </Link>
                </>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
