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
      <IconButton color='primary' >
        <EditIcon />
      </IconButton>
      <IconButton color='secondary' >
        <FavoriteIcon fontSize='small' />
      </IconButton>
      <IconButton color='krowdy' size='small' >
        <AppleIcon fontSize='small' />
      </IconButton>
      <IconButton color='error'  size='small' >
        <DeleteIcon fontSize='small' />
      </IconButton>
      <IconButton disabled >
        <NavigationIcon />
      </IconButton>
      <IconButton color='primary' disabled >
        <NavigationIcon />
      </IconButton>
      <br />
      <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton color='primary' variant='outlined' >
        <EditIcon />
      </IconButton>
      <IconButton color='secondary' variant='outlined' >
        <FavoriteIcon fontSize='small' />
      </IconButton>
      <IconButton color='krowdy' size='small' variant='outlined' >
        <AppleIcon fontSize='small' />
      </IconButton>
      <IconButton color='error' size='small' variant='outlined' >
        <DeleteIcon fontSize='small' />
      </IconButton>
      <IconButton disabled variant='outlined' >
        <NavigationIcon />
      </IconButton>
      <IconButton color='primary' disabled variant='outlined' >
        <NavigationIcon />
      </IconButton>
      <br />
      <IconButton square variant='outlined'>
        <AddIcon />
      </IconButton>
      <IconButton color='primary' square variant='outlined'>
        <EditIcon />
      </IconButton>
      <IconButton color='secondary' square variant='outlined'>
        <FavoriteIcon fontSize='small' />
      </IconButton>
      <IconButton
        color='krowdy'
        size='small'
        square
        variant='outlined'>
        <AppleIcon fontSize='small' />
      </IconButton>
      <IconButton color='error' square variant='outlined'>
        <DeleteIcon fontSize='small' />
      </IconButton>
      <IconButton disabled square variant='outlined'>
        <NavigationIcon />
      </IconButton>
      <IconButton
        color='primary' disabled square
        variant='outlined'>
        <NavigationIcon />
      </IconButton>
      <br />
      <IconButton
        size='small'
        square
        variant='outlined'>
        <AddIcon />
      </IconButton>
      <IconButton
        color='primary'
        size='small' square
        variant='outlined'>
        <EditIcon />
      </IconButton>
      <IconButton
        color='secondary'
        square
        variant='outlined'>
        <FavoriteIcon fontSize='small' />
      </IconButton>
      <IconButton
        color='krowdy'
        size='small' square
        variant='outlined'>
        <AppleIcon fontSize='small' />
      </IconButton>
      <IconButton
        color='error'
        size='small' square
        variant='outlined'>
        <DeleteIcon fontSize='small' />
      </IconButton>
      <IconButton
        disabled
        size='small'
        square
        variant='outlined'>
        <NavigationIcon />
      </IconButton>
      <IconButton
        color='primary'
        disabled
        size='small'
        square
        variant='outlined'>
        <NavigationIcon />
      </IconButton>
    </div>
  )
}
