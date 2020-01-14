import React from 'react'
import PropTypes from 'prop-types'
import MuiToolbar from '@material-ui/core/Toolbar'

function Toolbar({children, ...props}) {
  return (
    <MuiToolbar {...props}>
      {children}
    </MuiToolbar>
  )
}

Toolbar.propTypes = {
  /**
      * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   */
  children: PropTypes.node.isRequired
}

export default Toolbar