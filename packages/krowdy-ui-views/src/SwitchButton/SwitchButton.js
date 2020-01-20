import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Button, ButtonGroup } from '@krowdy-ui/core'

export const styles = theme => ({
  headerLeft: {
    flex: '1'
  },

})

const SwitchButton = props => {
  const [color, setColor] = useState({
    buttonOne: false,
    buttonTwo: true
  })
  const {
    classes,

  } = props
  const ChangeColor = name => {
    setColor({
      [name]: color,
    })

  }
  return (
    <div>
      <ButtonGroup
        color='primary'>
        <Button
          variant={color.buttonOne ? 'contained' : 'outlined'}
          onClick={() => ChangeColor('buttonOne')}
        >Krowder</Button>
        <Button
          variant={color ? 'outlined' : 'contained'}
          onClick={() => ChangeColor('buttonTwo')}
        >Responsable</Button>
      </ButtonGroup>
    </div >

  )
}

SwitchButton.propTypes = {
  classes: PropTypes.object,

}

SwitchButton.muiName = 'Search'

export default withStyles(styles, { name: 'KrowdySwitchButton' })(SwitchButton)