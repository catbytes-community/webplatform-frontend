import s from "./AllProjectsPage.module.css"
import {projectsData} from "../ProjectCard/api/dummyProjectsData.ts";
import {ProjectCard} from "../ProjectCard/ui/ProjectCard.tsx";
import {useMemo, useState} from "react";
import ProjectsPagination from "../ProjectsPagination/ui/ProjectsPagination.tsx";

const PageSize = 5;

export const AllProjectsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const currentProjectsData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return projectsData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return <div className={s.container}>
        <div className="flex">
            <h1 className={`font-montserrat text-black ${s.header}`} >Collaboration and projects</h1>
        </div>
        <div className={s.divider}></div>
        <div className="mb-8">
            {currentProjectsData.map((project, index) => (<ProjectCard key={index} project={project} />))}
        </div>
        <ProjectsPagination
            currentPage={currentPage}
            totalCount={projectsData.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
        />
    </div>;
};