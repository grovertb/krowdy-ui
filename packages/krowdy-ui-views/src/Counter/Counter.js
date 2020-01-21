import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  IconButton,
  Input
} from '@krowdy-ui/core'

export const styles = theme => ({
  icon: {
    '&:focus': {
      background: theme.palette.primary['50'],
      borderRadius: 4,
      color: theme.palette.primary['600']
    },
    '&:hover': {
      background: theme.palette.primary['50'],
      borderRadius: 4,
      color: theme.palette.primary['400']
    }
  },
  input: {
    textAlign: 'center'
  },
  root: {
    borderBottom: `1px solid ${theme.palette.grey['500']}`,
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
    number,
    onChange = () => { },
    restPropsIconButton,
    restPropsInput
  } = props

  return (
    <div >
      <IconButton
        className={classes.icon}
        color='primary'
        disabled={disabled}
        onClick={() => {
          number > min &&
            onChange(number - 1)
        }}
        size='small'
        {...restPropsIconButton}
      >
        {removeIcon}
      </IconButton>
      <Input
        disabled={disabled}
        disableUnderline
        classes={{
          input: classes.input,
          root: classes.root
        }}
        value={addLeadingZero(number)}
        {...restPropsInput}
      />
      <IconButton
        className={classes.icon}
        color='primary'
        disabled={disabled}
        onClick={() => {
          number < max &&
            onChange(number + 1)
        }}
        size='small'
        {...restPropsIconButton}
      >
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
  number: PropTypes.number,
  onChange: PropTypes.func,
  removeIcon: PropTypes.node
}

Counter.muiName = 'Search'

export default withStyles(styles, { name: 'CounterSearch' })(Counter)