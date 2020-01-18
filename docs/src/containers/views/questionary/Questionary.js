import React from 'react'
import { Input,Paper } from '@krowdy-ui/core'
import { DragComponent } from '@krowdy-ui/views'
import { RemoveCircleOutline, DragIndicator } from '@material-ui/icons'
import { Inputs } from '@krowdy-ui/views'
import { makeStyles } from '@material-ui/core/styles'

const items = [{
  _id: 'item-1',
  instruction: () => { },
  question: 'Cuentame alguna vez que hayas tenido quetoamr una decision que no te gusto en el trabajo? Que hiciste? Usa un ejemplo',
},
{
  _id: 'item-2',
  instruction: () => { },
  question: 'question 2',
},
{
  _id: 'item-3',
  instruction: () => { },
  question: 'question 3',
}, {
  _id: 'item-1',
  instruction: () => { },
  question: 'Cuentame alguna vez que hayas tenido quetoamr una decision que no te gusto en el trabajo? Que hiciste? Usa un ejemplo',
},
{
  _id: 'item-2',
  instruction: () => { },
  question: 'question 2',
}, {
  _id: 'item-1',
  instruction: () => { },
  question: 'Cuentame alguna vez que hayas tenido quetoamr una decision que no te gusto en el trabajo? Que hiciste? Usa un ejemplo',
},
{
  _id: 'item-2',
  instruction: () => { },
  question: 'question 2',
}]


const useStyles = makeStyles({
  lastInput: {
    '&:hover': {
      borderBottom: '1px solid #335285'
    },
    borderBottom: '1px solid #D9D9D9',
    color: '#0050B3',
    fontSize: 14,
  },
  root: {
    border: '1px solid gray',
    margin: '3% 5%',
    padding: '3%'
  },
})

export default () => {
  const classes = useStyles()
  return (
    <Paper elevation={0} variant='outlined' className={classes.root} >
    <p>¿Qué deseas preguntar a tus candidatos?</p>
    <div >
      <DragComponent> 
        {
          items.map((element,index)=>(           
            <Inputs
            item={element}
            iconDrag={<DragIndicator fontSize='small' />}
            iconRemove={<RemoveCircleOutline color='error' />}
            key={index}
            order = {index+1}
            showInstructions
            tabIndex='-1'
            />
           ))
        }
        <div className={classes.lastInput}>
          <Input placeholder='Escriba una nueva pregunta' disableUnderline />
        </div>
        </DragComponent>
    </div>
  </Paper>

  )
}