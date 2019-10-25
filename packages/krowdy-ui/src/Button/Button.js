import React from 'react';
import MuiButton from '@material-ui/core/Button'

function Button({children, ...props}) {
  return (
    <MuiButton {...props}>
      {children}
    </MuiButton>
  );
}

export default Button;