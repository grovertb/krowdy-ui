import React from 'react'
import { Button, Grid } from '@krowdy-ui/core'
import {
  Add as AddIcon
} from '@material-ui/icons'
import { ListInfo } from '@krowdy-ui/views'

const list = [
  {
    _id  : '1',
    title: 'No aplica'
  },
  {
    _id     : '2',
    subtitle: 'Alicorp',
    title   : 'Diseñador UX'
  },
  {
    _id     : '3',
    subtitle: 'Coca - Cola',
    title   : 'Diseñador UI'
  }
]

export default function () {
  const [ id, setId ] = React.useState()

  const _handleChange = (id) => () => {
    setId(id)
  }

  return (
    <Grid container>
      <ListInfo
        header={<Button color='primary' startIcon={<AddIcon />}>Agregar puesto</Button>}
        hover
        list={list}
        onChange={_handleChange}
        selectedId={id} />
      <ListInfo
        hover
        list={list}
        onChange={_handleChange} />
    </Grid>
  )
}
