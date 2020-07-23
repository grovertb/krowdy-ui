interface Classes {
  backIcon: Record<string, string>,
  root: Record<string, string>,
  titleContainer: Record<string, string>
}

export type RankingGroupProps = {
  classes?: Classes,
};

declare const RankingGroup: React.ComponentType<RankingGroupProps>;

export default RankingGroup;