import React from 'react'
import { Grid, Tooltip, IconButton } from '@krowdy-ui/core'
import {
  Done as DoneIcon
} from '@material-ui/icons'
import { ListInfoItem } from '@krowdy-ui/views'

const action = (
  <div>
    <Tooltip title='prueba'>
      <IconButton>
        <DoneIcon fontSize='small' />
      </IconButton>
    </Tooltip>
  </div>
)

export default function () {
  return (
    <Grid container>
      <ListInfoItem
        iconColor='green'
        primaryTypographyProps={{
          variant: 'h6'
        }}
        rightIcon={action}
        secondaryTypographyProps={{
          variant: 'body2'
        }}
        src='https://s3.amazonaws.com/cdn.krowdy.com/media/images/Krowdy_isotipo_sin_fondo.svg'
        subtitle={
          <div>
            0 realizados | 0 en ejecución | 0 pendientes
          </div>
        }
        title='5 krowders'
        variant='outlined'
        variantHover
        width={400} />
      <ListInfoItem
        iconColor='green'
        onChange={() => () => {}}
        primaryTypographyProps={{
          variant: 'h6'
        }}
        rightIcon={action}
        rightIconHover
        secondaryTypographyProps={{
          variant: 'body2'
        }}
        src='https://s3.amazonaws.com/cdn.krowdy.com/media/images/Krowdy_isotipo_sin_fondo.svg'
        subtitle='0 realizados | 0 en ejecución | 0 pendientes'
        title='5 krowders'
        variant='default'
        width={400} />
      <ListInfoItem
        iconColor='green'
        primaryTypographyProps={{
          variant: 'h6'
        }}
        rightIcon={action}
        secondaryTypographyProps={{
          variant: 'body2'
        }}
        src='https://s3.amazonaws.com/cdn.krowdy.com/media/images/Krowdy_isotipo_sin_fondo.svg'
        subtitle='0 realizados | 0 en ejecución | 0 pendientes'
        title='5 krowders'
        variant='default'
        width={400} />
    </Grid>
  )
}
