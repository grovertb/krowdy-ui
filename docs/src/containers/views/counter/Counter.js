import React from 'react'
import { Counter } from '@krowdy-ui/views'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export default function () {
  const initialCounterValue = 1
  const minLimit = -5
  const maxLimit = 5
  const disabled = false

  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
      <Counter
        // onChange ={onChange}
        addIcon={<AddIcon />}
        removeIcon={<RemoveIcon />}
        initialCounterValue={initialCounterValue}
        minLimit={minLimit}
        maxLimit={maxLimit}
        disabled={disabled}
      />
    </div>

  )
}

