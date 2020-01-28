interface ICardHeaderProps {
  subheader?: React.ReactNode,
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

export type HeaderCard = {
  action?: React.ReactNode,
  avatar?: React.ReactNode,
  cardHeaderProps?: ICardHeaderProps,
  classes?: IClassObject,
  content?: string | React.ReactNode,
  disabledHover?: boolean,
  onClick?: IFuncOnClick,
  sizePadding?: string,
  title?: string | React.ReactNode,
};

declare const HeaderCard: React.ComponentType<HeaderCard>;

export default HeaderCard;