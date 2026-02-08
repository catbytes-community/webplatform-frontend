import { Card } from "../../../shared/ui";
import s from "./MentorsList.module.css";
import { MentorsProps } from "../../../pages/MentorsPage/ui/MentorsPage";
import { Link } from "react-router-dom";
import { useUser } from "../../../shared/lib/customHooks/useUser";

export const MentorsList = ({ mentors }: MentorsProps) => {
  const userIdFromLocalStorage = localStorage.getItem("userId") ? Number(localStorage.getItem("userId")) : null;
  const { user } = useUser(userIdFromLocalStorage);
  const currentUser = user
    ? user
    : undefined;

  return (
    <div className="flex flex-col gap-5">
      {mentors?.map((mentor) => (
        <Card className={s.cardStyle} key={mentor?.mentor_id}>
          <div className={s.cardRows}>
            <img
              className={s.mentorPhoto}
              src={`https://robohash.org/${mentor.mentor_id}.png`}
              alt="mentor_photo"
            />
            <div>
              <p className="mb-3.5">
                {mentor?.name}
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

            {((mentor?.tags ?? []).length > 0) &&  
              <div className={`${s.tagsContainer}  h-fit`}>
                {mentor.tags?.map((tag, idx) => (
                  <span key={idx} 
                    className={`${s.tags} font-montserrat font-medium text-[#170103]`}>
                    {tag}
                  </span>
                ))}
              </div>}
        
          </div>
        </Card>
      ))}
    </div>
  );
};
