import { useParams } from "react-router-dom";
import Navbar from "../../../shared/ui/Navbar/Navbar.tsx";
import {useEffect, useState} from "react";
import {projectsData} from "../../AllProjectsPage/ProjectCard/api/dummyProjectsData.ts";
import {Project} from "../../../app/types/global";
import placeholderImage from "../../../shared/ui/placeholderImages/projectPlaceholderImage.png";
import style from "./ProjectPage.module.css"
import {ProjectCard} from "../../AllProjectsPage/ProjectCard/ui/ProjectCard.tsx";
import {RoleCard} from "./RoleCard/RoleCard.tsx";
import {Card} from "../../../shared/ui";

export const ProjectPage = () => {
    const [project, setProject] = useState<Project | null>(null);
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        //API CALL
        if(id) {
            const project = projectsData.find((project) => project.id === Number(id));
            if(project) {
                setProject(project);
            }
        }
    }, [id])
    return (<div className="flex flex-col items-center">
        <Navbar/>
        <div className={style.container}>
            <div className="flex gap-5 mt-11">
                <div className={`bg-slate-200 ${style.image}`}>
                    {project?.image ? <img className={style.image} src={project?.image} alt="Project image"/> :
                        <img className={style.image} src={placeholderImage} alt="Project image"/>}
                </div>
                <ProjectCard project={project} isPage={true}/>
            </div>
            <div className="flex gap-5 mt-12">
                <p className={style.about}>About project</p>
                <p className="mt-2">{project?.description}</p>
            </div>
            <p className="text-4xl mt-9">Required project team:</p>
            <div className="flex flex-col gap-5 mt-10 mb-16">
                {project?.roles?.map((role, ind) => (<RoleCard key={ind} role={role}/>))}
            </div>
            <p className="text-4xl">Project links:</p>
            <div className="flex flex-col gap-5 mt-10 mb-28">
                {project?.documentation?.map((doc, ind) => (<Card className={style.docCard} key={ind}>
                    <div className="flex gap-11 font-montserrat">
                        <p className={style.docLink}>{doc?.link.toUpperCase()}</p>
                        <p>{doc?.description}</p>
                    </div>
                </Card>))}
            </div>
        </div>
    </div>)
};