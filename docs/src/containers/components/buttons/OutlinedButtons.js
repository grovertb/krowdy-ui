import React from 'react'
import { makeStyles } from '@krowdy-ui/core/styles'
import Button from '@krowdy-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

export default function OutlinedButtons() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button variant='outlined'>Default</Button>
      <Button variant='outlined' color='primary'>
        Primary
      </Button>
      <Button variant='outlined' color='secondary'>
        Secondary
      </Button>
      <Button variant='outlined' color='krowdy'>
        Krowdy
      </Button>
      <Button variant='outlined' color='error'>
        Error
      </Button>
      <Button variant='outlined' disabled>
        Disabled
      </Button>
      <Button variant='outlined' color='primary' href='#outlined-buttons'>
        Link
      </Button>
    </div>
  )
}