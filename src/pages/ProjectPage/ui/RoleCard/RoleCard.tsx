import {ProjectRole} from "../../../../app/types/global";
import {Card} from "../../../../shared/ui";
import style from "./RoleCard.module.css"

type RoleCardProps = {
    role: ProjectRole;
}

export const RoleCard = ({role}:RoleCardProps) => {
    return (
        <Card className={style.card}>
            <div className="flex justify-between items-start">
                <div className="flex">
                    <p className={style.level}>{role?.level}</p>
                    <div className="mr-16">
                        <p className="text-2xl font-normal mb-5">{role?.title}</p>
                        <p className="font-montserrat">{role?.description}</p>
                    </div>
                </div>
                <button disabled={role?.status === "Closed"}><Card className={role?.status === "Closed" ? style.buttonCardDisabled : style.buttonCard}>{role?.status.toUpperCase()}</Card></button>
            </div>
        </Card>);
}