import React from 'react'
import { Grid, Button } from '@krowdy-ui/core'
import { SelectInfo, ListInfo } from '@krowdy-ui/views'
import {
  Add as AddIcon
} from '@material-ui/icons'

const list = [
  {
    _id  : '1',
    title: 'No aplica'
  },
  {
    _id     : '2',
    selected: true,
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
  const _handleClick = (e) => {
    e.stopPropagation()
  }

  const _handleChange = (id) => () => {
    console.log(id)
  }

  return (
    <Grid container>
      <SelectInfo
        clickAndClose
        subtitle='Alicorp'
        title='Diseñador UX'
        width={290} >
        <ListInfo
          header={<Button color='primary' onClick={_handleClick} startIcon={<AddIcon />}>Agregar puesto</Button>}
          hover
          list={list}
          onChange={_handleChange} />
      </SelectInfo>
      <SelectInfo
        disabled
        subtitle='Alicorp'
        title='Diseñador UX'
        width={290} />
    </Grid>
  )
}
