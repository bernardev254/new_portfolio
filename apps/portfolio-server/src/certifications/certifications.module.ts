import { Module } from "@nestjs/common";
import { CertificationsModuleBase } from "./base/certifications.module.base";
import { CertificationsService } from "./certifications.service";
import { CertificationsController } from "./certifications.controller";
import { CertificationsResolver } from "./certifications.resolver";

@Module({
  imports: [CertificationsModuleBase],
  controllers: [CertificationsController],
  providers: [CertificationsService, CertificationsResolver],
  exports: [CertificationsService],
})
export class CertificationsModule {}
