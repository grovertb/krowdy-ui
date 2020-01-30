interface ICardHeaderProps {
  subheader?: React.ReactNode,
}

interface IClassObject {
  action?: string,
  cardContent?: string,
  header?: string,
  root?: string,
  title?: string,
}

type TypeOnclick = (event: any) => void


export type HeaderCard = {
  action?: React.ReactNode,
  avatar?: React.ReactNode,
  cardHeaderProps?: ICardHeaderProps,
  classes?: IClassObject,
  content?: string | React.ReactNode,
  disabledHover?: boolean,
  onClick?: TypeOnclick,
  sizePadding?: string,
  title?: string | React.ReactNode,
};

declare const HeaderCard: React.ComponentType<HeaderCard>;

export default HeaderCard;