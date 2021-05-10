import React, { useMemo } from 'react'
import { Grid } from '@material-ui/core'
import { RangeSchedule } from '@krowdy-ui/views'

const month = new Date().getMonth()
const year = new Date().getFullYear()

export default function () {
  const initialRange = useMemo(()=>{
    const minDate = `${month === 12 ? 1 : month + 1}/15/${year}`
    const maxDate = `${month === 11 ? 1 : month === 12 ? 2 : month + 2}/15/${year}`

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
