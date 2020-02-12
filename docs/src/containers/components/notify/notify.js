import React from 'react'
import { makeStyles } from '@krowdy-ui/core/styles'
import { notify } from '@krowdy-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow       : 1
  }
}))

export default function SimpleTabs() {
  const classes = useStyles()

  const runNotify = () => {
    notify.susscess('!Notify!', { time: 5000 })
  }

  const runNotify2 = () => {
    notify.warning('!Notify!', { time: 5000 })
  }

  const runNotify3 = () => {
    notify.error('!Notify!', { time: 5000 })
  }

  return (
    <div className={classes.root}>
      <button onClick={runNotify}>Notify Success</button>
      <br />
      <button  onClick={runNotify2}>Notify Warning</button>
      <br />
      <button onClick={runNotify3}>Notify Error</button>
    </div>
  )
}
