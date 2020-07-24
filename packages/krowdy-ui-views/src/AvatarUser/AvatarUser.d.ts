interface user {
  firstName?: string;
  lastName? : string;
  photo?    : string;
}

export type AvatarUserProps = {
  user: user,
  active?: boolean
};

declare const AvatarUser: React.ComponentType<AvatarUserProps>;

export default AvatarUser;