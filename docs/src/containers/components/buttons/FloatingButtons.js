import React from 'react';
import Fab from '@krowdy-ui/core/Fab'

import AddIcon from '@krowdy-ui/icons/Add';
import EditIcon from '@krowdy-ui/icons/Edit';
import FavoriteIcon from '@krowdy-ui/icons/Favorite';
import NavigationIcon from '@krowdy-ui/icons/Navigation';
import AppleIcon from '@krowdy-ui/icons/Apple';
import DeleteIcon from '@krowdy-ui/icons/Delete';

export default () => (
  <section>
    {/* <Fab variant='contained'>Default</Fab>
    <Fab variant='contained' color='primary'>Primary</Fab>
    <Fab variant='contained' color='secondary'>Secondary</Fab>
    <Fab variant='contained' color='krowdy'>Krowdy</Fab>
    <Fab variant='contained' color='danger'>Danger</Fab>
    <Fab variant='contained' disabled>Danger</Fab> */}
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
    <Fab color="secondary" aria-label="edit">
      <EditIcon />
    </Fab>
    <Fab color="krowdy" aria-label="edit">
      <AppleIcon />
    </Fab>
    <Fab color="danger" aria-label="edit">
      <DeleteIcon />
    </Fab>
    <Fab variant="extended" aria-label="like">
      <NavigationIcon />
      Extended
    </Fab>
    <Fab disabled aria-label="like">
      <FavoriteIcon />
    </Fab>
  </section>
)