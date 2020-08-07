interface Classes {
  container: string;
  leftContainer:string;
  rightContainer: string;
  actionContainer: string;
  actionHoverableContainer: string;
  headerAction: string;
  avatar: string;
  fullName: string;
  header: string;
  root : string;
  title: string;
}

type IFuncOnClick = () => void

export interface CardCandidateRankingProps {
  action?: React.ReactNode;
  actionHoverable?: React.ReactNode;
  className?: string;
  onClick: IFuncOnClick;
  classes?: Classes;
  firstName?: string | null;
  lastName?: string | null;
  paddingLeft?: boolean;
  photo?: string | null;
  position?: number;
  selected?: boolean;
  primaryColorNumber?: boolean;
}

declare const CardCandidateRanking: React.ComponentType<CardCandidateRankingProps>;

export default CardCandidateRanking;