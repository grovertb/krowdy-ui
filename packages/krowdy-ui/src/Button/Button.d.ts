import { ButtonProps } from '@material-ui/core/Button';
import { PropTypes } from '..';

type PropsButton = {
  color?: PropTypes.Color;
  dashed? : boolean,
}

export type KrowdyButtonProps = Omit<ButtonProps, keyof PropsButton> & PropsButton;

declare const Button: React.ComponentType<KrowdyButtonProps>;

export default Button;