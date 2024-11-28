import { Project} from "../../../../app/types/global";
import s from "./ProjectCard.module.css"
import {Card} from "../../../../shared/ui";
import ArrowRightIcon from "../../../../shared/ui/icons/ArrowRightIcon.tsx";
import placeholderImage from "../../../../shared/ui/placeholderImages/projectPlaceholderImage.png"

export interface ProjectCardProps {
    project: Project | null
}

export const ProjectCard = ({project}:ProjectCardProps) => {

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' }); // e.g., "Nov"
        return `${day} ${month}`;
    };


    return (
        <div className={`flex pb-6 pt-6 gap-5 ${s.container}`}>
            {project?.image ? <img className={s.image} src={project?.image} alt="Project image"/> :
                <img className={s.image} src={placeholderImage} alt="Project image"/>}
            <div className="flex flex-col w-full gap-3">
            <div className="flex justify-between">
                    <h2 className="text-4xl font-normal font-poppins">{project?.name}</h2>
                    <div className="flex gap-1 cursor-pointer">
                        <p className="underline font-bold">SIGN IN <span></span></p>
                        <ArrowRightIcon/>
                    </div>
                </div>
                <div className="flex gap-24 font-montserrat">
                    <p>Project status: {project?.status}</p>
                    <p>Project duration: {project?.duration}</p>
                    <p>Project period: {project && formatDate(project.startDate)} - {project && formatDate(project.endDate)}</p>
                </div>
                <p className="font-montserrat">Project manager: <span className="underline font-bold">{project?.manager}</span></p>
                <p className="font-montserrat">{project?.summary}</p>
                <div className="flex gap-5">
                    {project?.tags?.map((tag, index) => <Card key={index} className={s.direction}>{tag}</Card>)}
                </div>
            </div>
        </div>
    )
}