import React from 'react';
import Button from '@krowdy-ui/core/Button'

export default () => (
  <section>
    <Button variant='outlined'>Default</Button>
    <Button variant='outlined' color='primary'>Primary</Button>
    <Button variant='outlined' color='secondary'>Secondary</Button>
    <Button variant='outlined' color='krowdy'>Krowdy</Button>
    <Button variant='outlined' color='danger'>Danger</Button>
    <Button variant='outlined' disabled>Danger</Button>
  </section>
)