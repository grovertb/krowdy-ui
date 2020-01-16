
import React from 'react'
import PropTypes from 'prop-types'
/* import clsx from 'clsx'
 */import { withStyles } from '@krowdy-ui/core/styles'
import { Input } from '@krowdy-ui/core'

export const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  inputsContent: {
    alignContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
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

const InputComponent = (props) => {
  const { classes, instructions, disabled, item, onUpdateItem, order } = props

  return (
    <div className={classes.container}>
      <span className={classes.order}>
        {order}
      </span>
      <div className={classes.inputsContent}>
        <Input
          className={classes.textField}
          disabled={disabled}
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
          instructions &&
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
    </div>)
}

InputComponent.propTypes = {
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  instructions: PropTypes.bool,
  item: PropTypes.object,
  onUpdateItem: PropTypes.func
}

InputComponent.muiName = 'InputComponent'

export default withStyles(styles, { name: 'KrowdyInputComponent' })(InputComponent)
