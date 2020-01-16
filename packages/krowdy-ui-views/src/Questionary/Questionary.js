import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/core/styles'
import { Button, Grid } from '@krowdy-ui/core'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import InputComponent from './InputsTextField'

export const styles = theme => ({
  button: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    paddingTop: 0
  },
  divQuestion: {
    flexDirection: 'row',
    fontSize: '1rem',
  },
  iconDragContainer: {
    color: theme.palette.grey[500]
  },
  label: {
    fontSize: '1.5rem'
  },
  lastInput: {
    margin: 'auto',
    paddingLeft: theme.spacing(1)
  },
  order: {
    fontWeight: 'bold'
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
    <Grid container>
      <Grid item xs={12} >
        <DragDropContext onDragEnd={onDragEnd} >
          <Droppable direction='vertical' droppableId='droppable'>
            {(provided) => (<div
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable draggableId={item._id} index={index} key={item._id}>
                  {(provided) => (
                    <Grid container
                      className={classes.divQuestion}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <Grid item className={clsx(classes.iconDragContainer)}>
                        {(iconDrag) ? iconDrag : null}
                      </Grid>
                      <Grid item xs={10} className={classes.inputsContent}>
                        <InputComponent
                          instructions={showInstructions}
                          disabled={disabled}
                          item={item}
                          order={(index + 1 < 10) ? `0${index + 1}.` : `${index + 1}.`}
                          onUpdateItem={onUpdateItem} />
                      </Grid>
                      <Grid item>
                        <Button
                          className={clsx(classes.button, classes.right)}
                          disabled={disabled}
                          onClick={() => onDeleteItem(item._id)}>
                          {(iconRemove) ? iconRemove : null}
                        </Button></Grid>
                    </Grid>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>)
            }
          </Droppable>
        </DragDropContext>
      </Grid>
      <Grid item xs={11} className={clsx(classes.lastInput)}>
        {addInputComponent}
      </Grid>
    </Grid>
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
