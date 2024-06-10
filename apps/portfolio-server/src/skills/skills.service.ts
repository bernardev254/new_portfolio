import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SkillsServiceBase } from "./base/skills.service.base";

@Injectable()
export class SkillsService extends SkillsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
