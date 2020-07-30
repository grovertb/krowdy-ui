interface Detail {
  count: number;
  time: number;
}

interface ProfileProps {
  ascent?          : Detail;
  experience?      : number;
  krowdyExperience?: number;
  name             : string;
  rating           : number;
  rotation?        : Detail;
  salary?          : number;
}

declare const Profile: React.ComponentType<ProfileProps>;

export default Profile;