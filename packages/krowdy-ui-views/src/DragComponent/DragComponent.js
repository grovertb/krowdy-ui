import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Grid } from '@krowdy-ui/core'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export const styles = theme => ({
  button: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    minWidth: 0,
    padding: 0
  },
  container: {
    maxHeight: '100%',
    overflow: 'auto',
    width: '100%'
  },
  divComponent: {
    height: theme.spacing(3),
    margin: 'auto',
    outline: '1px solid red',
    width: theme.spacing(10)
  },
  gridContainer: {
    height: 'calc(100% - 40px)',
    outline: '1px solid black'
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

const reorder = ([...list], startIndex, endIndex) => {
  list.slice(endIndex, 0, list.slice(startIndex, 1)[0])
  return list
}

const Questionary = props => {

  const {
    classes,
    items,
  } = props

  const [stateItems, setItems] = React.useState(items)

  const onDragEnd = (result) => {
    const { destination, source } = result
    if (!destination) return
    if (destination.index === source.index) return

    const newItems = reorder(stateItems,
      source.index,
      destination.index,
    )
    setItems(newItems)
  }

  return (
    <Grid className={classes.gridContainer} container >
      <Grid className={classes.gridItem} item xs={12} >
        <DragDropContext onDragEnd={onDragEnd} >
          <Droppable direction='vertical' droppableId='droppable' >
            {dropProvided => (
              <div
                className={classes.container}
                ref={dropProvided.innerRef}
                {...dropProvided.droppableProps}
              >
                {
                  stateItems.map((item, index) => {
                    return (
                      <Draggable
                        draggableId={item.id}
                        index={index}
                        key={item.id}
                      >
                        {(dragProvided, dragSnapshot) => (
                          <div
                            id={item.id}
                            key={item.id}
                            className={classes.divComponent}
                            {...dragProvided.draggableProps}
                            {...dragProvided.dragHandleProps}
                            ref={dragProvided.innerRef}
                            data-is-dragging={dragSnapshot.isDragging}
                          /* tabIndex='-1' */>
                            <div >{item.id}</div>
                          </div>
                        )}
                      </Draggable>
                    )
                  })
                }
                {dropProvided.placeholder}
              </div>
            )
            }
          </Droppable>
        </DragDropContext>
      </Grid>
    </Grid>
  )
}

Questionary.propTypes = {
  classes: PropTypes.object,
  component: PropTypes.node,
  items: PropTypes.array,
  onDeleteItem: PropTypes.func,
  onSetItems: PropTypes.func,
  onUpdateItem: PropTypes.func,
}

Questionary.muiName = 'Questionary'

export default withStyles(styles, { name: 'KrowdyQuestionary' })(Questionary)
