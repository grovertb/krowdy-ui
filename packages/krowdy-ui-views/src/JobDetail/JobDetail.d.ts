export type JobDetailProps = {
  basicEdition?: object[];
  benefits?: object[];
  company?: object;
  competencies?: object[];
  description?: string;
  detailJob?: object[];
  onClickPostulation?: Function;
  requirements?: object[];
  title?: string;
  userInJob?: boolean;
  visibleInformation?: boolean;
  disabledPerson?: object;
};

declare const JobDetail: React.ComponentType<JobDetailProps>;

export default JobDetail;