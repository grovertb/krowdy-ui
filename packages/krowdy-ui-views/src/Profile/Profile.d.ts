type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

interface Detail {
  count: number;
  time: number;
}

interface Work {
  name: string;
  count: number;
}

interface Experience {
  imgUrl?: string;
  companyName?: string;
  workHere?: boolean;
  startDate?: string;
  endDate?: string;
  [ P: string ]: any;
}

interface ProfileProps {
  action?          : React.ReactNode;
  ascent?          : Detail;
  experience?      : number;
  workExperience?  : Work;
  name             : string;
  rating?          : number;
  rotation?        : Detail;
  experiences?     : Nullable<Experience>[];
  salaryText?      : string;
}

declare const Profile: React.ComponentType<ProfileProps>;

export default Profile;