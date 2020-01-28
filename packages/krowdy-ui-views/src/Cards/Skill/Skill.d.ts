interface IClassObject {
  container?: string,
  content?: string,
  heading?: string,
  size?: string,
}

interface IColor {
  [index: number]: string;
}

export type SkillsCard = {
  classes?: IClassObject,
  color?: IColor,
  defaultExpanded?: boolean,
  expandIcon?: React.ReactNode,
  title?: React.ReactNode | string
};

declare const SkillsCard: React.ComponentType<SkillsCard>;

export default SkillsCard;