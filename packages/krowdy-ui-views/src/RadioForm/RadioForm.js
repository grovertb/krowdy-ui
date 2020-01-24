import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  FormControlLabel,
  Radio,
  RadioGroup
} from '@krowdy-ui/core'

export const styles = () => ({
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

  const [ currentValue, setValue ] = React.useState(value)

  const handleChange = event => {
    setValue(event.target.value)
    onChange(event)
  }

  return (
    <RadioGroup
      name={name} onChange={handleChange} row={isRow}
      value={currentValue}>
      {
        inputs.map((element, index) => (
          <FormControlLabel
            classes={{ label: classes.size }}
            // className={classes.size}
            control={<Radio color='primary' disableRipple size='small' />}
            key={index}
            label={element.label}
            value={element.value} />
        ))
      }
    </RadioGroup>
  )
}

InputsRadiosForm.propTypes = {
  classes : PropTypes.object,
  inputs  : PropTypes.array,
  isRow   : PropTypes.bool,
  name    : PropTypes.string,
  onChange: PropTypes.func,
  value   : PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
}

InputsRadiosForm.muiName = 'InputsRadiosForm'

export default withStyles(styles, { name: 'KrowdyInputsRadiosForm' })(InputsRadiosForm)

/* [{_id:1,label:algo}] */
