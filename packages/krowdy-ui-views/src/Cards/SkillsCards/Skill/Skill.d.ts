

export type SkillCard = {

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

declare const SkillCard: React.ComponentType<SkillCard>;

export default SkillCard;