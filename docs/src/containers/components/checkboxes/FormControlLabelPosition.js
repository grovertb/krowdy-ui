import React from 'react'
import {
  Checkbox,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel
} from '@krowdy-ui/core'

export default function FormControlLabelPosition() {
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>Label Placement</FormLabel>
      <FormGroup aria-label='position' row>
        <FormControlLabel
          value='top'
          control={<Checkbox color='primary' />}
          label='Top'
          labelPlacement='top'
        />
        <FormControlLabel
          value='start'
          control={<Checkbox color='primary' />}
          label='Start'
          labelPlacement='start'
        />
        <FormControlLabel
          value='bottom'
          control={<Checkbox color='primary' />}
          label='Bottom'
          labelPlacement='bottom'
        />
        <FormControlLabel
          value='end'
          control={<Checkbox color='primary' />}
          label='End'
          labelPlacement='end'
        />
      </FormGroup>
    </FormControl>
  )
}