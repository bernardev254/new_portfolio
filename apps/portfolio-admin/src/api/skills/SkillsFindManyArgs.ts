import { SkillsWhereInput } from "./SkillsWhereInput";
import { SkillsOrderByInput } from "./SkillsOrderByInput";

export type SkillsFindManyArgs = {
  where?: SkillsWhereInput;
  orderBy?: Array<SkillsOrderByInput>;
  skip?: number;
  take?: number;
};
