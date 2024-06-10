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
import { HomeService } from "../home.service";
import { HomeCreateInput } from "./HomeCreateInput";
import { Home } from "./Home";
import { HomeFindManyArgs } from "./HomeFindManyArgs";
import { HomeWhereUniqueInput } from "./HomeWhereUniqueInput";
import { HomeUpdateInput } from "./HomeUpdateInput";

export class HomeControllerBase {
  constructor(protected readonly service: HomeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Home })
  async createHome(@common.Body() data: HomeCreateInput): Promise<Home> {
    return await this.service.createHome({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Home] })
  @ApiNestedQuery(HomeFindManyArgs)
  async homes(@common.Req() request: Request): Promise<Home[]> {
    const args = plainToClass(HomeFindManyArgs, request.query);
    return this.service.homes({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Home })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async home(
    @common.Param() params: HomeWhereUniqueInput
  ): Promise<Home | null> {
    const result = await this.service.home({
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
  @swagger.ApiOkResponse({ type: Home })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHome(
    @common.Param() params: HomeWhereUniqueInput,
    @common.Body() data: HomeUpdateInput
  ): Promise<Home | null> {
    try {
      return await this.service.updateHome({
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
  @swagger.ApiOkResponse({ type: Home })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHome(
    @common.Param() params: HomeWhereUniqueInput
  ): Promise<Home | null> {
    try {
      return await this.service.deleteHome({
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
