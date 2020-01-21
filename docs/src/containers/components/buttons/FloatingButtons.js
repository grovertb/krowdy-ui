import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'
import { Fab } from '@krowdy-ui/core'
import {
  Add as AddIcon,
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  Navigation as NavigationIcon,
  Apple as AppleIcon,
  Delete as DeleteIcon
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Fab aria-label='add' color='primary'>
        <AddIcon />
      </Fab>
      <Fab aria-label='edit' color='secondary'>
        <EditIcon />
      </Fab>
      <Fab aria-label='edit' color='krowdy'>
        <AppleIcon />
      </Fab>
      <Fab aria-label='edit' color='error'>
        <DeleteIcon />
      </Fab>
      <Fab aria-label='like' variant='extended'>
        <NavigationIcon />
        Extended
      </Fab>
      <Fab aria-label='like' disabled>
        <FavoriteIcon />
      </Fab>
    </div>
  )
}
