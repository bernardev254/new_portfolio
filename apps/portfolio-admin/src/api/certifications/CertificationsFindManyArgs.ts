import { CertificationsWhereInput } from "./CertificationsWhereInput";
import { CertificationsOrderByInput } from "./CertificationsOrderByInput";

export type CertificationsFindManyArgs = {
  where?: CertificationsWhereInput;
  orderBy?: Array<CertificationsOrderByInput>;
  skip?: number;
  take?: number;
};
