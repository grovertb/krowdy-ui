import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  paper: {
    padding  : 16,
    textAlign: 'center'
  },
  root: {
    backgroundColor: theme.palette.secondary.main,
    width          : 400
  }
})

function StressGrid(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container direction='column' spacing={3}>
        <Grid container item spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>xs=9</Paper>
          </Grid>
        </Grid>
        <Grid
          container direction='row-reverse' item
          spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>first</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>last</Paper>
          </Grid>
        </Grid>
        <Grid
          container item justify='space-between'
          spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>space</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>between</Paper>
          </Grid>
        </Grid>
        <Grid
          alignItems='stretch' container direction='column-reverse'
          item spacing={1}>
          <Grid item>
            <Paper className={classes.paper}>reverse</Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>column</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

StressGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(StressGrid)
