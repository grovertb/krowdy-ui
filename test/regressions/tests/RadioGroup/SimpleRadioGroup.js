import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

export default function SimpleRadioGroup() {
  return (
    <div style={{ width: 100 }}>
      <RadioGroup value='home'>
        <FormControlLabel control={<Radio />} label='Home' value='home' />
        <FormControlLabel control={<Radio />} label='Work' value='work' />
      </RadioGroup>
    </div>
  )
}
