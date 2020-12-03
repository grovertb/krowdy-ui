import { KrowdyTypographyProps } from '@krowdy-ui/core/Typography'

export type ListInfoItemProps = {
  _id?: string;
  classes?: {
    avatar?: string;
    dashed?: string;
    default?: string;
    gutters?: string;
    hover?: string;
    hoverDefault?: string;
    image?: string;
    outlined?: string;
    primary?: string;
    rightIconHover?: string;
    root?: string;
    secondary?: string;
    variantHover?: string;
    listItemAvatar?: string;
  };
  disabled?: boolean;
  hover?: boolean;
  icon?: React.ReactNode;
  onChange?: (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  primaryTypographyProps?: KrowdyTypographyProps;
  rightIcon?: React.ReactNode;
  rightIconHover?: boolean;
  secondaryTypographyProps?: KrowdyTypographyProps;
  selected?: boolean;
  src?: string;
  subtitle?: string;
  title?: string;
  iconColor?: string;
  variant?: 'default' | 'dashed' | 'outlined';
  avatarSize?: 'small' | 'medium' | 'large';
  variantHover?: boolean;
  width?: number;
  input?: React.ReactNode;
}

declare const ListInfoItem: React.ComponentType<ListInfoItemProps>;

export default ListInfoItem;