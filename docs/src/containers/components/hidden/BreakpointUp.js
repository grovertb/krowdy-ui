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

function BreakpointUp(props) {
  const classes = useStyles()
  const { width } = props

  return (
    <div className={classes.root}>
      <Typography variant='subtitle1'>Current width: {width}</Typography>
      <div className={classes.container}>
        <Hidden xsUp>
          <Paper className={classes.paper}>xsUp</Paper>
        </Hidden>
        <Hidden smUp>
          <Paper className={classes.paper}>smUp</Paper>
        </Hidden>
        <Hidden mdUp>
          <Paper className={classes.paper}>mdUp</Paper>
        </Hidden>
        <Hidden lgUp>
          <Paper className={classes.paper}>lgUp</Paper>
        </Hidden>
        <Hidden xlUp>
          <Paper className={classes.paper}>xlUp</Paper>
        </Hidden>
      </div>
    </div>
  )
}

BreakpointUp.propTypes = {
  width: PropTypes.oneOf([ 'lg', 'md', 'sm', 'xl', 'xs' ]).isRequired
}

export default withWidth()(BreakpointUp)
