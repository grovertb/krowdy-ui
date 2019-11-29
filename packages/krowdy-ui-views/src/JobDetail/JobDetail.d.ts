export type JobDetailProps = {
  basicInformation?: object[];
  competencies?: object[];
  description?: string;
  title?: string;
  detailOptions?: object[];
};

declare const JobDetail: React.ComponentType<JobDetailProps>;

export default JobDetail;