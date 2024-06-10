import { Skills as TSkills } from "../api/skills/Skills";

export const SKILLS_TITLE_FIELD = "id";

export const SkillsTitle = (record: TSkills): string => {
  return record.id?.toString() || String(record.id);
};
