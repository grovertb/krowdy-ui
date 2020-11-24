import React from 'react'
import { TextField as KTextField, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

// filled,

const InputCustomized = ({ filled, unPadding, round, ...props }) => {
  const classes = useStyles()

  return (
    <KTextField
      inputProps={{
        autoComplete: `new-${props.name}`
      }}
      {...props}
      InputProps={{
        ...props.InputProps,
        className: clsx({
          [classes.filled]: filled,
          [classes.round] : round
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
      }} />
  )
}

const useStyles = makeStyles((theme) => ({
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
    borderRadius: 4,
    color       : 'inherit',
    fontSize    : 10,
    padding     : theme.spacing(.5, .75)
  },
  round: {
    borderRadius: 4,
    padding     : 8
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
}))

export default InputCustomized
