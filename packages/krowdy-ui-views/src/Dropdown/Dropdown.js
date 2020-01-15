import React from 'react'
import PropTypes from 'prop-types'
import { Popover } from '@krowdy-ui/core'

const Dropdown = props => {
  const {
    children,
    content
  } = props
  const [anchorEl, setAnchorEl] = React.useState(null)

  const _handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <div>
      <div onClick={_handleClick}>
        {children}
      </div>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'center'
        }}
        onClose={handleClose}
        open={open}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top'
        }}>
        {content}
      </Popover>
    </div>
  )
}

Dropdown.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any
}

Dropdown.muiName = 'CardCandidate'

export default Dropdown
