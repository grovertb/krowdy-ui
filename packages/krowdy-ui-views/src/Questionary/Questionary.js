import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Grid } from '@krowdy-ui/core'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
// import InputComponent from './InputsTextField'

export const styles = theme => ({
  container: {
    maxHeight: '100%',
    overflow: 'auto',
    width: '100%'
  },
  gridContainer: {
    height: 'calc(100% - 40px)',
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
    classes,
    children,
    onSetItems = () => { },
  } = props

  const onDragEnd = (result) => {
    if (!result.destination) return

    const newItems = reorder(
      children,
      result.source.index,
      result.destination.index
    )
    onSetItems(newItems)
  }

  return (
    <Grid className={classes.gridContainer} container>
      <Grid item xs={12} tabIndex='-1'>
        <DragDropContext onDragEnd={onDragEnd} >
          <Droppable direction='vertical' droppableId='droppable'>
            {(provided) => (
              <div
              className={classes.container}
              {...provided.droppableProps}
              ref={provided.innerRef}
              tabIndex='-1'>
              {
                React.Children.map(children,(item, index) => {
                  return (<Draggable
                      draggableId={`drag-${item.props.order}`}
                      index={index}
                      key={`drag-${item.props.order}`}>
                      {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        tabIndex='-1'>
                        {item}
                      </div>
                    )}
                  </Draggable>)
                })
              }
              {provided.placeholder}
            </div>)
            }
          </Droppable>
        </DragDropContext>
      </Grid>
    </Grid>
  )
}

Questionary.propTypes = {
  classes: PropTypes.object,
  onSetItems: PropTypes.func,
}

Questionary.muiName = 'Questionary'

export default withStyles(styles, { name: 'KrowdyQuestionary' })(Questionary)
