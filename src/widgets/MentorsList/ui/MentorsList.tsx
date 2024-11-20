import { Card } from "../../../shared/ui"
import s from './MentorsList.module.css'
import { MentorsProps } from "../../../pages/MentorsPage/ui/MentorsPage"

export const MentorsList = ({mentors}: MentorsProps) => {
  if(mentors?.length === 0) {
    return <p className="mt-4">No mentors found</p>
  }
  return (
    <div className="flex flex-col gap-5">
      {mentors?.map(mentor => (
        <Card className={s.cardStyle} key={mentor?.id}>
            <div className="flex gap-5">
              <img className={s.mentorPhoto} src={mentor?.photo} alt="mentor_photo" />
              <div>
                <p className="mb-3.5">{mentor?.name} {mentor?.lastName}</p>
                <p className="text-xs mb-2">{mentor?.description}</p>
                <p className="text-xs mb-2">Experience: {mentor?.experience} years</p>
                <div className="flex gap-4 mb-2">
                  {mentor?.links?.telegram && <p className="text-xs">Telegram: <a href="">{mentor?.links?.telegram}</a></p>}
                  {mentor?.links?.discord && <p className="text-xs">Discord: <a href="">{mentor?.links?.discord}</a></p>}
                  {mentor?.links?.email && <p className="text-xs">Email: <a href="">{mentor?.links?.email}</a></p>}
                </div>
                <div className={s.experienceContainer}>
                    {mentor?.direction?.map((direction, ind) => (
                        <Card  key={ind} className={s.directionCardStyle} >
                            {direction}
                        </Card>
                    ))}
                </div>
              </div>
            
            </div>
        </Card>
    ))}
    </div>
  )
}
