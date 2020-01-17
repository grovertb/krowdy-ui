
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
import clsx from 'clsx'
import { Input } from '@krowdy-ui/core'

export const styles = theme => ({
  container: {
    display      : 'flex',
    flexDirection: 'row',
    width        : '100%'
  },
  focused: {
    borderBottom: `1px solid ${theme.palette.primary[600]}`
  },
  inputsContent: {
    alignContent : 'flex-start',
    display      : 'flex',
    flexDirection: 'column',
    width        : '100%'
  },
  multiline: {
    paddingTop: 2
  },
  order: {
    fontSize  : 14,
    fontWeight: 'bold'
  },
  textField: {
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.primary[400]}`
    },
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    color       : theme.palette.grey[700],
    fontSize    : 14,
    margin      : theme.spacing(0, 1, 2, 1)
  }
})

const InputComponent = (props) => {
  const { classes, instructions, disabled, item, onUpdateItem, order } = props

  return (<div className={classes.container}>
    <span className={classes.order}>
      {order}
    </span>
    <div className={classes.inputsContent}>
      <Input
        autoFocus
        classes={{
          multiline: classes.multiline
        }}
        className={clsx(classes.textField, classes.focused)}
        defaultValue={item.question}
        disabled={disabled}
        disableUnderline
        multiline
        onChange={event => {
          onUpdateItem(item._id, {
            question: event.target.value
          })
        }}
        placeholder='Escribe una pregunta' />
      {
        instructions &&
        <Input
          classes={{
            multiline: classes.multiline
          }}
          className={clsx(classes.textField)}
          defaultValue={item.instructions}
          disabled={disabled}
          disableUnderline
          multiline
          onChange={event => {
            onUpdateItem(item._id, {
              instructions: event.target.value
            })
          }}
          placeholder='Agrega instrucciones para Krowder' />
      }
    </div>
  </div>)
}

InputComponent.propTypes = {
  classes     : PropTypes.object,
  disabled    : PropTypes.bool,
  instructions: PropTypes.bool,
  item        : PropTypes.object,
  onUpdateItem: PropTypes.func
}

InputComponent.muiName = 'InputComponent'

export default withStyles(styles, { name: 'KrowdyInputComponent' })(InputComponent)
