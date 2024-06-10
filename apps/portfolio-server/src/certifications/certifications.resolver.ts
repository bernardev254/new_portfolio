import * as graphql from "@nestjs/graphql";
import { CertificationsResolverBase } from "./base/certifications.resolver.base";
import { Certifications } from "./base/Certifications";
import { CertificationsService } from "./certifications.service";

@graphql.Resolver(() => Certifications)
export class CertificationsResolver extends CertificationsResolverBase {
  constructor(protected readonly service: CertificationsService) {
    super(service);
  }
}
