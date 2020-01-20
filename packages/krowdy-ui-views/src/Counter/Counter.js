import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { IconButton, Input } from '@krowdy-ui/core'

export const styles = theme => ({
  headerLeft: {
    flex: '1'
  },
  input: {
    textAlign: 'center'
  },
  root: {
    borderBottom: '1px solid #BFBFBF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '100%',
    textAlign: 'center',
    width: 23
  }
})

function addLeadingZero(number) {
  return ('0' + number).slice(-2)
}

const Counter = props => {

  const {
    classes,
    addIcon,
    removeIcon,
    min,
    max,
    disabled,
    value,
    onChange = () => { },
  } = props


  return (
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <IconButton
        color='primary'
        disabled={disabled}
        onClick={() => {
          value > min &&
            onChange(value - 1)
        }}
        size='small'>
        {removeIcon}
      </IconButton>
      <Input
        disabled={disabled}
        disableUnderline
        classes={{
          input: classes.input,
          root: classes.root
        }}
        value={addLeadingZero(value)}
      />
      <IconButton
        color='primary'
        disabled={disabled}
        onClick={() => {
          value < max &&
            onChange(value + 1)
        }}
        size='small'>
        {addIcon}
      </IconButton>

    </div >
  )
}

Counter.propTypes = {
  addIcon: PropTypes.node,
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  removeIcon: PropTypes.node,
  value: PropTypes.number
}

Counter.muiName = 'Search'

export default withStyles(styles, { name: 'CounterSearch' })(Counter)