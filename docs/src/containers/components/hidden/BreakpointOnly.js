import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@krowdy-ui/styles'
import { Paper, Hidden, withWidth, Typography } from '@krowdy-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
  },
  paper: {
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
  },
}))

function BreakpointOnly(props) {
  const classes = useStyles()
  const { width } = props

  return (
    <div className={classes.root}>
      <Typography variant='subtitle1'>Current width: {width}</Typography>
      <div className={classes.container}>
        <Hidden only='lg'>
          <Paper className={classes.paper}>Hidden on lg</Paper>
        </Hidden>
        <Hidden only='sm'>
          <Paper className={classes.paper}>Hidden on sm</Paper>
        </Hidden>
        <Hidden only={['sm', 'lg']}>
          <Paper className={classes.paper}>Hidden on sm and lg</Paper>
        </Hidden>
      </div>
    </div>
  )
}

BreakpointOnly.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(BreakpointOnly)
