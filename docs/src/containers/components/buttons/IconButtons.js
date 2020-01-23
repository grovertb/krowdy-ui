import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'
import { IconButton } from '@krowdy-ui/core'
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
      <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton color='primary' square variant='contained'>
        <EditIcon />
      </IconButton>
      <IconButton color='secondary' variant='contained'>
        <FavoriteIcon />
      </IconButton>
      <IconButton color='krowdy' variant='contained'>
        <AppleIcon />
      </IconButton>
      <IconButton color='error' variant='contained'>
        <DeleteIcon />
      </IconButton>
      <IconButton disabled variant='contained'>
        <NavigationIcon />
      </IconButton>
    </div>
  )
}
