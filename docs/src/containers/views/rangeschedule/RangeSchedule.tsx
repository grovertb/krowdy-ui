import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { RangeSchedule } from '@krowdy-ui/views'

export default function () {
  return (
    <Paper>
      <Grid container justify='space-between'>
        <Grid item xs={6}>
                     Click me!
        </Grid>
        <Grid item xs={6}>
          <RangeSchedule />
        </Grid>
      </Grid>
    </Paper>
  )
}
