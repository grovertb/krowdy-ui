export namespace PropTypes {
  type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
  type Color = 'inherit' | 'primary' | 'secondary' | 'default' | 'krowdy' | 'danger'; 
  type Margin = 'none' | 'dense' | 'normal';
}

export { default as Button } from './Button';
export { default as IconButton } from './IconButton';
export { default as Toolbar } from './Toolbar';
export { default as AppBar } from './AppBar';
export { default as CssBaseline } from './CssBaseline';
export { default as ThemeProvider } from './ThemeProvider';
export { default as createMuiTheme } from './createMuiTheme';
export { default as Typography } from './Typography';
export { default as SvgIcon } from './SvgIcon';
export { default as SwipeableDrawer } from './SwipeableDrawer';
