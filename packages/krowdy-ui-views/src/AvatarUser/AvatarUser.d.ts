interface user {
  firstName?: string;
  lastName? : string;
  photo?    : string;
}

export type AvatarUserProps = {
  user: user;
  active?: boolean;
  hover: boolean;
  size: 'small' | 'default' | 'big'
};

declare const AvatarUser: React.ComponentType<AvatarUserProps>;

export default AvatarUser;