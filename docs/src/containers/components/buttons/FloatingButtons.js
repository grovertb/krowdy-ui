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
      margin: theme.spacing(1),
    },
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Fab color='primary' aria-label='add'>
        <AddIcon />
      </Fab>
      <Fab color='secondary' aria-label='edit'>
        <EditIcon />
      </Fab>
      <Fab color='krowdy' aria-label='edit'>
        <AppleIcon />
      </Fab>
      <Fab color='error' aria-label='edit'>
        <DeleteIcon />
      </Fab>
      <Fab variant='extended' aria-label='like'>
        <NavigationIcon />
        Extended
      </Fab>
      <Fab disabled aria-label='like'>
        <FavoriteIcon />
      </Fab>
    </div>
  )
}