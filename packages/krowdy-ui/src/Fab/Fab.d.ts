// export { default } from '@material-ui/core/Fab';
// export * from '@material-ui/core/Fab';

import { FabProps } from '@material-ui/core/Fab';
import { PropTypes } from '..';

type Props = {
  color?: PropTypes.Color;
}

export type KrowdyButtonProps = Omit<FabProps, keyof Props> & Props;

declare const Buttons: React.ComponentType<KrowdyButtonProps>;

export default Buttons;