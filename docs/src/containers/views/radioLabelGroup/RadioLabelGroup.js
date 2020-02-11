import React, { useState } from 'react'
import { RadioLabelGroup } from '@krowdy-ui/views'

const items = [
  {
    label: 'Female',
    value: 'female'
  },
  {
    label: 'Male',
    value: 'male'
  },
  {
    label: 'Other',
    value: 'other'
  }
]

export default function () {
  const [ value, setValue ] = useState('male')

  const _handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <div style={{
      alignItems    : 'center',
      display       : 'flex',
      flexDirection : 'column',
      height        : 400,
      justifyContent: 'space-evenly',
      margin        : 50,
      width         : 'auto'
    }}>
      <RadioLabelGroup
        isRow
        items={items}
        name='Gender'
        onChange={_handleChange}
        value={value} />
    </div>
  )
}
