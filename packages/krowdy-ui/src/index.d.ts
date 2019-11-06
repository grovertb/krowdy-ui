export { default as Button } from './Button';
export { default as IconButton } from './IconButton';
export { default as Toolbar } from './Toolbar';
export { default as AppBar } from './AppBar';

export namespace PropTypes {
  type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
  type Color = 'inherit' | 'primary' | 'secondary' | 'default' | 'krowdy' | 'danger'; 
  type Margin = 'none' | 'dense' | 'normal';
}