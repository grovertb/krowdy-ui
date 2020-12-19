import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Popover, withStyles } from '@krowdy-ui/core'
import {
  ArrowDropDown as ArrowDropDownIcon
} from '@material-ui/icons'
import { ListInfoItem } from '@krowdy-ui/views'

const styles = () => ({
  color: ({ iconColor }) => ({
    backgroundColor: iconColor || 'transparent'
  }),
  container: {
    position: 'relative'
  },
  popper: {
    zIndex: 1200
  },
  primary: {

  },
  secondary: {

  }
})

const SelectInfo = ({
  children, title, subtitle, icon, src, rightIcon = <ArrowDropDownIcon />,
  width, disabled, variant = 'outlined', classes, secondaryTypographyProps,
  primaryTypographyProps, rightIconHover
}) => {
  const [ anchorEl, setAnchorEl ] = React.useState(null)

  const _handleClick = () => (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const _handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const id = open ? 'simple-popover' : undefined

  return (
    <div className={classes.container}>
      <ListInfoItem
        classes={{
          avatar: clsx({
            [classes.color]: src
          }),
          primary  : classes.primary,
          secondary: classes.secondary
        }}
        disabled={disabled}
        icon={icon}
        onChange={_handleClick}
        primaryTypographyProps={primaryTypographyProps}
        rightIcon={rightIcon}
        rightIconHover={rightIconHover}
        secondaryTypographyProps={secondaryTypographyProps}
        src={src}
        subtitle={subtitle}
        title={title}
        variant={variant}
        width={width} />
      {children ? (
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{
            horizontal: 'center',
            vertical  : 'center'
          }}
          disablePortal
          id={id}
          keepMounted={false}
          onClose={_handleClose}
          open={open}
          transformOrigin={{
            horizontal: 'center',
            vertical  : 'center'
          }}>
          {children}
        </Popover>
      ) : null}
    </div>
  )
}

SelectInfo.propTypes = {
  disabled : PropTypes.bool,
  icon     : PropTypes.element,
  rightIcon: PropTypes.element,
  src      : PropTypes.string,
  subtitle : PropTypes.string,
  title    : PropTypes.string,
  width    : PropTypes.number
}

export default withStyles(styles, { name: 'SelectInfo' })(SelectInfo)
