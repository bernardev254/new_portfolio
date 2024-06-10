import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AboutMeService } from "./aboutMe.service";
import { AboutMeControllerBase } from "./base/aboutMe.controller.base";

@swagger.ApiTags("aboutMes")
@common.Controller("aboutMes")
export class AboutMeController extends AboutMeControllerBase {
  constructor(protected readonly service: AboutMeService) {
    super(service);
  }
}
