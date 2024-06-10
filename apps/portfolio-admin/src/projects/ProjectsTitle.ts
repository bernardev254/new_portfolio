import { Projects as TProjects } from "../api/projects/Projects";

export const PROJECTS_TITLE_FIELD = "id";

export const ProjectsTitle = (record: TProjects): string => {
  return record.id?.toString() || String(record.id);
};
