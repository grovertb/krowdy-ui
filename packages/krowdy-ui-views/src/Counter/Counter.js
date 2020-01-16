import React, { useState, useEffect } from 'react'
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
    minLimit,
    maxLimit,
    initialCounterValue,
    onChange = () => { },
  } = props


  const [number, setNumber] = useState(initialCounterValue)

  useEffect(() => {
    onChange(number)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number])

  return (
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <IconButton
        onClick={() => number > minLimit && setNumber(number - 1)}
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
        onClick={() => number < maxLimit && setNumber(number + 1)}
        size='small'>
        {addIcon}
      </IconButton>

    </div >
  )
}

Counter.propTypes = {
  addIcon: PropTypes.node,
  classes: PropTypes.object,
  initialCounterValue: PropTypes.number,
  maxLimit: PropTypes.number,
  minLimit: PropTypes.number,
  onChange: PropTypes.func,
  removeIcon: PropTypes.node
}

Counter.muiName = 'Search'

export default withStyles(styles, { name: 'CounterSearch' })(Counter)