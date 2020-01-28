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

type TypeOnclick = (event: any) => void

export type CardContainer = {
  action?: React.ReactNode,
  avatar?: React.ReactNode,
  cardHeaderProps?: ICardHeaderProps,
  classes?: IClassObject,
  content?: string | React.ReactNode,
  disabledHover?: boolean,
  onClick?: TypeOnclick,
  sizePadding?: string,
  title?: string | React.ReactNode,
  divider?: boolean,
};

declare const CardContainer: React.ComponentType<CardContainer>;

export default CardContainer;