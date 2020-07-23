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
  status: boolean;
  title: string;
  children: React.ReactNode;
  action: React.ReactNode;
  leftActionFooter: React.ReactNode;
  rightActionFooter: React.ReactNode;
};

declare const RankingGroup: React.ComponentType<RankingGroupProps>;

export default RankingGroup;