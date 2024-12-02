import { Project} from "../../../../app/types/global";
import style from "./ProjectCard.module.css"
import {Card} from "../../../../shared/ui";
//import ArrowRightIcon from "../../../../shared/ui/icons/ArrowRightIcon.tsx";
import placeholderImage from "../../../../shared/ui/placeholderImages/projectPlaceholderImage.png"
import moment from 'moment';

export interface ProjectCardProps {
    project: Project | null,
    isPage?: boolean
}

export const ProjectCard = ({project, isPage=false}:ProjectCardProps) => {

    return (
        <div className={`flex pb-6 ${!isPage && "pt-6"} gap-5 ${!isPage && style.container}`}>

            {!isPage && (project?.image ? <img className={style.image} src={project?.image} alt="Project image"/> :
                <img className={style.image} src={placeholderImage} alt="Project image"/>)}
            <div className="flex flex-col w-full gap-3">
            <div className="flex justify-between">
                    <h2 className={`${isPage ? "text-5xl mb-4" : "text-4xl"} font-normal font-poppins`}>{project?.name}</h2>
                    {/*<div className="flex gap-1 cursor-pointer">*/}
                    {/*    <p className="underline font-bold">SIGN IN <span></span></p>*/}
                    {/*    <ArrowRightIcon/>*/}
                    {/*</div>*/}
                    {!isPage && <Card className={style.detailsCard}>SEE DETAILS</Card>}
                </div>
                <div className="flex gap-24 font-montserrat text-sm">
                    <p>Project status: {project?.status}</p>
                    <p>Project duration: {project?.duration}</p>
                    <p>Project period: {project && moment(project.startDate).format("D MMM")} - {project && moment(project.endDate).format("D MMM")}</p>
                </div>
                <p className="font-montserrat">Project manager: <span className="underline font-bold">{project?.manager}</span></p>
                <p className="font-montserrat">{project?.summary}</p>
                <div className="flex gap-5">
                    {project?.tags?.map((tag, index) => <Card key={index} className={style.direction}>{tag}</Card>)}
                </div>
            </div>
        </div>
    )
}