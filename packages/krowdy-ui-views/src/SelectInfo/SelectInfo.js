import React from 'react'
import PropTypes from 'prop-types'
import { Popper } from '@krowdy-ui/core'
import {
  ArrowDropDown as ArrowDropDownIcon
} from '@material-ui/icons'
import Item from '../ListInfo/Item'

const SelectInfo = ({ children, title, subtitle, icon, src, rightIcon, width, disabled }) => {
  const [ anchorEl, setAnchorEl ] = React.useState(null)

  const _handleClick = () => (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)

  return (
    <div>
      <Item
        disabled={disabled}
        icon={icon}
        onChange={_handleClick}
        rightIcon={rightIcon || <ArrowDropDownIcon />}
        src={src}
        subtitle={subtitle}
        title={title}
        variant='outlined'
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

export default SelectInfo
