import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Button, ButtonGroup } from '@krowdy-ui/core'
export const styles = theme => ({
  headerLeft: {
    flex: '1'
  },

})

const SwitchButton = props => {
  const {
    classes,

  } = props

  return (
    <div  >
      <ButtonGroup
        variant='contained'
        color='primary'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div >

  )
}

SwitchButton.propTypes = {
  classes: PropTypes.object,

}

SwitchButton.muiName = 'Search'

export default withStyles(styles, { name: 'KrowdySwitchButton' })(SwitchButton)