import { usePagination, DOTS} from "../../../../shared/lib/customHooks/pagination.ts";
import s from "./ProjectsPagination.module.css"
import {usePaginationParams} from "../../../../shared/lib/customHooks/pagination.ts";
import PaginationLeftIcon from "../../../../shared/ui/icons/PaginationLeftIcon.tsx";
import PaginationRightIcon from "../../../../shared/ui/icons/PaginationRightIcon.tsx";

interface ProjectsPaginationParams extends usePaginationParams{
    onPageChange(pageNumber: number): void;
}

const ProjectsPagination = ({onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }:ProjectsPaginationParams) => {

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div className="flex justify-center align-middle mb-9">
            {/* Left navigation arrow */}
            <div className={` ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={onPrevious}
            >
                <PaginationLeftIcon/>
            </div>
            {paginationRange.map((pageNumber, index) => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <div key={index} className={` dots`}>&#8230;</div>;
                }

                // Render our Page Pills
                return (
                    <div
                        className={`${s.paginationItem} ${pageNumber === currentPage ? s.selected : ''}`}
                        key={index}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {/*{pageNumber}*/}
                    </div>
                );
            })}
            {/*  Right Navigation arrow */}
            <div
                className={`pagination-item ${currentPage === lastPage ? 'disabled' : ''}`}
                onClick={onNext}
            >
                <PaginationRightIcon/>
            </div>
        </div>
    );
};

export default ProjectsPagination;