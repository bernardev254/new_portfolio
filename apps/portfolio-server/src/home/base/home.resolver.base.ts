/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Home } from "./Home";
import { HomeCountArgs } from "./HomeCountArgs";
import { HomeFindManyArgs } from "./HomeFindManyArgs";
import { HomeFindUniqueArgs } from "./HomeFindUniqueArgs";
import { DeleteHomeArgs } from "./DeleteHomeArgs";
import { HomeService } from "../home.service";
@graphql.Resolver(() => Home)
export class HomeResolverBase {
  constructor(protected readonly service: HomeService) {}

  async _homesMeta(
    @graphql.Args() args: HomeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Home])
  async homes(@graphql.Args() args: HomeFindManyArgs): Promise<Home[]> {
    return this.service.homes(args);
  }

  @graphql.Query(() => Home, { nullable: true })
  async home(@graphql.Args() args: HomeFindUniqueArgs): Promise<Home | null> {
    const result = await this.service.home(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Home)
  async deleteHome(@graphql.Args() args: DeleteHomeArgs): Promise<Home | null> {
    try {
      return await this.service.deleteHome(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
