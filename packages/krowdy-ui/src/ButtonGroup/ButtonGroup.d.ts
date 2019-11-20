
import { ButtonGroupProps } from '@material-ui/core/ButtonGroup';
import { PropTypes } from '..';

type Props = {
  color?: PropTypes.Color;
}

export type KrowdyButtonProps = Omit<ButtonGroupProps, keyof Props> & Props;

declare const Buttons: React.ComponentType<KrowdyButtonProps>;

export default Buttons;