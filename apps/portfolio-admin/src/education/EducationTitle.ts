import { Education as TEducation } from "../api/education/Education";

export const EDUCATION_TITLE_FIELD = "id";

export const EducationTitle = (record: TEducation): string => {
  return record.id?.toString() || String(record.id);
};
