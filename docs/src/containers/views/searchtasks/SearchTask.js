import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { SearchTask } from '@krowdy-ui/views'
import { SearchOutlined } from '@material-ui/icons'


export default function () {
  
  const [clicked, setClicked] = React.useState('id1')
  
  function _handleClicked(id){
    setClicked(id)
  }

  return (
    <>
      <Grid container justify='center'>
        <SearchTask
          firtsList={[
            {
              _id: 'id1',
              taskName: 'Todas las tareas',
            },
            {
              _id: 'id2',
              taskName: 'Usados recientemente'
            }]}

          secondList={[
            {

              _id: 'id3',
              taskName: 'Pruebas',
            },
            {
              _id: 'id4',
              taskName: 'Entrevistas'
            },
            {
              _id: 'id5',
              taskName: 'Verificaciones'
            }]}
          /*  propsListItemsToFirstList={{
             divider: true
           }} */
          /*  propsInput={{
             onChange: (e) => console.log(e.target.value)
            }} */
          onClickInItem = {_handleClicked}
          selected={clicked}
          iconOnSeeker={<SearchOutlined />}
        />

      </Grid >
    </>
  )
}

