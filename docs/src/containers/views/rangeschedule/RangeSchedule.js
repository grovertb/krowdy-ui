import React, { useMemo } from 'react'
import { Grid } from '@material-ui/core'
import { RangeSchedule } from '@krowdy-ui/views'

const getDay = (days) => {
  const date = new Date()
  date.setDate(date.getDate() + days)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${month}/${day}/${year}`
}

export default function () {
  const initialRange = useMemo(() => {
    const minDate = getDay(1)
    const maxDate = getDay(20)

    return { maxDate, minDate }
  }, [])

  return (
    <Grid
      alignContent='center' alignItems='center'
      container>
      <RangeSchedule initialRange={initialRange} showInput />
    </Grid>
  )
}
