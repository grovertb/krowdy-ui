import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { DragComponent } from '@krowdy-ui/views'

const data = [
  {
    _id: 'id1',
    content: 'box1'
  },
  {
    _id: 'id2',
    content: 'box2'
  },
  {
    _id: 'id3',
    content: 'box3'
  },
  {
    _id: 'id4',
    content: 'box4'
  },
  {
    _id: 'id5',
    content: 'box5'
  },
]

const Example = ({ id, content }) => (
  <div id={id}>{content}</div>
)

export default function () {
  const [items, setItems] = React.useState(data.map(({_id, content}) => <Example key={_id} id={_id} content={content} />))
  const handleItemsOrdered = items => {
    setItems(items)
  }

  return (
    <Grid container >
      <DragComponent onItemsOrdered={handleItemsOrdered}> 
        {items}
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