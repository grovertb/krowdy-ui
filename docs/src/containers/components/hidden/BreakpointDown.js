import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@krowdy-ui/styles'
import { Paper, Hidden, withWidth, Typography } from '@krowdy-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex'
  },
  paper: {
    color    : theme.palette.text.secondary,
    flex     : '1 0 auto',
    margin   : theme.spacing(1),
    padding  : theme.spacing(2),
    textAlign: 'center'
  },
  root: {
    flexGrow: 1
  }
}))

function BreakpointDown(props) {
  const classes = useStyles()
  const { width } = props

  return (
    <div className={classes.root}>
      <Typography variant='subtitle1'>Current width: {width}</Typography>
      <div className={classes.container}>
        <Hidden xsDown>
          <Paper className={classes.paper}>xsDown</Paper>
        </Hidden>
        <Hidden smDown>
          <Paper className={classes.paper}>smDown</Paper>
        </Hidden>
        <Hidden mdDown>
          <Paper className={classes.paper}>mdDown</Paper>
        </Hidden>
        <Hidden lgDown>
          <Paper className={classes.paper}>lgDown</Paper>
        </Hidden>
        <Hidden xlDown>
          <Paper className={classes.paper}>xlDown</Paper>
        </Hidden>
      </div>
    </div>
  )
}

BreakpointDown.propTypes = {
  width: PropTypes.oneOf([ 'lg', 'md', 'sm', 'xl', 'xs' ]).isRequired
}

export default withWidth()(BreakpointDown)
