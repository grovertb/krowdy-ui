import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
//import clsx from 'clsx'
import {
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@krowdy-ui/core'

export const styles = theme => ({
  size: {
    fontSize: 14
  }
})

const InputsRadiosForm = props => {
  const {
    classes,
    isRow,
    inputs,
    onChange = () => { },
    value,
    name
  } = props

  const [currentValue, setValue] = React.useState(value)

  const handleChange = event => {
    setValue(event.target.value)
    onChange(event)
  }

  return (
    <RadioGroup name={name} value={currentValue} onChange={handleChange} row={isRow}>
      {
        inputs.map((element, index) => {
          return (
            <FormControlLabel
              key={index}
              // className={classes.size}
              value={element.value}
              label={element.label}
              classes={{ label: classes.size }}
              control={<Radio color='primary' size='small' disableRipple />} />
          )
        })
      }
    </RadioGroup>
  )
}

InputsRadiosForm.propTypes = {
  classes: PropTypes.object,
  inputs: PropTypes.array,
  isRow: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

InputsRadiosForm.muiName = 'InputsRadiosForm'

export default withStyles(styles, { name: 'KrowdyInputsRadiosForm' })(InputsRadiosForm)

/* [{_id:1,label:algo}] */