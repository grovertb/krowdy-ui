import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles({
  root: {
    flex: 1
  }
}, { name: 'DemoFiltersTree' })

export default function () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      Filters Tree
    </div>
  )
}
