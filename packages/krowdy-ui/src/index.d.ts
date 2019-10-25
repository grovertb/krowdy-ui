export { default as Button } from './Button';
export { default as IconButton } from './IconButton';

export namespace PropTypes {
  type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
  type Color = 'inherit' | 'primary' | 'secondary' | 'default' | 'krowdy' | 'danger'; 
  type Margin = 'none' | 'dense' | 'normal';
}