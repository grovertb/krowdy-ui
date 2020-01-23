import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { DragComponent } from '@krowdy-ui/views'
import { makeStyles } from '@krowdy-ui/styles'

const useStyle = makeStyles({
  container: {
    fontSize: 14,
    outline : '1px solid black'
  },
  dragComponent: {
    height   : 40,
    outline  : '1px solid black',
    padding  : 10,
    textAlign: 'center',
    width    : 200
  }
})

const data = [
  {
    _id    : 'id1',
    content: 'box1'
  },
  {
    _id    : 'id2',
    content: 'box2'
  },
  {
    _id    : 'id3',
    content: 'box3'
  },
  {
    _id    : 'id4',
    content: 'box4'
  },
  {
    _id    : 'id5',
    content: 'box5'
  }
]

export default function () {
  const classes = useStyle()
  const [ items, setItems ] = React.useState(data.map(({ _id, content }) => <div className={classes.dragComponent} id={_id} key={_id}>{content}</div>))
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
