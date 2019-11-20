import React from 'react';
import Button from '@krowdy-ui/core/Button'

export default () => (
  <section>
    <Button>Default</Button>
    <Button color='primary'>Primary</Button>
    <Button color='secondary'>Secondary</Button>
    <Button color='krowdy'>Krowdy</Button>
    <Button color='danger'>Danger</Button>
    <Button disabled>Danger</Button>
  </section>
)