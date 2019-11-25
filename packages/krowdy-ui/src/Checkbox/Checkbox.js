// export { default } from '@material-ui/core/Checkbox'
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import MuiCheckbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/styles';
import capitalize from '../utils/capitalize';
import { fade } from '../styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  colorKrowdy: {
    '&$checked': {
      color: theme.palette.krowdy.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.krowdy.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
    },
  },
  colorDanger: {
    '&$checked': {
      color: theme.palette.error.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
    },
  },
  disabled: {
  },
  checked: {
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

  if(color === 'krowdy' || color === 'danger') color = 'secondary'

  return (
    <MuiCheckbox
    className={className}
    color={color}
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
    {...props} />
  )
}

Checkbox.propTypes = {
  /**
   * @ignore
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'default', 'krowdy', 'danger']),
}

export default Checkbox