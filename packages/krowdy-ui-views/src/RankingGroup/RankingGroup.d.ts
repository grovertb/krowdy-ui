interface Classes {
  actions: string;
  containerTitle:string;
  content: string;
  header: string;
  root : string;
  title: string;
}



export type RankingGroupProps = {
  classes?: Classes;
  active?: boolean;
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