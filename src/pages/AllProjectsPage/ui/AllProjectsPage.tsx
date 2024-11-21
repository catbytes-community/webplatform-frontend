import s from "./AllProjectsPage.module.css"
import {projectsData} from "../ProjectCard/api/dummyProjectsData.ts";
import {ProjectCard} from "../ProjectCard/ui/ProjectCard.tsx";
import {useEffect, useMemo, useState} from "react";
import ProjectsPagination from "../ProjectsPagination/ui/ProjectsPagination.tsx";
import {SearchInput} from "../../../shared/ui";
import {Project} from "../../../app/types/global";

const PageSize = 5;

export const AllProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchString, setSearchString] = useState("");

    // TO DO - get from useSelector
    const allProjects = projectsData;

    useEffect(() => {
        setProjects(allProjects);
    }, [])

    const currentProjectsData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return projects.slice(firstPageIndex, lastPageIndex);
    }, [projects, currentPage]);

    useEffect(() => {
        if (searchString === "") {
            setProjects(allProjects);
        }

        setProjects(allProjects.filter(project => project.title.toLowerCase().includes(searchString)));
    }, [allProjects, searchString]);


    return <div className={s.container}>
        <div className="flex align-middle justify-between">
            <h1 className={`font-montserrat text-black ${s.header}`} >Collaboration and projects</h1>
            <SearchInput setValue={setSearchString}/>
        </div>
        <div className={s.divider}></div>
        {projects.length > 0 ? <><div className="mb-8">
                {currentProjectsData.map((project, index) => (<ProjectCard key={index} project={project}/>))}
            </div>
            <ProjectsPagination
                currentPage={currentPage}
                totalCount={projectsData.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            /></> : <p className="mt-4">No projects found</p>}

    </div>;
};