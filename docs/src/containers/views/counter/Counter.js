import React from 'react'
import { Counter } from '@krowdy-ui/views'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export default function () {
  const initialCounterValue = 10
  const disabled = false
  const min = 5
  const max = 15
  const [ number, setNumber ] = React.useState(initialCounterValue)

  const onChange = (event) => {
    setNumber(event)
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
      <Counter
        addIcon={<AddIcon style={{ height: 18, width: 18 }} />}
        disabled={disabled}
        max={max}
        min={min}
        number={number}
        onChange={onChange}
        removeIcon={<RemoveIcon style={{ height: 18, width: 18 }} />}
        width={{ width: 40 }} />
    </div>

  )
}

