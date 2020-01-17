import React from 'react'
import { Grid, Input } from '@krowdy-ui/core'
import { Questionary } from '@krowdy-ui/views'
import { RemoveCircleOutline, DragIndicator } from '@material-ui/icons'
import { QuestionaryInput } from '@krowdy-ui/views/Inputs'

const items = [{
  _id: 'item-1',
  instructions: () => { },
  question: 'Cuentame alguna vez que hayas tenido quetoamr una decision que no te gusto en el trabajo? Que hiciste? Usa un ejemplo',
},
{
  _id: 'item-2',
  instructions: () => { },
  question: 'question 2',
},
{
  _id: 'item-3',
  instructions: () => { },
  question: 'question 3',
}, {
  _id: 'item-1',
  instructions: () => { },
  question: 'Cuentame alguna vez que hayas tenido quetoamr una decision que no te gusto en el trabajo? Que hiciste? Usa un ejemplo',
},
{
  _id: 'item-2',
  instructions: () => { },
  question: 'question 2',
}, {
  _id: 'item-1',
  instructions: () => { },
  question: 'Cuentame alguna vez que hayas tenido quetoamr una decision que no te gusto en el trabajo? Que hiciste? Usa un ejemplo',
},
{
  _id: 'item-2',
  instructions: () => { },
  question: 'question 2',
}, {
  _id: 'item-1',
  instructions: () => { },
  question: 'Cuentame alguna vez que hayas tenido quetoamr una decision que no te gusto en el trabajo? Que hiciste? Usa un ejemplo',
},
{
  _id: 'item-2',
  instructions: () => { },
  question: 'question 2',
},]


export default () => {
  const [questions, setItems] = React.useState(items)

  const deleteItem = (id) => {
    const newQuestions = [...questions.slice(0, id), ...questions.slice(id + 1)]
    setItems(newQuestions)
  }
  return (
    <Grid container justify='center'>
      <Grid item xs={10}>
        <Questionary
          items={items}
          iconDrag={<DragIndicator />}
          iconRemove={<RemoveCircleOutline color='error' />}
          addInputComponent={<Input placeholder='Escriba una nueva pregunta' />}
          onDeleteItem={deleteItem}
          showInstructions={true}
          inputComponent={QuestionaryInput}
        />
      </Grid>
    </Grid>
  )
}