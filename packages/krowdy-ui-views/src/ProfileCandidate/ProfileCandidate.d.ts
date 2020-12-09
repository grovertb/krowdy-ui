type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

interface IEducation {
  _id: string;
  career?: string;
  condition?: string;
  degree?: string;
  description?: string;
  endDate?: string;
  institutionName?: string;
  startDate?: string;
  studyingHere?: boolean;
  [ P: string ]: any;
}

interface IExperience {
  area?: string;
  companyName?: string;
  description?: string;
  endDate?: string;
  hierarchy?: string;
  jobPosition?: string;
  location?: string;
  startDate?: string;
  workHere?: boolean;
  [ P: string ]: any;
}

interface ICandidate {
  candidateId: string;
  curriculum?: string;
  education?: Nullable<IEducation>[];
  email?: string;
  experience?: Nullable<IExperience>[];
  firstName?: string;
  fullName?: string;
  jobId: string;
  lastName?: string;
  linkedin?: string;
  nameTask: string;
  phone?: string;
  photo?: string;
  website?: string;
  [ P: string ]: any;
}

interface IClasses {
  actionsContent?: string;
  drawerHeaderContent?: string;
  drawerSubHeaderContent?: string;
  drawerSubHeaderTitle?: string;
  leaveContent?: string;
  leaveContentTitle?: string;
  userAvatarContent?: string;
  userContent?: string;
  userDefaultAvatar?: string;
  userHeader?: string;
  userHeaderTitles?: string;
  userName?: string;
}


interface ProfileCandidateProps {
  basic?: boolean;
  candidate?: ICandidate;
  classes?: IClasses;
  disableSubHeaderTitle?: boolean;
  onClickDeleteCandidate?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onClickPreviewCV?: () => void;
  status?: string;
}

declare const ProfileCandidate: React.ComponentType<ProfileCandidateProps>;

export default ProfileCandidate;