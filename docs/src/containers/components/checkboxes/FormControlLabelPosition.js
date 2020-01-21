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
          control={<Checkbox color='primary' />}
          label='Top'
          labelPlacement='top'
          value='top' />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='Start'
          labelPlacement='start'
          value='start' />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='Bottom'
          labelPlacement='bottom'
          value='bottom' />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='End'
          labelPlacement='end'
          value='end' />
      </FormGroup>
    </FormControl>
  )
}
