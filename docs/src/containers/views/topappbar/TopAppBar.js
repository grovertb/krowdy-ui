import React from 'react'
import { TopAppBar } from '@krowdy-ui/views'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
}, { name: 'docs-TopAppBar' })

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TopAppBar color='primary' />
    </div>

  )
}
