import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  Tooltip
} from '@material-ui/core'
import MuiIconButton from '@material-ui/core/IconButton'
import capitalize from '../utils/capitalize'
import withStyles from '../styles/withStyles'
import { fade } from '../styles/colorManipulator'

export const styles = theme => ({
  colorError: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      },
      backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
      color          : theme.palette.error.light
    },
    color: theme.palette.error.main
  },
  /* Styles applied to the root element if `color="krowdy"`. */
  colorKrowdy: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      },
      // Reset on touch devices, it doesn't add specificity
      backgroundColor: fade(theme.palette.krowdy.main, theme.palette.action.hoverOpacity),
      color          : theme.palette.krowdy.light
    },
    color: theme.palette.krowdy.main
  },
  /* Styles applied to the root element if `color="error"`. */
  colorPrimary: {
    '&:hover': {
      color: theme.palette.primary.light
    }
  },
  colorSecondary: {
    '&:hover': {
      color: theme.palette.secondary.light
    }
  },
  typeSquare: {
    borderRadius: 4
  }
})

const IconButton = React.forwardRef(function IconButton({ color = 'default', ...props }, ref) {
  const {
    className: classNameProps,
    classes,
    tooltip,
    square,
    ...otherProps
  } = props

  const className = clsx(
    classNameProps,
    {
      [classes[`color${capitalize(color)}`]]: color !== 'default'
    },
    {
      [classes.typeSquare]: square
    }
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
  tooltip  : PropTypes.string
}

export default withStyles(styles, { name: 'KrowdyIconButton' })(IconButton)
