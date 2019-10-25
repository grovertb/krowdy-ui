import React from 'react';

import MuiIconButton from '@material-ui/core/IconButton'

function IconButton({children, ...props}) {
  return (
    <MuiIconButton {...props}>
      {children}
    </MuiIconButton>
  );
}

export default IconButton;