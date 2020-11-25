import React from 'react'
import { TextField as MuiTextField, withStyles } from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'

export const styles = (theme) => ({
  filled: {
    backgroundColor: theme.palette.secondary[10]
  },
  input: {
    '&::placeholder': {
      color  : theme.palette.grey[600],
      opacity: 1
    },
    padding: theme.spacing(.5, 0)
  },
  inputSelect: {
    backgroundColor: 'red'
  },
  root: {
    borderRadius: theme.shape.borderRadius,
    color       : 'inherit',
    fontSize    : 10,
    padding     : theme.spacing(.5, .75)
  },
  unPadding: {
    padding: 0
  },
  unPaddingInput: {
    '&::placeholder': {
      color  : theme.palette.grey[600],
      opacity: 1
    },
    padding: theme.spacing(.25, .5)
  }
})

const ReferentInput = ({ filled, unPadding, classes, ...props }) => (
  <MuiTextField
    inputProps={{
      autoComplete: `new-${props.name}`
    }}
    InputProps={{
      ...props.InputProps,
      className: clsx({
        [classes.filled]: filled
      }),
      classes: {
        input: clsx(classes.input, {
          [classes.unPaddingInput]: unPadding
        }),
        root: clsx(classes.root, {
          [classes.unPadding]: unPadding
        })
      },
      disableUnderline: true
    }}
    {...props} />
)

ReferentInput.propTypes = {
  ...MuiTextField.propTypes,
  classes: PropTypes.shape({
    ...MuiTextField.propTypes.classes,
    filled        : PropTypes.string,
    unPadding     : PropTypes.string,
    unPaddingInput: PropTypes.string
  }),
  filled   : PropTypes.bool,
  unPadding: PropTypes.bool
}

export default withStyles(styles, { name: 'ReferentInput' })(ReferentInput)
