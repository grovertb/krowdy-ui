export type CardTask = {
  avatar?: object,
  cardContentProps?: object,
  cardHeaderProps?: object,
  cardProps?: boolean,
  classes?: object,
  content?: string | object,
  disabledHover?: boolean,
  onClick?: Function,
  rightElement?: object[],
  title?: string | object,
};

declare const CardTask: React.ComponentType<CardTask>;

export default CardTask;