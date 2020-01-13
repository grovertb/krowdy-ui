import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'
import { Divider, Grid, Paper, Typography } from '@krowdy-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridGap: theme.spacing(3),
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  paper: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
}))

export default function CSSGrid() {
  const classes = useStyles()

  return (
    <div>
      <Typography variant='subtitle1' gutterBottom>
        Krowdy-UI Grid:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant='subtitle1' gutterBottom>
        CSS Grid Layout:
      </Typography>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 8' }}>
          <Paper className={classes.paper}>xs=8</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
      </div>
    </div>
  )
}
