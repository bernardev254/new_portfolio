import { Module } from "@nestjs/common";
import { HomeModule } from "./home/home.module";
import { AboutMeModule } from "./aboutMe/aboutMe.module";
import { SkillsModule } from "./skills/skills.module";
import { ProjectsModule } from "./projects/projects.module";
import { EducationModule } from "./education/education.module";
import { CertificationsModule } from "./certifications/certifications.module";
import { ContactModule } from "./contact/contact.module";
import { ExperienceModule } from "./experience/experience.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    HomeModule,
    AboutMeModule,
    SkillsModule,
    ProjectsModule,
    EducationModule,
    CertificationsModule,
    ContactModule,
    ExperienceModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
