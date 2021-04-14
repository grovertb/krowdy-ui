import React from 'react'
import { Grid } from '@material-ui/core'
import { RangeSchedule } from '@krowdy-ui/views'

export default function () {
  return (
    <Grid
      alignContent='center' alignItems='center'
      container>
      <RangeSchedule initialRange={{ maxDate: '03/25/2021', minDate: '03/20/2021' }} showInput />
    </Grid>
  )
}
