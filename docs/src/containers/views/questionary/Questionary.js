import React from 'react'
import { Input, Paper } from '@krowdy-ui/core'
import { RemoveCircleOutline, DragIndicator } from '@material-ui/icons'
import { Inputs, DragComponent } from '@krowdy-ui/views'
import { makeStyles } from '@krowdy-ui/styles'

const data = [{
  _id: 1,
  instruction: 'answer',
  question: 'pregunta 1',
},
{
  _id: 2,
  instruction: 'answer',
  question: 'question 2',
},
{
  _id: 3,
  instruction: 'answer',
  question: 'question 3',
}, {
  _id: 4,
  instruction: 'answer',
  question: 'pregunta6',
},
{
  _id: 5,
  instruction: 'answer',
  question: 'question 5',
}, {
  _id: 6,
  instruction: 'answer',
  question: 'question 3',
}, {
  _id: 7,
  instruction: 'answer',
  question: 'pregunta6',
},
{
  _id: 8,
  instruction: 'answer',
  question: 'question 5',
},]


const useStyles = makeStyles({
  lastInput: {
    '&:hover': {
      borderBottom: '1px solid #335285'
    },
    borderBottom: '1px solid #D9D9D9',
    color: '#0050B3',
    fontSize: 14,
  },
  overflow: {
    height: 600,
    overflow: 'auto',
  },
  root: {
    height: 'calc(100% - 30px)',
    margin: '3% 5%',
    padding: '4%',
    width: '100%'
  },
  title: {
    fontSize: 14,
    margin: '2rem 0'
  }
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
      order={(index + 1 > 0 && index + 1 < 10) ? `0${index + 1}` : index + 1}
      showInstructions
      placeholderAnswer='Agrega instrucciones para Krowder'
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
      <p className={classes.title}>¿Qué deseas preguntar a tus candidatos?</p>
      <div className={classes.overflow}>
        <DragComponent onItemsOrdered={handleItemsOrdered} addInputComponent={<Input placeholder='Escriba una nueva pregunta' disableUnderline />}>
          {items}
        </DragComponent>
      </div>
    </Paper>
  )
}