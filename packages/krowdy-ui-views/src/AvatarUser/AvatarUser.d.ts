interface user {
  firstName?: string;
  lastName? : string;
  photo?    : string;
}

export type AvatarUserProps = {
  user: user
  margin?: string
};

declare const AvatarUser: React.ComponentType<AvatarUserProps>;

export default AvatarUser;