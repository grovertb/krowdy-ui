import { IconButtonProps } from '@material-ui/core/IconButton';
import { PropTypes } from '..';

type Props = {
  color?: PropTypes.Color;
  tooltip?: String;
  square?: Boolean;
  variant?: 'text' | 'outlined';
}

export type KrowdyButtonProps = Omit<IconButtonProps, keyof Props> & Props;

declare const Buttons: React.ComponentType<KrowdyButtonProps>;

export default Buttons;