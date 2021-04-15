import React from 'react'
import { Grid } from '@material-ui/core'
import { RangeSchedule } from '@krowdy-ui/views'

export default function () {
  return (
    <Grid
      alignContent='center' alignItems='center'
      container>
      <RangeSchedule initialRange={{ maxDate: '04/25/2021', minDate: '04/20/2021' }} showInput />
    </Grid>
  )
}
