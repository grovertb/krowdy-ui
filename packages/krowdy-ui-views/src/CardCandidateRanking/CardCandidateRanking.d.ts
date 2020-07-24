interface Classes {
  container: Record<string, string>;
  leftContainer:Record<string, string>;
  rightContainer: Record<string, string>;
  actionContainer: Record<string, string>;
  actionHoverableContainer: Record<string, string>;
  headerAction: Record<string,string>;
  avatar: Record<string, string>;
  fullName: Record<string, string>;
  header: Record<string, string>;
  root : Record<string, string>;
  title: Record<string, string>
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