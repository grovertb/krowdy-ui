import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { DragComponent } from '@krowdy-ui/views'
import { makeStyles } from '@krowdy-ui/styles'


const useStyle = makeStyles({
  container: {
    fontSize: 14,
    height: 300,
    outline: '1px solid black',
  },
  dragComponent: {
    height: 40,
    margin: 10,
    outline: '1px solid black',
    textAlign: 'center',
    width: 200
  }
})

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



export default function () {
  const classes = useStyle()
  const [items, setItems] = React.useState(data.map(({ _id, content }) => <div key={_id} id={_id} className={classes.dragComponent}>{content}</div>))
  const handleItemsOrdered = items => {
    setItems(items)
  }

  return (
    <Grid className={classes.container} >
      <DragComponent onItemsOrdered={handleItemsOrdered} >
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