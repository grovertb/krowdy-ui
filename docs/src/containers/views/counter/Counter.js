import React, { useState } from 'react'
import { Counter } from '@krowdy-ui/views'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export default function () {

  const initialCounterValue = 1
  const minLimit = 1
  const maxLimit = 300
  const disabled = false
  const [number, setNumber] = useState(initialCounterValue)

  // const onChange
  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: 400,
      justifyContent: 'space-evenly',
      margin: '50px',
      width: 'auto'
    }}>
      <Counter
        // onChange={onChange}
        addIcon={<AddIcon style={{ height: 18, width: 18 }} />}
        removeIcon={<RemoveIcon style={{ height: 18, width: 18 }} />}
        number={number}
        disabled={disabled}
      />
    </div>

  )
}

