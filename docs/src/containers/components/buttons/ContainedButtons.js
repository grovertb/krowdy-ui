import React from 'react';
import Button from '@krowdy-ui/core/Button'

export default () => (
  <section>
    <Button variant='contained'>Default</Button>
    <Button variant='contained' color='primary'>Primary</Button>
    <Button variant='contained' color='secondary'>Secondary</Button>
    <Button variant='contained' color='krowdy'>Krowdy</Button>
    <Button variant='contained' color='danger'>Danger</Button>
    <Button variant='contained' disabled>Danger</Button>
  </section>
)