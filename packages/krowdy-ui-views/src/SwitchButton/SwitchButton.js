import React from 'react'
import PropTypes from 'prop-types'
import { ButtonGroup } from '@krowdy-ui/core'

const SwitchButton = props => {
  const {
    selected,
    children,
    onChange = () => { }
  } = props

  return (
    <div>
      <ButtonGroup>
        {children.map((child, index) => React.cloneElement(child, {
          onClick: (e) => {
            onChange(index)
            if(index !== selected && child.props.onClick)
              child.props.onClick(e)
          },
          variant: index === selected ? 'contained' : 'outlined'
        }
        ))}
      </ButtonGroup>
    </div >
  )
}

SwitchButton.propTypes = {
  index   : PropTypes.number,
  onChange: PropTypes.func,
  selected: PropTypes.number
}

export default SwitchButton
