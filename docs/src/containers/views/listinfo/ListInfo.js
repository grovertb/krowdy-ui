import React from 'react'
import { Button, Grid } from '@krowdy-ui/core'
import {
  Add as AddIcon
} from '@material-ui/icons'
import { ListInfo } from '@krowdy-ui/views'

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin  : theme.spacing(1),
//     minWidth: 200
//   }
// }))

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
  // const classes = useStyles()

  const _handleChange = (id) => () => {
    console.log(id)
  }

  return (
    <Grid container>
      <ListInfo
        header={<Button color='primary' startIcon={<AddIcon />}>Agregar puesto</Button>}
        list={list}
        onChange={_handleChange} />
    </Grid>
  )
}
