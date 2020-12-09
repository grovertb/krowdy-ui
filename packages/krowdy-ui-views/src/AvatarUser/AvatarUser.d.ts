interface user {
  firstName?: string;
  lastName? : string;
  photo?    : string;
}

type IFunOnDeleted = () => void

export type AvatarUserProps = {
  user: user;
  active?: boolean;
  hover?: boolean;
  size?: 'small' | 'default' | 'big';
  onDelete?: IFunOnDeleted
};

declare const AvatarUser: React.ComponentType<AvatarUserProps>;

export default AvatarUser;