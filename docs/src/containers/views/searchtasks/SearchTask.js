import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { SearchTask } from '@krowdy-ui/views'
import { SearchOutlined } from '@material-ui/icons'

export default function () {

  return (
    <>
      <Grid container justify='center'>
        <SearchTask
          firtsList={[
            {
              action: (e) => console.log('Todas las tareas'),
              taskName: 'Todas las tareas',
            },
            {
              action: (e) => console.log('Usados recientemente'),
              taskName: 'Usados recientemente'
            }]}
          secondList={[
            {
              action: (e) => console.log(e.target),
              taskName: 'Pruebas',
            },
            {
              action: (e) => console.log('Entrevistas'),
              taskName: 'Entrevistas'
            },
            {
              action: (e) => console.log('Verificaciones'),
              taskName: 'Verificaciones'
            }]}
          /*  propsListItemsToFirstList={{
             divider: true
           }} */
          propsInput={{
            onChange: (e) => console.log(e.target.value)
          }}
          iconOnSeeker={<SearchOutlined />}
        />

      </Grid >
    </>
  )
}

