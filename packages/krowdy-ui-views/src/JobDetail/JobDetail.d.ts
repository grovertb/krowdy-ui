export type JobDetailProps = {
  basicEdition?: object[];
  benefits?: object[];
  competencies?: object[];
  description?: string;
  title?: string;
  detailJob?: object[];
  onClickPostulation?: Function;
  userInJob?: boolean;
  visibleInformation?: boolean;
};

declare const JobDetail: React.ComponentType<JobDetailProps>;

export default JobDetail;