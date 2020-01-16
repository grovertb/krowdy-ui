export type CardUser = {
  borderColor?: string,
  classes?: object,
  iconRight?: object,
  items?: object[],
  title?: string,
  withAvatar?: boolean,
  withDivider?: boolean,
};

declare const CardUser: React.ComponentType<CardUser>;

export default CardUser;