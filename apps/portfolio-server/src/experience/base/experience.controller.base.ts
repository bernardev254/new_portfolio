/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ExperienceService } from "../experience.service";
import { ExperienceCreateInput } from "./ExperienceCreateInput";
import { Experience } from "./Experience";
import { ExperienceFindManyArgs } from "./ExperienceFindManyArgs";
import { ExperienceWhereUniqueInput } from "./ExperienceWhereUniqueInput";
import { ExperienceUpdateInput } from "./ExperienceUpdateInput";

export class ExperienceControllerBase {
  constructor(protected readonly service: ExperienceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Experience })
  async createExperience(
    @common.Body() data: ExperienceCreateInput
  ): Promise<Experience> {
    return await this.service.createExperience({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Experience] })
  @ApiNestedQuery(ExperienceFindManyArgs)
  async experiences(@common.Req() request: Request): Promise<Experience[]> {
    const args = plainToClass(ExperienceFindManyArgs, request.query);
    return this.service.experiences({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Experience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async experience(
    @common.Param() params: ExperienceWhereUniqueInput
  ): Promise<Experience | null> {
    const result = await this.service.experience({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Experience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateExperience(
    @common.Param() params: ExperienceWhereUniqueInput,
    @common.Body() data: ExperienceUpdateInput
  ): Promise<Experience | null> {
    try {
      return await this.service.updateExperience({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Experience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteExperience(
    @common.Param() params: ExperienceWhereUniqueInput
  ): Promise<Experience | null> {
    try {
      return await this.service.deleteExperience({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
