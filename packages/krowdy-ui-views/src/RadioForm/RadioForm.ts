export type SkillsCard = {
  borderColor?: string,
  classes?: object,
  iconRight?: object,
  items?: object[],
  title?: string,
  withAvatar?: boolean,
  withDivider?: boolean,
};

declare const SkillsCard: React.ComponentType<SkillsCard>;

export default SkillsCard;