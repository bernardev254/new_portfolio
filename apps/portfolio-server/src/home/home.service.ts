import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HomeServiceBase } from "./base/home.service.base";

@Injectable()
export class HomeService extends HomeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
