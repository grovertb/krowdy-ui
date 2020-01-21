import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function TextFieldRequired() {
  return (
    <div>
      <TextField label='Foo' required />
      <TextField label='Foo' required value='Hello world' />
    </div>
  )
}
