// export { default } from '@material-ui/core/IconButton';
// export * from '@material-ui/core/IconButton';

import { IconButtonProps } from '@material-ui/core/IconButton';
import { PropTypes } from '..';

type Props = {
  color?: PropTypes.Color;
  tooltip?: String;
}

export type KrowdyButtonProps = Omit<IconButtonProps, keyof Props> & Props;

declare const Buttons: React.ComponentType<KrowdyButtonProps>;

export default Buttons;