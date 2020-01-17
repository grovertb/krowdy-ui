import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { DragComponent } from '@krowdy-ui/views'

export default function () {
  return (
    <Grid container >
      <DragComponent
        items={[
          {
            author: 'BMO',
            content: 'Sometimes life is scary and dark',
            id: 'finn',
          },
          {
            author: 'jake',
            content:
              'Sucking at something is the first step towards being sorta good at something.',
            id: 'jake',
          },
          {
            author: 'finn',
            content: 'Homies help homies. Always',
            id: 'bob',
          }]}
      />
    </Grid>
  )
}