import { AboutMe as TAboutMe } from "../api/aboutMe/AboutMe";

export const ABOUTME_TITLE_FIELD = "id";

export const AboutMeTitle = (record: TAboutMe): string => {
  return record.id?.toString() || String(record.id);
};
