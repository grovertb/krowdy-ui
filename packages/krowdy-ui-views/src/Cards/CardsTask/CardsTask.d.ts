export type CardTask = {

  avatar?: object[],
  avatarProps?: object,
  borderColor?: string,
  classes?: object,
  content?: object[],
  iconRight?: object[],
  lessShadow?: boolean,
  raised?: boolean,
  title?: string,
};

declare const CardTask: React.ComponentType<CardTask>;

export default CardTask;