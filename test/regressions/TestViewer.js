import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  '@global': {
    '*, *::before, *::after': {
      animation : 'none !important',
      // Disable transitions to avoid flaky screenshots
      boxSizing : 'inherit',
      transition: 'none !important'
    },
    body: {
      margin   : 0,
      overflowX: 'hidden'
    },
    html: {
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      // Do the opposite of the docs in order to help catching issues.
      boxSizing          : 'content-box'
    }
  },
  root: {
    backgroundColor: theme.palette.background.default,
    padding        : theme.spacing(1)
  }
})

function TestViewer(props) {
  const { children, classes } = props

  return <div className={classes.root}>{children}</div>
}

TestViewer.propTypes = {
  children: PropTypes.node.isRequired,
  classes : PropTypes.object.isRequired
}

export default withStyles(styles)(TestViewer)
