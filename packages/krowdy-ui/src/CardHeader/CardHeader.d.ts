// export { default } from '@material-ui/core/CardHeader';
// export * from '@material-ui/core/CardHeader';

import { CardHeaderProps } from '@material-ui/core/CardHeader';
import { PropTypes } from '..';

type PropsCardHeader = {
  shadow?: boolean,
}

export type KrowdyCardHeaderProps = Omit<CardHeaderProps, keyof PropsCardHeader> & PropsCardHeader;

declare const CardHeader: React.ComponentType<KrowdyCardHeaderProps>;

export default CardHeader;