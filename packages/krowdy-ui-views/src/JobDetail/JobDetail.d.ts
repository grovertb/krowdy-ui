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
  hiddenButton?: boolean
};

declare const JobDetail: React.ComponentType<JobDetailProps>;

export default JobDetail;