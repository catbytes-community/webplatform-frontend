import { ProjectSchema, Project} from "./model/types/project.ts";
import { projectReducer} from "./model/slice/projectSlice.ts";

export type { Project, ProjectSchema }
export {projectReducer}