import * as graphql from "@nestjs/graphql";
import { SkillsResolverBase } from "./base/skills.resolver.base";
import { Skills } from "./base/Skills";
import { SkillsService } from "./skills.service";

@graphql.Resolver(() => Skills)
export class SkillsResolver extends SkillsResolverBase {
  constructor(protected readonly service: SkillsService) {
    super(service);
  }
}
