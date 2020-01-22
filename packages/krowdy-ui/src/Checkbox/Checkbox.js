// export { default } from '@material-ui/core/Checkbox'
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import MuiCheckbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/styles'
import capitalize from '../utils/capitalize'
import { fade } from '../styles/colorManipulator'

const useStyles = makeStyles(theme => ({
  checked: {
  },
  colorError: {
    '&$checked': {
      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        // Reset on touch devices, it doesn't add specificity
        backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity)
      },
      color: theme.palette.error.main
    },
    '&$disabled': {
      color: theme.palette.action.disabled
    }
  },
  colorKrowdy: {
    '&$checked': {
      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        // Reset on touch devices, it doesn't add specificity
        backgroundColor: fade(theme.palette.krowdy.main, theme.palette.action.hoverOpacity)
      },
      color: theme.palette.krowdy.main
    },
    '&$disabled': {
      color: theme.palette.action.disabled
    }
  },
  disabled: {
  }
}), {
  name: 'KrowdyCheckbox'
})

function Checkbox({
  color = 'secondary',
  classes: classesProps = {},
  className: classNameProps = {},
  ...props
}) {
  const classes = useStyles()

  const className = clsx(
    classNameProps,
    classes[`color${capitalize(color)}`]
  )

  if(color === 'krowdy' || color === 'error') color = 'secondary'

  return (
    <MuiCheckbox
      classes={{
        ...classesProps,
        checked: clsx(
          classesProps.checked,
          classes.checked
        ),
        disabled: clsx(
          classesProps.disabled,
          classes.disabled
        )
      }}
      className={className}
      color={color}
      {...props} />
  )
}

Checkbox.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  classes  : PropTypes.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color    : PropTypes.oneOf([ 'primary', 'secondary', 'default', 'krowdy', 'error' ])
}

export default Checkbox
