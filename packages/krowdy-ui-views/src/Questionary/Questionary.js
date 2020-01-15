import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/core/styles'
import { Input, Button } from '@krowdy-ui/core'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export const styles = theme => ({
  button: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    paddingTop: '0px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  divQuestion: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1rem',
    margin: theme.spacing(0, 2, 2, 2)
  },
  iconDragContainer: {
    color: theme.palette.grey[500]
  },
  inputsContent: {
    alignContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '80%',
    verticalAlign: 'top'
  },
  label: {
    fontSize: '1.5rem'
  },
  order: {
    fontWeight: 'bold'
  },
  textField: {
    '&:hover': {
      color: theme.palette.primary['600']
    },
    color: theme.palette.grey['700'],
    flexGrow: 8,
    margin: theme.spacing(0, 1, 1, 2),
    minWidth: '80%'
  },
  underline: {
    '&::after': {
      border: '1px solid red'
    },
    color: 'green'
  }
})

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function handleInputSearch(callback) {
  return callback
}

const Questionary = props => {
  const {
    classes,
    iconRemove,
    iconDrag,
    iconDragStyle = {},
    disabled = false,
    items = [],
    lastInputProps,
    setItems,
    showInstructions = true,
    onDeleteItem,
    onLastInput,
    onUpdateItem
  } = props

  const onDragEnd = (result) => {
    if (!result.destination) return

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    )
    setItems(newItems)
  }

  return (
    <div className={classes.container} >
      <DragDropContext onDragEnd={onDragEnd} >
        <Droppable direction='vertical' droppableId='droppable'>
          {(provided) => (<div
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable draggableId={item._id} index={index} key={item._id}>
                {(provided) => (
                  <div
                    className={classes.divQuestion}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div classes={iconDragStyle} className={clsx(styles.iconDragContainer)}>
                      {iconDrag}
                    </div>
                    <span className={classes.order}>
                      {(index + 1 < 10) ? `0${index + 1}.` : `${index + 1}.`}
                    </span>
                    <div className={classes.inputsContent}>
                      <Input
                        className={classes.textField}
                        disabled={disabled}
                        inputProps={{ classes: { underline: classes.underline } }}
                        multiline
                        onChange={event => {
                          onUpdateItem(item._id, {
                            question: event.target.value
                          })
                        }
                        }
                        rowsMax={3}
                        value={item.question} />
                      {
                        showInstructions &&
                        <Input
                          className={classes.textField}
                          disabled={disabled}
                          multiline
                          onChange={event => {
                            onUpdateItem(item._id, {
                              instructions: event.target.value
                            })
                          }
                          }
                          rowsMax={4}
                          value={item.instructions} />
                      }
                    </div>
                    <Button
                      className={clsx(classes.button, classes.right)}
                      disabled={disabled}
                      onClick={() => onDeleteItem(item._id)}>
                      {iconRemove}
                    </Button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>)
          }
        </Droppable>
      </DragDropContext>
      <div >
        <Input
          className={clsx(classes.lastInput)}
          onInput={handleInputSearch(onLastInput)}
          placeholder='Escriba una nueva pregunta'
          {...lastInputProps} />
      </div>
    </div>
  )
}

Questionary.propTypes = {
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  iconDrag: PropTypes.node,
  iconDragStyle: PropTypes.object,
  iconRemove: PropTypes.node,
  items: PropTypes.array.isRequired,
  lastInputProps: PropTypes.object,
  onDeleteItem: PropTypes.func,
  onLastInput: PropTypes.func,
  onUpdateItem: PropTypes.func,
  setItems: PropTypes.func,
  showInstructions: PropTypes.func
}

Questionary.muiName = 'Questionary'

export default withStyles(styles, { name: 'KrowdyQuestionary' })(Questionary)
