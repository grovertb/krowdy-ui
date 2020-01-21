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

export default function ContainedButtons() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button variant='contained'>Default</Button>
      <Button color='primary' variant='contained'>
        Primary
      </Button>
      <Button color='secondary' variant='contained'>
        Secondary
      </Button>
      <Button color='krowdy' variant='contained'>
        Krowdy
      </Button>
      <Button color='error' variant='contained'>
        Error
      </Button>
      <Button disabled variant='contained'>
        Disabled
      </Button>
      <Button color='primary' href='#contained-buttons' variant='contained'>
        Link
      </Button>
    </div>
  )
}
