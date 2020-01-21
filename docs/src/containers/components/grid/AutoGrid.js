import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'
import { Paper, Grid } from '@krowdy-ui/core'

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

export default function AutoGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  )
}
