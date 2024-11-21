import { Project} from "../../../../app/types/global";
import s from "./ProjectCard.module.css"
import {Card} from "../../../../shared/ui";
import ArrowRightIcon from "../../../../shared/ui/icons/ArrowRightIcon.tsx";

export interface ProjectCardProps {
    project: Project | null
}

export const ProjectCard = ({project}:ProjectCardProps) => {
    return (
        <div className={`flex pb-6 pt-6 gap-5 ${s.container}`}>
            <img className={s.image} src={project?.image} alt="Project name"/>
            <div className="flex flex-col w-full gap-3">
                <div className="flex justify-between">
                    <h2 className="text-4xl font-normal font-poppins">{project?.title}</h2>
                    <div className="flex gap-1 cursor-pointer">
                        <p className="underline font-bold">SIGN IN <span></span></p>
                        <ArrowRightIcon/>
                    </div>
                </div>
                <div className="flex gap-24 font-montserrat">
                    <p>Project status: {project?.status}</p>
                    <p>Project duration: {project?.duration}</p>
                    <p>Project period: {project?.period}</p>
                </div>
                <p className="font-montserrat">Project manager: <span className="underline font-bold">{project?.manager}</span></p>
                <p className="font-montserrat">{project?.description}</p>
                <div className="flex gap-5">
                    {project?.directions?.map((direction, index) => <Card key={index} className={s.direction}>{direction}</Card>)}
                </div>
            </div>
        </div>
    )
}