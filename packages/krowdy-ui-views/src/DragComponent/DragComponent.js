import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/styles'
import { Grid } from '@krowdy-ui/core'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
// import InputComponent from './InputsTextField'

export const styles = theme => ({
  gridContainer: {
    height: 'calc(100% - 40px)',
    overflow: 'auto',
    width: '100%'
  },
  lastInput: {
    fontSize: 14,
    margin: 'auto',
    paddingLeft: theme.spacing(3),
    width: '100%'
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
    children,
    onItemsOrdered = () => { },
  } = props

  const onDragEnd = (result) => {
    if (!result.destination) return

    const newItems = reorder(
      children,
      result.source.index,
      result.destination.index
    )
    onItemsOrdered(newItems)
  }


  return (
    <Grid className={classes.gridContainer} container>
      <Grid item xs={12} tabIndex='-1'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable direction='vertical' droppableId='droppable'>
            {(dropProvided) => (
              <div
                className={classes.container}
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
                tabIndex='-1'>
                {
                  React.Children.map(children, (item, index) => (
                    <Draggable
                      draggableId={`drag-${item.props.id}`}
                      index={index}
                      key={`drag-${item.props.id}`}>
                      {(dragProvided) => (
                        <div
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                          {...dragProvided.dragHandleProps}
                          tabIndex='-1'>
                          {item}
                        </div>
                      )}
                    </Draggable>
                  ))
                }
                {dropProvided.placeholder}
                <div className={clsx(classes.lastInput)}>
                  {addInputComponent}
                </div>
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
  onItemsOrdered: PropTypes.func,
}

Questionary.muiName = 'Questionary'

export default withStyles(styles, { name: 'KrowdyQuestionary' })(Questionary)
