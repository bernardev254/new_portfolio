import { Module } from "@nestjs/common";
import { SkillsModuleBase } from "./base/skills.module.base";
import { SkillsService } from "./skills.service";
import { SkillsController } from "./skills.controller";
import { SkillsResolver } from "./skills.resolver";

@Module({
  imports: [SkillsModuleBase],
  controllers: [SkillsController],
  providers: [SkillsService, SkillsResolver],
  exports: [SkillsService],
})
export class SkillsModule {}
