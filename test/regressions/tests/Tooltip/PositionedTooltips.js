import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'

const styles = {
  root: {
    height : 400,
    padding: 60,
    width  : 400
  }
}

// Used /docs/src/pages/components/tooltips/PositionedTooltips.js as inspiration.
function PositionedTooltips(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container justify='center'>
        <Grid item>
          <Tooltip open placement='top-start' title='Add'>
            <Button className={classes.fab}>top-start</Button>
          </Tooltip>
          <Tooltip open placement='top' title='Add'>
            <Button className={classes.fab}>top</Button>
          </Tooltip>
          <Tooltip open placement='top-end' title='Add'>
            <Button className={classes.fab}>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container justify='center'>
        <Grid item xs={6}>
          <Tooltip open placement='left-start' title='Add'>
            <Button className={classes.fab}>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip open placement='left' title='Add'>
            <Button className={classes.fab}>left</Button>
          </Tooltip>
          <br />
          <Tooltip open placement='left-end' title='Add'>
            <Button className={classes.fab}>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid
          alignItems='flex-end' container direction='column'
          item xs={6}>
          <Grid item>
            <Tooltip open placement='right-start' title='Add'>
              <Button className={classes.fab}>right-start</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip open placement='right' title='Add'>
              <Button className={classes.fab}>right</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip open placement='right-end' title='Add'>
              <Button className={classes.fab}>right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify='center'>
        <Grid item>
          <Tooltip open placement='bottom-start' title='Add'>
            <Button className={classes.fab}>bottom-start</Button>
          </Tooltip>
          <Tooltip open placement='bottom' title='Add'>
            <Button className={classes.fab}>bottom</Button>
          </Tooltip>
          <Tooltip open placement='bottom-end' title='Add'>
            <Button className={classes.fab}>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  )
}

PositionedTooltips.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PositionedTooltips)
