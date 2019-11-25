import { ButtonProps } from '@material-ui/core/Button';
import { PropTypes } from '..';

type PropsButton = {
  color?: PropTypes.Color;
}

export type KrowdyButtonProps = Omit<ButtonProps, keyof Props> & Props;

declare const Button: React.ComponentType<KrowdyButtonProps>;

export default Button;