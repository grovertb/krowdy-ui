import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { Inputs } from '@krowdy-ui/views'
import { RemoveCircleOutline, DragIndicator } from '@material-ui/icons'

export default function () {
  return (
    <Grid container >
      <Grid xs={12} item tabIndex='-1'>
        <Inputs
          order={1}
          item={{ _id: '123', instruction: () => { } }}
          iconDrag={<DragIndicator />}
          iconRemove={<RemoveCircleOutline color='error' />}
          showInstructions
        />
      </Grid>
    </Grid>
  )
}