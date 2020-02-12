import React, { useState } from 'react'
import { Counter } from '@krowdy-ui/views'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export default function () {
  const [ countersState, setCountersState ] = useState({
    first : 5,
    second: 30
  })

  const changeCounterState = (values) => {
    setCountersState(prev => ({
      ...prev,
      ...values
    }))
  }

  const _handleChange = (event) => {
    changeCounterState({
      [event.target.name]: event.target.value
    })
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
        max={10}
        min={5}
        name='first'
        number={countersState.first}
        onChange={_handleChange}
        removeIcon={<RemoveIcon style={{ height: 18, width: 18 }} />}
        width={{ width: 40 }} />
      <Counter
        addIcon={<AddIcon style={{ height: 18, width: 18 }} />}
        max={1000}
        min={25}
        name='second'
        number={countersState.second}
        onChange={_handleChange}
        removeIcon={<RemoveIcon style={{ height: 18, width: 18 }} />}
        width={{ width: 40 }} />
    </div>

  )
}

