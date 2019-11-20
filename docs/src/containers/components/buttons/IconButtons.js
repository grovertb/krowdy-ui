import React from 'react';
import IconButton from '@krowdy-ui/core/IconButton'

import {
  Add as AddIcon,
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  Navigation as NavigationIcon,
  Apple as AppleIcon,
  Delete as DeleteIcon,
} from '@krowdy-ui/icons';

export default () => (
  <section>
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
  </section>
)