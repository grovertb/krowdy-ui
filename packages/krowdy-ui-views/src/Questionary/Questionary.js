import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
import { Input } from '@krowdy-ui/core'
/* import { RemoveCircleOutline, DragIndicator } from '@krowdy-ui/icons'
 */
export const styles = theme => ({
  content: {
    width: '80%',
  },
  divQuestion: {
    fontSize: '1rem',
    margin: theme.spacing(2, 0),
    width: '100%',
  },
  label: {
    fontSize: '1.5rem',
  },
  left: {
    'float': 'left',
    marginRight: '5px'
  },
  order: {
    fontWeight: 'bold'
  },
  right: {
    'float': 'right',
    marginLeft: '5px'
  },
  textField: {
    color: '#595959',
    marginLeft: '1%',
    minWidth: '90%',
  },
})

/* function handleRemoveQuestion(setDeleted, event) {
  setDeleted({ id: event.target.id, order: event.target.order })
} */

function changeInputField(event, setNewQuestion) {
  const target = event.target
  if (event.which === 13 || event.keyCode === 13) {
    setNewQuestion({ id: target.id, value: target.value })
  }
}

function printQuestion(element, index, classes, setDeleted) {
  return (<div className={classes.divQuestion} key={index}>
    {/*     <DragIndicator color='disabled' className={classes.left} />
 */}    {element}
    {(typeof index == 'number')
      ? <div className={classes.right}>
        {/*  <RemoveCircleOutline
          id={`remove-${element.order}`}
          color='error'
          order={element.order}
          onClick={(event) => {
            handleRemoveQuestion(setDeleted, event)
          }} /> */}</div>
      : <></>}
  </div>
  )
}



const Questionary = props => {

  const {
    classes,
    questions,
  } = props

  const [deletedQuestion, setDeleted] = React.useState({})
  const [newQuestion, setNewQuestion] = React.useState({})

  React.useEffect(() => {
    if (deletedQuestion.order && deletedQuestion.id.indexOf('remove') !== -1) {
      questions.filter(elem => elem.order !== deletedQuestion.order)
    } else if (newQuestion.value && newQuestion.id.indexOf('question') !== -1) {
      questions.push({ order: questions.length + 1, question: newQuestion.value })
    }
  })

  return (
    <form className={classes.content} >
      {(questions && questions.length > 0)
        ? questions.map((element, index) => printQuestion(
          <>
            <span className={classes.order}>{index + 1}.</span>
            <Input
              id={`question-${element.index + 1}`}
              rowsMax={4}
              defaultValue={element.question}
              inputProps={{ 'aria-label': 'description' }}
              className={classes.textField}
            /></>, index, classes, setDeleted))
        : null
      }
      {printQuestion(
        <>
          <span className={classes.order}>{questions.length + 1}.</span>
          <Input
            id='question0'
            className={classes.textField}
            placeholder='Escribe una pregunta'
            inputProps={{ 'aria-label': 'description' }}
            onKeyPress={e => changeInputField(e, setNewQuestion)}
          />
        </>, null, classes)}
    </form>
  )
}

Questionary.propTypes = {
  classes: PropTypes.object,
  questions: PropTypes.array.isRequired,
}


Questionary.muiName = 'Questionary'

export default withStyles(styles, { name: 'KrowdyQuestionary' })(Questionary)