import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { Questionary } from '@krowdy-ui/views'
import {RemoveCircleOutline,DragIndicator} from '@material-ui/icons'

export default function () {

  return (
    <>
      <Grid container justify='center' style={{width:'700px'}}>
        <Questionary
          items={ 
           [{
            _id         : 'item-1',
            instructions: ()=>{},
            question    : 'question 1',
          },
          {
            _id         : 'item-2',
            instructions: ()=>{},
            question    : 'question 2',
          },
          {
            _id         : 'item-3',
            instructions: ()=>{},
            question    : 'question 3',
          },
        ]
        }
          iconDrag={<DragIndicator/>}
          iconRemove={<RemoveCircleOutline color='error'/>}
        />
      </Grid>
    </>
  )
}

