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

export interface CardCandidateRankingProps {
  action?: React.ReactNode;
  actionHoverable?: React.ReactNode;
  className?: string;
  classes?: Classes;
  firstName?: string | null;
  lastName?: string | null;
  paddingLeft?: boolean;
  photo?: string | null;
  position?: number;
}

declare const CardCandidateRanking: React.ComponentType<CardCandidateRankingProps>;

export default CardCandidateRanking;