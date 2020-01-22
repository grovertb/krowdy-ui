
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import { Input } from '@krowdy-ui/core'
export const styles = theme => ({
  alignSelf: {
    alignSelf: 'flex-start',
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  focused: {
    borderBottom: `1px solid ${theme.palette.primary[600]}`
  },
  inputsContent: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: theme.spacing(0, 1)
  },
  multiline: {
    paddingTop: 2
  },
  order: {
    fontWeight: 'bold'
  },
  textField: {
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.primary[400]}`
    },
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    color: theme.palette.grey[700],
    margin: theme.spacing(0, 1, 2, 1),
    width: 'fill-available'
  },
  textSize: {
    fontSize: 14,
  }
})

const InputComponent = (props) => {
  const {
    classes,
    showInstructions,
    disabled,
    item,
    onUpdateItem = () => { },
    order,
    placeholderAnswer = 'Answer',
    placeholderQuestion = 'Question',
  } = props

  return (
    <div className={classes.container} tabIndex='-1'>
      <span className={clsx(classes.order, classes.alignSelf, classes.textSize)}>
        {order}.
      </span>
      <div className={classes.inputsContent} tabIndex='-1'>
        <Input
          autoFocus
          classes={{
            multiline: classes.multiline
          }}
          className={clsx(classes.textField, classes.focused, classes.textSize)}
          value={item.question}
          disabled={disabled}
          onChange={event => {
            onUpdateItem(item._id, {
              question: event.target.value
            })
          }}
          multiline
          disableUnderline
          placeholder={placeholderQuestion} />
        {
          showInstructions &&
          <Input
            classes={{
              multiline: classes.multiline
            }}
            className={clsx(classes.textField, classes.focused, classes.textSize)}
            disabled={disabled}
            disableUnderline
            multiline
            onChange={event => {
              onUpdateItem(item._id, {
                instructions: event.target.value
              })
            }}
            placeholder={placeholderAnswer} />
        }
      </div>
    </div>
  )
}

InputComponent.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string,
    multiline: PropTypes.string,
    order: PropTypes.string,
    textField: PropTypes.string,
    textSize: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  instructions: PropTypes.bool,
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    instructions: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
  onUpdateItem: PropTypes.func,
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholderAnswer: PropTypes.string,
  placeholderQuestion: PropTypes.string,
  showInstructions: PropTypes.bool
}

InputComponent.muiName = 'InputComponent'

export default withStyles(styles, { name: 'KrowdyInputComponent' })(InputComponent)
