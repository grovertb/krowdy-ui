import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from '@krowdy-ui/core'

const Dropdown = props => {
  const {
    children,
    content
  } = props
  const [ anchorEl, setAnchorEl ] = React.useState(null)

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
        onClose={handleClose}
        open={open}
        style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
        {content}
      </Modal>
    </div>
  )
}

Dropdown.propTypes = {
  children: PropTypes.any.isRequired,
  content : PropTypes.any.isRequired
}

Dropdown.muiName = 'CardCandidate'

export default Dropdown
