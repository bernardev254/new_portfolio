import { AboutMeWhereInput } from "./AboutMeWhereInput";
import { AboutMeOrderByInput } from "./AboutMeOrderByInput";

export type AboutMeFindManyArgs = {
  where?: AboutMeWhereInput;
  orderBy?: Array<AboutMeOrderByInput>;
  skip?: number;
  take?: number;
};
