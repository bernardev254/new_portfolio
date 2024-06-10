import * as graphql from "@nestjs/graphql";
import { HomeResolverBase } from "./base/home.resolver.base";
import { Home } from "./base/Home";
import { HomeService } from "./home.service";

@graphql.Resolver(() => Home)
export class HomeResolver extends HomeResolverBase {
  constructor(protected readonly service: HomeService) {
    super(service);
  }
}
