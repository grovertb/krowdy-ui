interface IClassObject {
  container?: string,
  content?: string,
  expandDetails?: string,
  heading?: string,
  size?: string,
}

interface IColor {
  [index: number]: string;
}

export type CardExpand = {
  classes?: IClassObject,
  color?: IColor,
  content?: React.ReactNode | string,
  defaultExpanded?: boolean,
  expandIcon?: React.ReactNode,
  title?: React.ReactNode | string
};

declare const CardExpand: React.ComponentType<CardExpand>;

export default CardExpand;