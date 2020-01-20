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
  /* Styles applied to the root element if `color="krowdy"`. */
  colorError: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      // Reset on touch devices, it doesn't add specificity
      backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
    },
    color: theme.palette.error.main,
  },
  /* Styles applied to the root element if `color="error"`. */
  colorKrowdy: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      // Reset on touch devices, it doesn't add specificity
      backgroundColor: fade(theme.palette.krowdy.main, theme.palette.action.hoverOpacity),
    },
    color: theme.palette.krowdy.main,
  },
})

const IconButton = React.forwardRef(function IconButton({ color = 'default', ...props }, ref) {
  const {
    className: classNameProps,
    classes,
    tooltip,
    ...otherProps
  } = props
  
  const className = clsx(
    classNameProps,
    {
      [classes[`color${capitalize(color)}`]]: color !== 'default',
    }
  )

  if(color === 'krowdy' || color === 'error') color = 'default'
 
  return (
    tooltip ?
      <Tooltip title={tooltip}>
        <MuiIconButton ref={ref} className={className} color={color} {...otherProps} />
      </Tooltip> :
    <MuiIconButton ref={ref} className={className} color={color} {...otherProps} />

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
  classes: PropTypes.object.isRequired,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'krowdy', 'error']),
  tooltip: PropTypes.string
}

export default withStyles(styles, { name: 'KrowdyIconButton' })(IconButton)
