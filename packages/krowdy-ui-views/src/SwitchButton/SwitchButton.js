import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Button, ButtonGroup } from '@krowdy-ui/core'

export const styles = theme => ({
  btn: {
    height: 40,
    width: 136
  }
})

const SwitchButton = props => {

  const {
    classes,
    value,
    titleLeft = '',
    titleRight = '',
    onChange = () => { },
    ...restProps
  } = props

  return (
    <div>
      <ButtonGroup
        {...restProps}
      >
        <Button
          className={classes.btn}
          variant={value ? 'contained' : 'outlined'}
          onClick={() => onChange(value)
          }
        >{titleLeft}</Button>
        <Button
          className={classes.btn}
          variant={!value ? 'contained' : 'outlined'}
          onClick={() => onChange(value)}
        >{titleRight}</Button>
      </ButtonGroup>
    </div >
  )
}

SwitchButton.propTypes = {
  classes: PropTypes.object,
  onChange: PropTypes.func,
  titleLeft: PropTypes.string,
  titleRight: PropTypes.string,
  value: PropTypes.bool
}

SwitchButton.muiName = 'Search'

export default withStyles(styles, { name: 'KrowdySwitchButton' })(SwitchButton)