import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { Questionary } from '@krowdy-ui/views'

export default function () {

  return (
    <>
      <Grid container justify='center'>
        <Questionary
          questions={[
            {
              order: 1,
              question: 'Cuentame alguna vez que hayas tenido que tomar una decision quee no te gusto el trabajo ? que es l que hiciste? usa un ejemplo claro'
            },
            {
              order: 2,
              question: 'question2'
            },
          ]}
          eventRemoveIcon={() => {
            console.log('eliminar')
          }}
        />
      </Grid>
    </>
  )
}

