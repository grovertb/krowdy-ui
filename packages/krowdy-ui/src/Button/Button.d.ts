import { ButtonProps } from '@material-ui/core/Button';
import { PropTypes } from '..';

type Props = {
  color?: PropTypes.Color;
}

export type KrowdyButtonProps = Omit<ButtonProps, keyof Props> & Props;

declare const Buttons: React.ComponentType<KrowdyButtonProps>;

export default Buttons;