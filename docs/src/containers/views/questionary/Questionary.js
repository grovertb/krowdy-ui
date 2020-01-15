import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { Questionary } from '@krowdy-ui/views'
import { RemoveCircleOutline, DragIndicator } from '@material-ui/icons'

export default function () {

  return (
    <>
      <Grid container justify='center'>
        <Questionary
          items={
            [{
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
            },
            ]
          }
          iconDrag={<DragIndicator />}
          iconRemove={<RemoveCircleOutline color='error' />}
          showInstructions={false}
        />
      </Grid>
    </>
  )
}

