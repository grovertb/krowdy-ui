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
  colorButton:{
    color:theme.palette.primary[500]
  }
})

const InputsRadiosForm = props => {
  const {
   //classes,
    inputs,
    onChange=()=>{},
    valueDefault,
    name
  } = props

  const [value, setValue] = React.useState(valueDefault)

  const handleChange = event => {
    setValue(event.target.value)
    onChange(event)
  }

  return (  
    <RadioGroup name={name} value={value} onChange={handleChange} row>
      {
        inputs.map((element, index)=>{
          return (
            <FormControlLabel 
              key={index} 
              value= {element.value} 
              label={element.label} 
              control={<Radio color='primary' size='small' disableRipple/>} />
          )
        })
      }
    </RadioGroup>
)
}

InputsRadiosForm.propTypes = {
  classes: PropTypes.object,
  inputs: PropTypes.array,
  name : PropTypes.string,
  onChange: PropTypes.func,
  valueDefault: PropTypes.string
}

InputsRadiosForm.muiName = 'InputsRadiosForm'

export default withStyles(styles, { name: 'KrowdyInputsRadiosForm' })(InputsRadiosForm)

/* [{_id:1,label:algo}] */