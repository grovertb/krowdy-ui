import React, { useState } from 'react'
import { Counter } from '@krowdy-ui/views'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export default function () {
  const initialCounterValue = 0


  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
      <Counter
        addIcon={<AddIcon color='primary' />}
        removeIcon={<RemoveIcon color='primary' />}
        initialCounterValue={initialCounterValue}
      />
    </div>

  )
}

