import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CertificationsService } from "./certifications.service";
import { CertificationsControllerBase } from "./base/certifications.controller.base";

@swagger.ApiTags("certifications")
@common.Controller("certifications")
export class CertificationsController extends CertificationsControllerBase {
  constructor(protected readonly service: CertificationsService) {
    super(service);
  }
}
