import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Popper, withStyles } from '@krowdy-ui/core'
import {
  ArrowDropDown as ArrowDropDownIcon
} from '@material-ui/icons'
import { ListInfoItem } from '@krowdy-ui/views'

const styles = () => ({
  color: ({ iconColor }) => ({
    backgroundColor: iconColor || 'transparent'
  }),
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

  const open = Boolean(anchorEl)

  return (
    <div>
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
        <Popper
          anchorEl={anchorEl}
          disablePortal={true}
          open={open}
          placement='bottom'
          transition>
          {children}
        </Popper>
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
