import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/core/styles'
import { Button } from '@krowdy-ui/core'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import InputComponent from './InputsTextField'

export const styles = theme => ({
  button: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    paddingTop: 0
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
    minWidth: '70%',
  },
  label: {
    fontSize: '1.5rem'
  },
  lastInput: {
    marginLeft: theme.spacing(8),
    minWidth: '75%'
  },
  order: {
    fontWeight: 'bold'
  },
  textField: {
    '&:hover': {
      color: theme.palette.primary[600]
    },
    color: theme.palette.grey[700],
    margin: theme.spacing(0, 1, 1, 2),
  },
})


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const Questionary = props => {
  const {
    classes,
    iconRemove,
    iconDrag,
    disabled = false,
    items = [],
    addInputComponent,
    onSetItems = () => { },
    showInstructions = true,
    onDeleteItem = () => { },
    onUpdateItem = () => { }
  } = props

  const onDragEnd = (result) => {
    if (!result.destination) return

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    )
    onSetItems(newItems)
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
                    <div className={clsx(styles.iconDragContainer)}>
                      {(iconDrag) ? iconDrag : null}
                    </div>
                    <div className={classes.inputsContent}>
                      <InputComponent
                        instructions={showInstructions}
                        disabled={disabled}
                        item={item}
                        order={(index + 1 < 10) ? `0${index + 1}.` : `${index + 1}.`}
                        onUpdateItem={onUpdateItem} />
                    </div>
                    <Button
                      className={clsx(classes.button, classes.right)}
                      disabled={disabled}
                      onClick={() => onDeleteItem(item._id)}>
                      {(iconRemove) ? iconRemove : null}
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
      <div className={clsx(classes.lastInput)}>
        {addInputComponent}
      </div>
    </div>
  )
}

Questionary.propTypes = {
  addInputComponent: PropTypes.node,
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  iconDrag: PropTypes.node,
  iconRemove: PropTypes.node,
  items: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func,
  onSetItems: PropTypes.func,
  onUpdateItem: PropTypes.func,
  showInstructions: PropTypes.bool
}

Questionary.muiName = 'Questionary'

export default withStyles(styles, { name: 'KrowdyQuestionary' })(Questionary)
