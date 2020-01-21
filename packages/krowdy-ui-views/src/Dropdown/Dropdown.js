import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from '@krowdy-ui/core'

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
      <Modal
        anchorEl={anchorEl}
        style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
        onClose={handleClose}
        open={open}
      >
        {content}
      </Modal>
    </div>
  )
}

Dropdown.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any
}

Dropdown.muiName = 'CardCandidate'

export default Dropdown
