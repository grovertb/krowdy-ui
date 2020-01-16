
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
import clsx from 'clsx'
import { Input } from '@krowdy-ui/core'

export const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  focused: {
    borderBottom: `1px solid ${theme.palette.primary[600]}`,
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
      borderBottom: `1px solid ${theme.palette.primary[400]}`,
    },
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    color: theme.palette.grey[700],
    margin: theme.spacing(0, 1, 2, 1),
  },
})

const InputComponent = (props) => {
  const { classes, instructions, disabled, item, onUpdateItem, order } = props

  return (<div className={classes.container}>
    <span className={classes.order}>
      {order}
    </span>
    <div className={classes.inputsContent}>
      <Input
        className={clsx(classes.textField, classes.focused)}
        disableUnderline
        autoFocus
        disabled={disabled}
        multiline
        onChange={event => {
          onUpdateItem(item._id, {
            question: event.target.value
          })
        }}
        placeholder='Escribe una pregunta'
        defaultValue={item.question} />
      {
        instructions &&
        <Input
          disableUnderline
          className={clsx(classes.textField)}
          disabled={disabled}
          multiline
          onChange={event => {
            onUpdateItem(item._id, {
              instructions: event.target.value
            })
          }}
          placeholder='Agrega instrucciones para Krowder'
          defaultValue={item.instructions} />
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
