import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { DragComponent } from '@krowdy-ui/views'

export default function () {
  return (
    <Grid container >
      <DragComponent> 
        <div id='id1'>box1</div>
        <div id='id2'>box2</div>
        <div id='id3'>box3</div>
        <div id='id4'>box4</div>
      </DragComponent>
    </Grid>
  )
}
           /*  items={[
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
              }]} */