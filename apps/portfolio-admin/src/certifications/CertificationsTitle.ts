import { Certifications as TCertifications } from "../api/certifications/Certifications";

export const CERTIFICATIONS_TITLE_FIELD = "id";

export const CertificationsTitle = (record: TCertifications): string => {
  return record.id?.toString() || String(record.id);
};
