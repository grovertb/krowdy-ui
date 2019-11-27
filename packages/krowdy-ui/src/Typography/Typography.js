import React from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MuiTypography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'
import capitalize from '../utils/capitalize';

const useStyles = makeStyles(theme => ({
  display1: {
    fontWeight: 500,
    fontSize: '3.3125rem',
  },
  display2: {
    fontWeight: 300,
    fontSize: '3.3125rem',
  },
  info1: {
    fontSize: '0.75rem',
  },
  info2: {
    fontSize: '0.875rem',
  },
  body3: {
    fontSize: '1rem',
  },
  colorBody:{
    color: theme.palette.grey[700]
  },
  colorInfo:{
    color: theme.palette.grey[600]
  },
}), { name: 'KrowdyTypography'})

const Typography = React.forwardRef(function Typography({
  variant = 'body1',
  color = 'initial',
  className: classNameProps,
  ...props
}, ref) {
  const classes = useStyles()

  const isKrowdyVariant = variant === 'display1' || variant === 'display2' || variant === 'body3' || variant === 'info1' || variant === 'info2'
  const isKrowdyColor = color === 'body' || color === 'info'

  const className = clsx(
    classNameProps,
    {
      [classes[variant]]: isKrowdyVariant,
      [classes[`color${capitalize(color)}`]]: isKrowdyColor
    }
  )

  if(isKrowdyVariant) variant = 'body1'
  if(isKrowdyColor) color = 'initial'

  return (
    <MuiTypography color={color} className={className} variant={variant} {...props} ref={ref} />
  )
})

Typography.propTypes = {
   /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
    'body',
    'info',
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
    'info2',
  ]),
}

export default Typography
