import { mentorsData } from "../../../pages/MentorsPage/api/dummyMentorsData"
import { Card } from "../../../shared/ui"
import s from './MentorsList.module.css'

export const MentorsList = () => {
  return (
    <>
      {mentorsData?.map(mentor => (
        <Card className={s.cardStyle} key={mentor?.id}>
            <div className="flex gap-5">
              <img className={s.mentorPhoto} src={mentor?.photo} alt="mentor_photo" />
              <div>
                <p className="">Name: {mentor?.name}</p>
                <p>Last Name: {mentor?.lastName}</p>
                <p>Experience: {mentor?.experience} years</p>
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
    </>
  )
}
