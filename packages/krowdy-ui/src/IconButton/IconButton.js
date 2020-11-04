import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  Tooltip
} from '@material-ui/core'
import MuiIconButton from '@material-ui/core/IconButton'
import capitalize from '../utils/capitalize'
import withStyles from '../styles/withStyles'
import { fade, alpha } from '../styles/colorManipulator'

export const styles = theme => ({
  outlined: {
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabledBackground}`
    },
    border: `1px solid ${
      theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
    }`
  },
  outlinedError: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      },
      backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
      color          : theme.palette.error.light
    },
    border: `1px solid ${alpha(theme.palette.error.main, 0.5)}`,
    color : theme.palette.error.main
  },
  outlinedKrowdy: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      },
      // Reset on touch devices, it doesn't add specificity
      backgroundColor: fade(theme.palette.krowdy.main, theme.palette.action.hoverOpacity),
      color          : theme.palette.krowdy.light
    },
    border: `1px solid ${alpha(theme.palette.krowdy.main, 0.5)}`,
    color : theme.palette.krowdy.main
  },
  outlinedPrimary: {
    '&:hover': {
      color: theme.palette.primary.light
    },
    border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`
  },
  outlinedSecondary: {
    '&:hover': {
      color: theme.palette.secondary.light
    },
    border: `1px solid ${alpha(theme.palette.secondary.main, 0.5)}`
  },
  textError: {
    color: theme.palette.error.main
  },
  textKrowdy: {
    color: theme.palette.krowdy.main
  },
  typeSquare: {
    borderRadius: 4
  }
})

const IconButton = React.forwardRef(function IconButton({ color = 'default', ...props }, ref) {
  const {
    className: classNameProps,
    variant = 'text',
    classes,
    tooltip,
    square,
    ...otherProps
  } = props

  const className = clsx(
    classNameProps,
    classes[variant],
    {
      // [classes[`color${capitalize(color)}`]]: color !== 'default',
      [classes.typeSquare]: square
    },
    classes[`${variant}${capitalize(color)}`] ? {
      [classes[`${variant}${capitalize(color)}`]]: color !== 'default'
    } : {}
  )

  if(color === 'krowdy' || color === 'error') color = 'default'

  return (
    tooltip ?
      <Tooltip title={tooltip}>
        <MuiIconButton
          className={className} color={color} ref={ref}
          {...otherProps} />
      </Tooltip> :
      <MuiIconButton
        className={className} color={color} ref={ref}
        {...otherProps} />

  )
})

IconButton.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  classes  : PropTypes.object.isRequired,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color    : PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'krowdy', 'error' ]),
  square   : PropTypes.bool,
  tooltip  : PropTypes.string,
  /**
   * The variant to use.
   */
  variant  : PropTypes.oneOf([ 'text', 'outlined', 'contained' ])
}

export default withStyles(styles, { name: 'KrowdyIconButton' })(IconButton)
