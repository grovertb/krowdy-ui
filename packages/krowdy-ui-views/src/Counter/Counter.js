import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  IconButton,
  Input
} from '@krowdy-ui/core'
import clsx from 'clsx'

export const styles = theme => ({
  fontSizemedium: {
    fontSize: 14
  },
  fontSizesmall: {
    fontSize: 12
  },
  input: {
    padding  : theme.spacing(0.5, 0),
    textAlign: 'center',
    width    : 40
  },
  root: {
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
    color       : theme.palette.grey[700],
    fontStyle   : 'normal',
    fontWeight  : 'normal',
    lineHeight  : '100%',
    textAlign   : 'center'
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
    name,
    max,
    type = 'medium',
    disabled,
    number,
    onChange = () => { }
  } = props

  const onClick = (type) => {
    if(type === 'increase')
      number > min && onChange(number - 1)

    else if(type === 'decrease')
      number < max && onChange(number + 1)
  }

  const _handleCLickIncrease = () => {
    onClick('increase')
  }
  const _handleCLickDecrease = () => {
    onClick('decrease')
  }

  return (
    <div >
      <IconButton
        color={color}
        disabled={disabled}
        onClick={_handleCLickIncrease}
        size={size}
        square>
        {removeIcon}
      </IconButton>
      <Input
        classes={{
          input: classes.input,
          root : clsx(classes.root, classes[`fontSize${type}`], classes[`fontSize${type}`])
        }}
        disabled={disabled}
        disableUnderline
        name={name}
        value={addLeadingZero(number)} />
      <IconButton
        color={color}
        disabled={disabled}
        onClick={_handleCLickDecrease}
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
  name      : PropTypes.string,
  number    : PropTypes.number.isRequired,
  onChange  : PropTypes.func,
  removeIcon: PropTypes.node.isRequired,
  type      : PropTypes.oneOf([ 'small', 'middle' ])
}

Counter.muiName = 'Counter'

export default withStyles(styles, { name: 'Counter' })(Counter)
