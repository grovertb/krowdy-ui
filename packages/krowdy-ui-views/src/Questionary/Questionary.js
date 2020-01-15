import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
import { Input ,Button} from '@krowdy-ui/core'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
 
export const styles = theme => ({
  content: {
    width: '100%',
  },
  divQuestion: {
    fontSize: '1rem',
    margin: theme.spacing(4),
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
  },
  textField: {
    color: theme.palette.grey['700'],
    minWidth: '90%',
  },
})


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [ removed ] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}


const Questionary = props => {

  const {
/*     classes,*/
    iconRemove,
    iconDrag, 
    disabled=false,
    items,
    setItems,
    showInstructions,
    onDeleteItem,
    onUpdateItem
  } = props

  const onDragEnd = (result) => {

    if(!result.destination)
      return

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    )
    setItems(newItems)
  }


  return (
    <>
  <DragDropContext onDragEnd={onDragEnd} >
  <Droppable direction='vertical' droppableId='droppable'>
    {(provided, snapshot) => {
      return (<div
        {...provided.droppableProps}
        ref={provided.innerRef}
        >
        {items.map((item, index) => (
          <Draggable draggableId={item._id} index={index} key={item._id}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
              <Button disabled={disabled} onClick={() => onDeleteItem(index)}>
                 {iconDrag}
              </Button> 
                <Input
                  disabled={disabled}
                  onChange={event => {
                    onUpdateItem(index, {
                      question: event.target.value
                    })
                  }
                  }
                  value={item.question} />
                {
                  showInstructions &&
                  <Input
                    disabled={disabled}
                    onChange={event => {
                      onUpdateItem(index, {
                        instructions: event.target.value
                      })
                    }
                    }
                    value={item.instructions} />
                }
                <Button disabled={disabled} onClick={() => onDeleteItem(index)}>
                    {iconRemove}
                </Button> 
              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>)
    }
    }
  </Droppable>
</DragDropContext>
</>)
}
Questionary.propTypes = {
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  iconDrag:PropTypes.node,
  iconRemove:PropTypes.node,
  items: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func,
  onUpdateItem: PropTypes.func,
  setItems: PropTypes.func,
  showInstructions: PropTypes.func,
}

Questionary.muiName = 'Questionary'

export default withStyles(styles, { name: 'KrowdyQuestionary' })(Questionary)