import { Module } from "@nestjs/common";
import { AboutMeModuleBase } from "./base/aboutMe.module.base";
import { AboutMeService } from "./aboutMe.service";
import { AboutMeController } from "./aboutMe.controller";
import { AboutMeResolver } from "./aboutMe.resolver";

@Module({
  imports: [AboutMeModuleBase],
  controllers: [AboutMeController],
  providers: [AboutMeService, AboutMeResolver],
  exports: [AboutMeService],
})
export class AboutMeModule {}
