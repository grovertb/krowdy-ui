import React from 'react'
import { makeStyles } from '@krowdy-ui/core/styles'
import Button from '@krowdy-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

export default function OutlinedButtons() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button variant='outlined'>Default</Button>
      <Button color='primary' variant='outlined'>
        Primary
      </Button>
      <Button color='secondary' variant='outlined'>
        Secondary
      </Button>
      <Button color='krowdy' variant='outlined'>
        Krowdy
      </Button>
      <Button color='error' variant='outlined'>
        Error
      </Button>
      <Button disabled variant='outlined'>
        Disabled
      </Button>
      <Button color='primary' href='#outlined-buttons' variant='outlined'>
        Link
      </Button>
    </div>
  )
}
