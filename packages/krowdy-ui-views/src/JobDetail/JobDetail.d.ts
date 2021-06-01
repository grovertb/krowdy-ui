import { PaperProps } from "@material-ui/core";

export type JobDetailProps = {
  jobId?: string,
  basicEdition?: object[];
  benefits?: object[];
  company?: object;
  competencies?: object[];
  description?: string | object;
  detailJob?: object[];
  onClickPostulation?: Function;
  requirements?: object[];
  title?: string;
  userInJob?: boolean;
  visibleInformation?: boolean;
  expirationDate?: string;
  disabledPerson?: object;
  hiddenButton?: boolean;
  onViewCompany?: Function;
  fixedCard?: React.ReactNode;
  variant?: PaperProps['variant'];
  closed?: boolean;
  isPreview?: boolean;
};

declare const JobDetail: React.ComponentType<JobDetailProps>;

export default JobDetail;