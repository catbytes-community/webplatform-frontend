import s from "./AllProjectsPage.module.css"
import {projectsData} from "../ProjectCard/api/dummyProjectsData.ts";
import {ProjectCard} from "../ProjectCard/ui/ProjectCard.tsx";

export const AllProjectsPage = () => {
    return <div className={s.container}>
        <div className="flex">
            <h1 className={`font-montserrat text-black ${s.header}`} >Collaboration and projects</h1>
        </div>
        <div className={s.divider}></div>
        <div className="mb-8">
            {projectsData.map((project, index) => (<ProjectCard key={index} project={project} />))}
        </div>
    </div>;
};