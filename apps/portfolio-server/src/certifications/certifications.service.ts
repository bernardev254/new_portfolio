import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CertificationsServiceBase } from "./base/certifications.service.base";

@Injectable()
export class CertificationsService extends CertificationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
