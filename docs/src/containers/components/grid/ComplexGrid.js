import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'
import { ButtonBase, Typography, Paper, Grid } from '@krowdy-ui/core'

const useStyles = makeStyles(theme => ({
  image: {
    height: 128,
    width : 128
  },
  img: {
    display  : 'block',
    margin   : 'auto',
    maxHeight: '100%',
    maxWidth : '100%'
  },
  paper: {
    margin  : 'auto',
    maxWidth: 500,
    padding : theme.spacing(2)
  },
  root: {
    flexGrow: 1
  }
}))

export default function ComplexGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img alt='complex' className={classes.img} src='https://material-ui.com/static/images/grid/complex.jpg' />
            </ButtonBase>
          </Grid>
          <Grid
            container item sm
            xs={12}>
            <Grid
              container direction='column' item
              spacing={2} xs>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Standard license
                </Typography>
                <Typography gutterBottom variant='body2'>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography color='textSecondary' variant='body2'>
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }} variant='body2'>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
