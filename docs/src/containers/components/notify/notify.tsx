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

  const _handleClickSuccess = () => {
    notify.success('!Notify!', { time: 5000 })
  }

  const _handleClickWarning = () => {
    notify.warning('!Notify!', { time: 5000 })
  }

  const _handleClickError = () => {
    notify.error('!Notify!', { time: 5000 })
  }

  return (
    <div className={classes.root}>
      <button onClick={_handleClickSuccess}>Notify Success</button>
      <br />
      <button  onClick={_handleClickWarning}>Notify Warning</button>
      <br />
      <button onClick={_handleClickError}>Notify Error</button>
    </div>
  )
}
