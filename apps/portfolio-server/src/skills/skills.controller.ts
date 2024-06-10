import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkillsService } from "./skills.service";
import { SkillsControllerBase } from "./base/skills.controller.base";

@swagger.ApiTags("skills")
@common.Controller("skills")
export class SkillsController extends SkillsControllerBase {
  constructor(protected readonly service: SkillsService) {
    super(service);
  }
}
