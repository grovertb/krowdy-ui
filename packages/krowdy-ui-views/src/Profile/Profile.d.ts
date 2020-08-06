interface Detail {
  count: number;
  time: number;
}

interface Work {
  name: string;
  count: number;
}

interface ProfileProps {
  action?          : React.ReactNode;
  ascent?          : Detail;
  experience?      : number;
  workExperience?  : Work;
  name             : string;
  rating           : number;
  rotation?        : Detail;
  salaryText?      : string;
}

declare const Profile: React.ComponentType<ProfileProps>;

export default Profile;