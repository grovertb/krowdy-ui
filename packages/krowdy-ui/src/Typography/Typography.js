import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import MuiTypography from '@material-ui/core/Typography'
import withStyles from '../styles/withStyles'
import capitalize from '../utils/capitalize'

export const styles = theme => ({
  body3: {
    fontSize: '1rem'
  },
  colorBody: {
    color: theme.palette.grey[700]
  },
  colorInfo: {
    color: theme.palette.grey[600]
  },
  display1: {
    fontSize  : '3.3125rem',
    fontWeight: 500
  },
  display2: {
    fontSize  : '3.3125rem',
    fontWeight: 300
  },
  info1: {
    fontSize: '0.75rem'
  },
  info2: {
    fontSize: '0.875rem'
  }
})

const Typography = React.forwardRef(function Typography({
  variant = 'body1',
  color = 'initial',
  classes,
  className: classNameProps,
  ...props
}, ref) {
  const isKrowdyVariant = variant === 'display1' || variant === 'display2' || variant === 'body3' || variant === 'info1' || variant === 'info2'
  const isKrowdyColor = color === 'body' || color === 'info'

  const className = clsx(
    classNameProps,
    {
      [classes[variant]]                    : isKrowdyVariant,
      [classes[`color${capitalize(color)}`]]: isKrowdyColor
    }
  )

  if(isKrowdyVariant) variant = 'body1'
  if(isKrowdyColor) color = 'initial'

  return (
    <MuiTypography
      className={className}
      color={color}
      ref={ref}
      variant={variant}
      {...props} />
  )
})

Typography.propTypes = {
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
  color    : PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
    'body',
    'info'
  ]),
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'body3',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit',
    'display1',
    'display2',
    'info1',
    'info2'
  ])
}

export default withStyles(styles, { name: 'KrowdyTypography' })(Typography)
