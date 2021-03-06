import React from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

export default function SelectAlignment() {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor='age1'>Age</InputLabel>
        <Select input={<Input id='age1' name='age1' />} value=''>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='age2'>year</InputLabel>
        <Select input={<Input id='age2' name='year' />} value={10}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='name-input'>Name</InputLabel>
        <Input id='name-input' />
        <FormHelperText>Alignment with an input</FormHelperText>
      </FormControl>
    </div>
  )
}
