interface IClassObject {
  container?: string,
  content?: string,
  expandDetails?: string,
  heading?: string,
  size?: string,
}


type TypeOnchange = (event: any) => void

export type CardExpand = {
  classes?: IClassObject,
  content?: React.ReactNode | string,
  defaultExpanded?: boolean,
  expandIcon?: React.ReactNode,
  onChange?: TypeOnchange,
  title?: React.ReactNode | string
};

declare const CardExpand: React.ComponentType<CardExpand>;

export default CardExpand;