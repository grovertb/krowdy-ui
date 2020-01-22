import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

export default function SelectOverflow() {
  return (
    <Select style={{ maxWidth: 100 }} value={10}>
      <MenuItem value=''>
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Tennnnnnn</MenuItem>
    </Select>
  )
}
