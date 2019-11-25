import { CheckboxProps } from '@material-ui/core/Checkbox';
import { PropTypes } from '..';

type Props = {
  color?: 'primary' | 'secondary' | 'default' | 'krowdy' | 'danger';
}

export type KrowdyCheckboxProps =Omit<CheckboxProps, keyof Props> & Props;

declare const Checkbox: React.ComponentType<KrowdyCheckboxProps>;

export default Checkbox;