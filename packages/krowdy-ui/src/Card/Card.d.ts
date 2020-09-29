// export { default } from '@material-ui/core/Card';
// export * from '@material-ui/core/Card';

import { CardProps } from '@material-ui/core/Card';
import { PropTypes } from '..';

type PropsCard = {
  hoverable?: boolean;
  selected?: boolean;
}

export type KrowdyCardProps = Omit<CardProps, keyof PropsCard> & PropsCard;

declare const Card: React.ComponentType<KrowdyCardProps>;

export default Card;