import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import clsx from 'clsx'

export const styles = theme => ({
  aditionalInput: {
    color   : theme.palette.grey[700],
    fontSize: 14,
    margin  : 'auto',
    width   : 'fill-available'
  },
  container: {
    height  : '100%',
    overflow: 'auto',
    width   : '100%'
  }
})

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [ removed ] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const DragComponent = props => {
  const {
    addInputComponent,
    classes,
    children,
    onItemsOrdered = () => { },
    disableAdditionalInput = false
  } = props

  const onDragEnd = (result) => {
    if(!result.destination) return

    const newItems = reorder(
      children,
      result.source.index,
      result.destination.index
    )
    onItemsOrdered(newItems)
  }

  return (
    <div className={clsx(classes.container, classes.root)}>
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
                        style={dragProvided.draggableProps.style}
                        tabIndex='-1'>
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))
              }
              {dropProvided.placeholder}
              {addInputComponent && (
                <div className={clsx({ [classes.aditionalInput]: !disableAdditionalInput })}>
                  {addInputComponent }
                </div>
              )}
            </div>)
          }
        </Droppable>
      </DragDropContext>
    </div>
  )
}

DragComponent.propTypes = {
  addInputComponent: PropTypes.node,
  classes          : PropTypes.shape({
    aditionalInput: PropTypes.string,
    container     : PropTypes.string,
    root          : PropTypes.string
  }),
  disableAdditionalInput: PropTypes.bool,
  onItemsOrdered        : PropTypes.func
}

DragComponent.muiName = 'DragComponent'

export default withStyles(styles, { name: 'KrowdyDragComponent' })(DragComponent)
