import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { ButtonGroup } from '@krowdy-ui/core'

export const styles = () => ({
})

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
            if(index !== selected)
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

SwitchButton.muiName = 'SwitchButton'

export default withStyles(styles, { name: 'KrowdySwitchButton' })(SwitchButton)
