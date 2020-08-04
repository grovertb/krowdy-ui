interface Detail {
  count: number;
  time: number;
}

interface Work {
  name: string;
  count: number;
}

interface ProfileProps {
  ascent?          : Detail;
  experience?      : number;
  workExperience?  : Work;
  name             : string;
  rating           : number;
  rotation?        : Detail;
  salary?          : number;
}

declare const Profile: React.ComponentType<ProfileProps>;

export default Profile;