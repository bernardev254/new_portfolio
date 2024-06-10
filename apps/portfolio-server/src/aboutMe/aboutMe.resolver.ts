import * as graphql from "@nestjs/graphql";
import { AboutMeResolverBase } from "./base/aboutMe.resolver.base";
import { AboutMe } from "./base/AboutMe";
import { AboutMeService } from "./aboutMe.service";

@graphql.Resolver(() => AboutMe)
export class AboutMeResolver extends AboutMeResolverBase {
  constructor(protected readonly service: AboutMeService) {
    super(service);
  }
}
