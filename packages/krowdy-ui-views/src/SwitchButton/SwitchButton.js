import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Button, ButtonGroup } from '@krowdy-ui/core'

export const styles = (/* theme */) => ({
  btn: {
    height: 40,
    width : 136
  }
})

const SwitchButton = props => {
  const {
    classes,
    active,
    titleLeft = '',
    titleRight = '',
    onChange = () => { },
    ...restProps
  } = props

  return (
    <div>
      <ButtonGroup
        {...restProps}>
        <Button
          className={classes.btn}
          onClick={() => onChange(active)
          }
          variant={active ? 'contained' : 'outlined'}>{titleLeft}</Button>
        <Button
          className={classes.btn}
          onClick={() => onChange(active)}
          variant={!active ? 'contained' : 'outlined'}>{titleRight}</Button>
      </ButtonGroup>
    </div >
  )
}

SwitchButton.propTypes = {
  active    : PropTypes.bool,
  classes   : PropTypes.object,
  onChange  : PropTypes.func,
  titleLeft : PropTypes.string,
  titleRight: PropTypes.string
}

SwitchButton.muiName = 'Search'

export default withStyles(styles, { name: 'KrowdySwitchButton' })(SwitchButton)
