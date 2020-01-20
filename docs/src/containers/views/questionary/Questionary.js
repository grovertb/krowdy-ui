import React from 'react'
import { Input, Paper } from '@krowdy-ui/core'
import { RemoveCircleOutline, DragIndicator } from '@material-ui/icons'
import { Inputs, DragComponent } from '@krowdy-ui/views'
import { makeStyles } from '@material-ui/core/styles'

const data = [{
  _id: 1,
  instruction: () => { },
  question: 'pregunta 1',
},
{
  _id: 2,
  instruction: () => { },
  question: 'question 2',
},
{
  _id: 3,
  instruction: () => { },
  question: 'question 3',
}, {
  _id: 4,
  instruction: () => { },
  question: 'pregunta6',
},
{
  _id: 5,
  instruction: () => { },
  question: 'question 5',
}, {
  _id: 6,
  instruction: () => { },
  question: 'pregunta',
},
{
  _id: 7,
  instruction: () => { },
  question: 'question 7',
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
    padding: '3%',
    width: '100%'
  },
})

export default () => {
  const classes = useStyles()
  const [items, setItems] = React.useState(data.map((element, index) => (
    <Inputs
      key={element._id}
      id={element._id}
      item={element}
      iconDrag={<DragIndicator fontSize='small' />}
      iconRemove={<RemoveCircleOutline color='error' />}
      order={index + 1}
      showInstructions
      tabIndex='-1'
    />
  )))

  const handleItemsOrdered = items => {
    setItems(items.map((children, index) => React.cloneElement(children, {
      order: index + 1
    })))
  }

  return (
    <Paper elevation={0} variant='outlined' className={classes.root} >
      <p>¿Qué deseas preguntar a tus candidatos?</p>
      <div >
        <DragComponent onItemsOrdered={handleItemsOrdered} addInputComponent={<Input placeholder='Escriba una nueva pregunta' disableUnderline />}>
          {items}
        </DragComponent>
      </div>
    </Paper>
  )
}