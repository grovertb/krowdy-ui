import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/core/styles'
import { Button, Grid } from '@krowdy-ui/core'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
// import InputComponent from './InputsTextField'

export const styles = theme => ({
  button: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    minWidth: 0,
    padding: 0
  },
  container: {
    height: '100%',
    width: '100%'
  },
  divQuestion: {
    flexDirection: 'row'
  },
  gridContainer: {
    height: 'calc(100% - 40px)',
    overflow: 'auto',
  },
  gridItem: {
    maxHeight: '100%'
  },
  iconDragContainer: {
    color: theme.palette.grey[500]
  },
  inputsContent: {
    flex: 1
  },
  label: {
    fontSize: '1.5rem'
  },
  lastInput: {
    fontSize: 14,
    margin: 'auto',
    paddingLeft: theme.spacing(1)
  },
  order: {
    fontWeight: 'bold'
  }
})

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const Questionary = props => {
  const {
    addInputComponent,
    classes,
    iconRemove,
    iconDrag,
    inputComponent: InputComponent,
    disabled,
    items = [],
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
    <Grid className={classes.gridContainer} container>
      <Grid className={classes.gridItem} item xs={12} >
        <DragDropContext onDragEnd={onDragEnd} >
          <Droppable direction='vertical' droppableId='droppable'>
            {(provided) => (<div
              className={classes.container}
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable
                  draggableId={item._id}
                  index={index}
                  key={item._id}>
                  {(provided) => (
                    <Grid
                      className={classes.divQuestion}
                      container
                      justify='space-between'
                      key={item._id}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      tabIndex='-1'>
                      <Grid className={clsx(classes.iconDragContainer)} item>
                        {(iconDrag) ? iconDrag : null}
                      </Grid>
                      <Grid className={classes.inputsContent} item xs={11}>
                        <InputComponent
                          disabled={disabled}
                          instructions={showInstructions}
                          item={item}
                          onUpdateItem={onUpdateItem}
                          order={(index + 1 < 10) ? `0${index + 1}.` : `${index + 1}.`} />
                      </Grid>
                      <Grid item>
                        <Button
                          className={clsx(classes.button)}
                          disabled={disabled}
                          onClick={() => onDeleteItem(item._id)}>
                          {(iconRemove) ? iconRemove : null}
                        </Button></Grid>
                    </Grid>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <Grid className={clsx(classes.lastInput)} item xs={11}>
                {addInputComponent}
              </Grid>
            </div>)
            }
          </Droppable>
        </DragDropContext>
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
  inputComponent: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func,
  onSetItems: PropTypes.func,
  onUpdateItem: PropTypes.func,
  showInstructions: PropTypes.bool
}

Questionary.muiName = 'Questionary'

export default withStyles(styles, { name: 'KrowdyQuestionary' })(Questionary)
