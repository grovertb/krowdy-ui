import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { TextField, IconButton } from '@krowdy-ui/core'

export const styles = theme => ({
  headerLeft: {
    flex: '1'
  },
  input: {
    color: '#595959',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '100%',
    textAlign: 'center'
  },
  textfield: {
    width: 23
  }
})

const Counter = props => {

  const {
    classes,
    addIcon,
    removeIcon,
    initialCounterValue,
  } = props

  const [number, setNumber] = useState(initialCounterValue)
  return (
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <IconButton
        onClick={() => setNumber(number - 1)}
        size='small'>
        {removeIcon}
      </IconButton>
      <TextField
        InputProps={{
          classes: {
            input: classes.input
          }
        }}
        className={classes.textfield}
        value={number}
      >
      </TextField>
      <IconButton
        onClick={() => setNumber(number + 1)}
        size='small'>
        {addIcon}
      </IconButton>

    </div >
  )
}

Counter.propTypes = {
  addIcon: PropTypes.node,
  classes: PropTypes.object,
  removeIcon: PropTypes.node

}

Counter.muiName = 'Search'

export default withStyles(styles, { name: 'CounterSearch' })(Counter)