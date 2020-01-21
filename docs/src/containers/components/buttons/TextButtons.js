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

export default function TextButtons() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button>Default</Button>
      <Button color='primary'>
        Primary
      </Button>
      <Button color='secondary'>
        Secondary
      </Button>
      <Button color='krowdy'>
        Krowdy
      </Button>
      <Button color='error'>
        Error
      </Button>
      <Button disabled>
        Disabled
      </Button>
      <Button color='primary' href='#text-buttons'>
        Link
      </Button>
    </div>
  )
}
