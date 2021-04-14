import * as React from 'react'
import { isFragment } from 'react-is'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import capitalize from '../utils/capitalize'
import { fade } from '../styles/colorManipulator'
import withStyles from '../styles/withStyles'
import Button from '../Button'

// Force a side effect so we don't have any override priority issue.
// eslint-disable-next-line no-unused-expressions
Button.styles

export const styles = (theme) => ({
  /* Styles applied to the root element. */
  contained: {
    boxShadow: theme.shadows[2]
  },
  /* Styles applied to the root element if `variant="contained"`. */
  disabled : {},
  /* Pseudo-class applied to child elements if `disabled={true}`. */
  fullWidth: {
    width: '100%'
  },
  /* Styles applied to the root element if `fullWidth={true}`. */
  grouped: {
    minWidth: 40
  },
  /* Styles applied to the root element if `orientation="vertical"`. */
  groupedContained: {
    boxShadow: 'none'
  },
  /* Styles applied to the children. */
  groupedContainedHorizontal: {
    '&:not(:last-child)': {
      '&$disabled': {
        borderRight: `1px solid ${theme.palette.action.disabled}`
      },
      borderRight: `1px solid ${theme.palette.grey[400]}`
    }
  },
  /* Styles applied to the children if `orientation="horizontal"`. */
  groupedContainedPrimary: {
    '&:not(:last-child)': {
      borderColor: theme.palette.primary.dark
    }
  },
  /* Styles applied to the children if `orientation="vertical"`. */
  groupedContainedSecondary: {
    '&:not(:last-child)': {
      borderColor: theme.palette.secondary.dark
    }
  },
  /* Styles applied to the children if `variant="text"`. */
  groupedContainedVertical: {
    '&:not(:last-child)': {
      '&$disabled': {
        borderBottom: `1px solid ${theme.palette.action.disabled}`
      },
      borderBottom: `1px solid ${theme.palette.grey[400]}`
    }
  },
  /* Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
  groupedHorizontal: {
    '&:not(:first-child)': {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius   : 0
    },
    '&:not(:last-child)': {
      borderBottomRightRadius: 0,
      borderTopRightRadius   : 0
    }
  },
  /* Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
  groupedOutlined          : {},
  /* Styles applied to the children if `variant="text"` and `color="primary"`. */
  groupedOutlinedHorizontal: {
    '&:not(:first-child)': {
      marginLeft: -1
    },
    '&:not(:last-child)': {
      borderRightColor: 'transparent'
    }
  },
  /* Styles applied to the children if `variant="text"` and `color="secondary"`. */
  groupedOutlinedPrimary: {
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  },
  /* Styles applied to the children if `variant="outlined"`. */
  groupedOutlinedSecondary: {
    '&:hover': {
      borderColor: theme.palette.secondary.main
    }
  },
  /* Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
  groupedOutlinedVertical: {
    '&:not(:first-child)': {
      marginTop: -1
    },
    '&:not(:last-child)': {
      borderBottomColor: 'transparent'
    }
  },
  /* Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
  groupedText          : {},
  /* Styles applied to the children if `variant="outlined"` and `color="primary"`. */
  groupedTextHorizontal: {
    '&:not(:last-child)': {
      borderRight: `1px solid ${
        theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
      }`
    }
  },
  /* Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
  groupedTextPrimary: {
    '&:not(:last-child)': {
      borderColor: fade(theme.palette.primary.main, 0.5)
    }
  },
  /* Styles applied to the children if `variant="contained"`. */
  groupedTextSecondary: {
    '&:not(:last-child)': {
      borderColor: fade(theme.palette.secondary.main, 0.5)
    }
  },
  /* Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
  groupedTextVertical: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${
        theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
      }`
    }
  },

  /* Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
  groupedVertical: {
    '&:not(:first-child)': {
      borderTopLeftRadius : 0,
      borderTopRightRadius: 0
    },
    '&:not(:last-child)': {
      borderBottomLeftRadius : 0,
      borderBottomRightRadius: 0
    }
  },
  /* Styles applied to the children if `variant="contained"` and `color="primary"`. */
  root: {
    borderRadius: theme.shape.borderRadius,
    display     : 'inline-flex'
  },
  /* Styles applied to the children if `variant="contained"` and `color="secondary"`. */
  vertical: {
    flexDirection: 'column'
  }
})

const ButtonGroup = React.forwardRef(function ButtonGroup(props, ref) {
  const {
    children,
    classes,
    className,
    color = 'default',
    component: Component = 'div',
    disabled = false,
    disableFocusRipple = false,
    disableRipple = false,
    fullWidth = false,
    orientation = 'horizontal',
    size = 'medium',
    variant = 'outlined',
    ...other
  } = props

  const buttonClassName = clsx(
    classes.grouped,
    classes[`grouped${capitalize(orientation)}`],
    classes[`grouped${capitalize(variant)}`],
    classes[`grouped${capitalize(variant)}${capitalize(orientation)}`],
    classes[`grouped${capitalize(variant)}${color !== 'default' ? capitalize(color) : ''}`],
    {
      [classes.disabled]: disabled
    },
  )

  return (
    <Component
      className={clsx(
        classes.root,
        {
          [classes.contained]: variant === 'contained',
          [classes.vertical] : orientation === 'vertical',
          [classes.fullWidth]: fullWidth
        },
        className,
      )}
      ref={ref}
      role='group'
      {...other}>
      {React.Children.map(children, (child) => {
        if(!React.isValidElement(child))
          return null

        if(process.env.NODE_ENV !== 'production')
          if(isFragment(child)) {
            console.error(
              [
                "Material-UI: the ButtonGroup component doesn't accept a Fragment as a child.",
                'Consider providing an array instead.'
              ].join('\n'),
            )
          }

        return React.cloneElement(child, {
          className: clsx(buttonClassName, child.props.className),
          color    : child.props.color || color,
          disableFocusRipple,
          disableRipple,
          disabled : child.props.disabled || disabled,
          fullWidth,
          size     : child.props.size || size,
          variant  : child.props.variant || variant
        })
      })}
    </Component>
  )
})

ButtonGroup.propTypes = {
  /**
   * The content of the button group.
   */
  children          : PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  className         : PropTypes.string,
  /**
   * @ignore
   */
  classes           : PropTypes.object.isRequired,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color             : PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'krowdy', 'error' ]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component         : PropTypes.elementType,
  /**
   * If `true`, the buttons will be disabled.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the button keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableRipple     : PropTypes.bool,
  /**
   * If `true`, the button ripple effect will be disabled.
   */
  disabled          : PropTypes.bool,
  /**
   * If `true`, the buttons will take up the full width of its container.
   */
  fullWidth         : PropTypes.bool,
  /**
   * The group orientation.
   */
  orientation       : PropTypes.oneOf([ 'vertical', 'horizontal' ]),
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size              : PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  /**
   * The variant to use.
   */
  variant           : PropTypes.oneOf([ 'text', 'outlined', 'contained' ])
}

export default withStyles(styles, { name: 'MuiButtonGroup' })(ButtonGroup)
