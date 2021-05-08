import React from 'react'
import { Grid } from '@material-ui/core'
import { RangeSchedule } from '@krowdy-ui/views'

export default function () {
  const today = new Date(new Date().setHours(24)).getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  const minDate = `${month + 1}/${today}/${year}`
  const maxDate = `${month === 12 ? 1 : month + 2}/${today}/${year}`

  return (
    <Grid
      alignContent='center' alignItems='center'
      container>
      <RangeSchedule initialRange={{ maxDate, minDate }} showInput />
    </Grid>
  )
}
