import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@krowdy-ui/styles'
import { Paper, Hidden, withWidth, Typography, Grid } from '@krowdy-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    color    : theme.palette.text.secondary,
    padding  : theme.spacing(2),
    textAlign: 'center'
  },
  root: {
    flexGrow: 1
  }
}))

function GridIntegration(props) {
  const classes = useStyles()
  const { width } = props

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant='subtitle1'>
        Current width: {width}
      </Typography>
      <Grid container spacing={3}>
        <Hidden xsUp>
          <Grid item xs>
            <Paper className={classes.paper}>xsUp</Paper>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs>
            <Paper className={classes.paper}>smUp</Paper>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs>
            <Paper className={classes.paper}>mdUp</Paper>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid item xs>
            <Paper className={classes.paper}>lgUp</Paper>
          </Grid>
        </Hidden>
        <Hidden xlUp>
          <Grid item xs>
            <Paper className={classes.paper}>xlUp</Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  )
}

GridIntegration.propTypes = {
  width: PropTypes.oneOf([ 'lg', 'md', 'sm', 'xl', 'xs' ]).isRequired
}

export default withWidth()(GridIntegration)
