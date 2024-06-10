import { HomeWhereInput } from "./HomeWhereInput";
import { HomeOrderByInput } from "./HomeOrderByInput";

export type HomeFindManyArgs = {
  where?: HomeWhereInput;
  orderBy?: Array<HomeOrderByInput>;
  skip?: number;
  take?: number;
};
