import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function TextFieldMargin() {
  return (
    <div style={{ display: 'flex' }}>
      <TextField defaultValue='Default Value' label='Dense' margin='dense' />
      <TextField label='Dense' margin='dense' style={{ position: 'absolute ' }} />
    </div>
  )
}
