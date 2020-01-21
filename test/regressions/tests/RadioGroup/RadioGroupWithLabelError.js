import React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

export default function RadioGroupWithLabelError() {
  return (
    <FormControl error required style={{ width: 100 }}>
      <FormLabel>Location</FormLabel>
      <RadioGroup value='home'>
        <FormControlLabel control={<Radio />} label='Home' value='home' />
        <FormControlLabel control={<Radio />} label='Work' value='work' />
      </RadioGroup>
    </FormControl>
  )
}
