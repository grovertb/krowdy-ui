import React from 'react';
import { makeStyles } from '@krowdy-ui/styles'
import { IconButton } from '@krowdy-ui/core'

import {
  Add as AddIcon,
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  Navigation as NavigationIcon,
  Apple as AppleIcon,
  Delete as DeleteIcon,
} from '@krowdy-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton variant='contained' color='primary'>
        <EditIcon />
      </IconButton>
      <IconButton variant='contained' color='secondary'>
        <FavoriteIcon />
      </IconButton>
      <IconButton variant='contained' color='krowdy'>
        <AppleIcon />
      </IconButton>
      <IconButton variant='contained' color='danger'>
        <DeleteIcon />
      </IconButton>
      <IconButton variant='contained' disabled>
        <NavigationIcon />
      </IconButton>
    </div>
  )
}