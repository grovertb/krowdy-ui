import React from 'react'
import PropTypes from 'prop-types'
import { ButtonGroup } from '@krowdy-ui/core'

const SwitchButton = props => {
  const {
    selected,
    children,
    onChange = () => { },
    classes
  } = props

  return (
    <div>
      <ButtonGroup className={classes.buttongroup}>
        {children.map((child, index) => React.cloneElement(child, {
          key    : `SwitchButton-${index}`,
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
  classes: PropTypes.shape({
    buttongroup: PropTypes.string
  }),
  index   : PropTypes.number,
  onChange: PropTypes.func,
  selected: PropTypes.number
}

export default SwitchButton
