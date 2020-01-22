interface ICardHeaderProps {
  subheader?: Node,
  //subheaderTypographyProps?: any
}

interface IClassObject {
  action?: string,
  cardContent?: string,
  header?: string,
  root?: string,
  title?: string,
}

interface IFuncOnClick {
  (e: Event): void
}

export type CardContainer = {
  action?: Node,
  avatar?: Node,
  cardHeaderProps?: ICardHeaderProps,
  classes?: IClassObject,
  content?: string | Node,
  disabledHover?: boolean,
  onClick?: IFuncOnClick,
  sizePadding?: string,
  title?: string | Node,
};

declare const CardContainer: React.ComponentType<CardContainer>;

export default CardContainer;