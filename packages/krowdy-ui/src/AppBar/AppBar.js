import React from 'react';
import PropTypes from 'prop-types'
import MuiAppBar from '@material-ui/core/AppBar';


function AppBar({children, ...props}) {
  return (
    <MuiAppBar {...props}>
      {children}
    </MuiAppBar>
  );
}

AppBar.propTypes = {
// ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
}

export default AppBar