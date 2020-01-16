import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { Questionary } from '@krowdy-ui/views'
import { RemoveCircleOutline, DragIndicator } from '@material-ui/icons'



const items = [{
  _id: 'item-1',
  instructions: () => { },
  question: 'Cuentame alguna vez que hayas tenido quetoamr una decision que no te gusto en el trabajo? Que hiciste? Usa un ejemplo',
},
{
  _id: 'item-2',
  instructions: () => { },
  question: 'question 2',
},
{
  _id: 'item-3',
  instructions: () => { },
  question: 'question 3',
}]

export default function () {

  return (
    <Grid container justify='center'>
      <Grid item xs={10}>
        <Questionary
          items={items}
          iconDrag={<DragIndicator />}
          iconRemove={<RemoveCircleOutline color='error' />}
        />
      </Grid>
    </Grid>
  )
}

