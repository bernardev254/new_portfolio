import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AboutMeServiceBase } from "./base/aboutMe.service.base";

@Injectable()
export class AboutMeService extends AboutMeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
