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
import { Experience } from "./Experience";
import { ExperienceCountArgs } from "./ExperienceCountArgs";
import { ExperienceFindManyArgs } from "./ExperienceFindManyArgs";
import { ExperienceFindUniqueArgs } from "./ExperienceFindUniqueArgs";
import { DeleteExperienceArgs } from "./DeleteExperienceArgs";
import { ExperienceService } from "../experience.service";
@graphql.Resolver(() => Experience)
export class ExperienceResolverBase {
  constructor(protected readonly service: ExperienceService) {}

  async _experiencesMeta(
    @graphql.Args() args: ExperienceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Experience])
  async experiences(
    @graphql.Args() args: ExperienceFindManyArgs
  ): Promise<Experience[]> {
    return this.service.experiences(args);
  }

  @graphql.Query(() => Experience, { nullable: true })
  async experience(
    @graphql.Args() args: ExperienceFindUniqueArgs
  ): Promise<Experience | null> {
    const result = await this.service.experience(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Experience)
  async deleteExperience(
    @graphql.Args() args: DeleteExperienceArgs
  ): Promise<Experience | null> {
    try {
      return await this.service.deleteExperience(args);
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