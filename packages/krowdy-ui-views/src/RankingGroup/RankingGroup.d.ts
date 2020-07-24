interface Classes {
  actions: Record<string, string>,
  containerTitle:Record<string, string>,
  content: Record<string, string>,
  header: Record<string, string>,
  root : Record<string, string>,
  title: Record<string, string>
}



export type RankingGroupProps = {
  classes?: Classes;
  status?: boolean;
  title?: string;
  action?: React.ReactNode;
  leftActionFooter?: React.ReactNode;
  rightActionFooter?: React.ReactNode;
  scroll?: boolean;
  subHeader?: React.ReactNode;
  shadow?: boolean;
  subtitle?: string;
};


declare const RankingGroup: React.ComponentType<RankingGroupProps>;

export default RankingGroup;