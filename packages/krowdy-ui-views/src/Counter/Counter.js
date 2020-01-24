import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  IconButton,
  Input
} from '@krowdy-ui/core'

export const styles = theme => ({
  input: {
    textAlign: 'center'
  },
  root: {
    borderBottom: `1px solid ${theme.palette.grey['500']}`,
    color       : theme.palette.grey['700'],
    fontSize    : 14,
    fontStyle   : 'normal',
    fontWeight  : 'normal',
    lineHeight  : '100%',
    textAlign   : 'center',
    width       : 23
  }
})

function addLeadingZero(number) {
  return ('0' + number).slice(-2)
}

const Counter = props => {
  const {
    classes,
    size,
    color = 'primary',
    addIcon,
    removeIcon,
    min,
    max,
    disabled,
    number,
    onChange = () => { }
  } = props

  const onClick = (type) => {
    if(type === 'increase')
      number > min && (onChange(number - 1))

    if(type === 'decrease')
      number < max && onChange(number + 1)
  }

  return (
    <div >
      <IconButton
        color={color}
        disabled={disabled}
        onClick={() => onClick('increase')}
        size={size}
        square>
        {removeIcon}
      </IconButton>
      <Input
        classes={{
          input: classes.input,
          root : classes.root
        }}
        disabled={disabled}
        disableUnderline
        value={addLeadingZero(number)} />
      <IconButton
        color={color}
        disabled={disabled}
        onClick={() => onClick('decrease')}
        size={size}
        square>
        {addIcon}
      </IconButton>

    </div >
  )
}

Counter.propTypes = {
  addIcon   : PropTypes.node.isRequired,
  classes   : PropTypes.object,
  color     : PropTypes.string,
  disabled  : PropTypes.bool,
  max       : PropTypes.number,
  min       : PropTypes.number,
  number    : PropTypes.number.isRequired,
  onChange  : PropTypes.func,
  removeIcon: PropTypes.node.isRequired
}

Counter.muiName = 'Counter'

export default withStyles(styles, { name: 'Counter' })(Counter)
