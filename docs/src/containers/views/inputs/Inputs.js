import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { Inputs } from '@krowdy-ui/views'
import { RemoveCircleOutline, DragIndicator } from '@material-ui/icons'
import { makeStyles } from '@krowdy-ui/styles'

const useStyle = makeStyles({
  container: {
    margin: '30px 20px',
  }
})


export default function () {

  const classes = useStyle()

  return (
    <Grid container className={classes.container}  >
      <Grid xs={11} item tabIndex='-1'>
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