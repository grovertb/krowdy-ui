
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import { Input, Grid, Button } from '@krowdy-ui/core'

export const styles = theme => ({
  button: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    minWidth: 0,
    padding: 0
  },
  divQuestion: {
    width: '100%'
  },
  focused: {
    borderBottom: `1px solid ${theme.palette.primary[600]}`
  },
  iconDragContainer: {
    color: theme.palette.grey[500]
  },
  inputsContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  multiline: {
    paddingTop: 2
  },
  order: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  textField: {
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.primary[400]}`
    },
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    color: theme.palette.grey[700],
    fontSize: 14,
    margin: theme.spacing(0, 1, 2, 1)
  }
})

const InputComponent = (props) => {
  const { classes,
    showInstructions,
    disabled,
    item,
    onUpdateItem = () => { },
    order,
    iconDrag,
    iconRemove,
    onDeleteItem = () => { },
  } = props

  return (
    <Grid
      className={classes.divQuestion}
      tabIndex='-1'
      container
    >
      <Grid className={clsx(classes.iconDragContainer)} item>
        {(iconDrag) ? iconDrag : null}
      </Grid>
      <span className={classes.order}>
        {(order<10)?`0${order}`:order}.
      </span>
      <Grid className={classes.inputsContent} item xs={11}>
        <Input
          autoFocus
          classes={{
            multiline: classes.multiline
          }}
          className={clsx(classes.textField, classes.focused)}
          defaultValue={item.question}
          disabled={disabled}
          onChange={event => {
            onUpdateItem(item._id, {
              question: event.target.value
            })
          }}
          multiline
          disableUnderline
          placeholder='Escribe una pregunta' />
        {
          showInstructions &&
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
      </Grid>
      <Grid item>
        <Button
          className={clsx(classes.button)}
          disabled={disabled}
          onClick={() => onDeleteItem(item._id)}>
          {(iconRemove) ? iconRemove : null}
        </Button>
      </Grid>
    </Grid>
  )
}

InputComponent.propTypes = {
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  instructions: PropTypes.bool,
  item: PropTypes.object.isRequired,
  onDeleteItem: PropTypes.func,
  onUpdateItem: PropTypes.func,
  order: PropTypes.number.isRequired,
  showInstructions: PropTypes.bool
}

InputComponent.muiName = 'InputComponent'

export default withStyles(styles, { name: 'KrowdyInputComponent' })(InputComponent)
