import React from 'react'
import { Grid } from '@material-ui/core'
import { RangeSchedule } from '@krowdy-ui/views'

export default function () {
  return (
    <Grid
      alignContent='center' alignItems='center'
      container>
      <RangeSchedule showInput />
    </Grid>
  )
}
