import React from 'react';
import PropTypes from 'prop-types'
import MuiButton from '@material-ui/core/Button'

function Button({children, ...props}) {
  return (
    <MuiButton {...props}>
      {children}
    </MuiButton>
  );
}

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired
}

export default Button;