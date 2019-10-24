import * as React from 'react';

export interface ButtonProps {
  color?: 'default' | 'primary' | 'secondary' | 'krowdy';
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
}

declare const Button: React.ComponentType<ButtonProps>;

export default Button;
