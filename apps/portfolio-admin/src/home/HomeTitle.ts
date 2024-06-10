import { Home as THome } from "../api/home/Home";

export const HOME_TITLE_FIELD = "id";

export const HomeTitle = (record: THome): string => {
  return record.id?.toString() || String(record.id);
};
