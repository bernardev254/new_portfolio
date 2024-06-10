import { Module } from "@nestjs/common";
import { HomeModuleBase } from "./base/home.module.base";
import { HomeService } from "./home.service";
import { HomeController } from "./home.controller";
import { HomeResolver } from "./home.resolver";

@Module({
  imports: [HomeModuleBase],
  controllers: [HomeController],
  providers: [HomeService, HomeResolver],
  exports: [HomeService],
})
export class HomeModule {}
