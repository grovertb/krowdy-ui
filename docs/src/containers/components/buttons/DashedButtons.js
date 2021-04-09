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
      <Button dashed>Default</Button>
      <Button color='primary' dashed>
        Primary
      </Button>
      <Button color='secondary' dashed>
        Secondary
      </Button>
      <Button color='krowdy' dashed>
        Krowdy
      </Button>
      <Button color='error' dashed>
        Error
      </Button>
      <Button dashed disabled>
        Disabled
      </Button>
      <Button color='primary' dashed href='#outlined-buttons'>
        Link
      </Button>
    </div>
  )
}
