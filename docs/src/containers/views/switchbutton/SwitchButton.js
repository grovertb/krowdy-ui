import React from 'react'
import { SwitchButton } from '@krowdy-ui/views'
import { Button } from '@krowdy-ui/core'

export default function () {
  const [ index, setIndex ] = React.useState(0)
  const [ index2, setIndex2 ] = React.useState(0)

  return (
    <div style={{
      alignItems    : 'center',
      display       : 'flex',
      flexDirection : 'column',
      height        : 400,
      justifyContent: 'space-evenly',
      margin        : '50px',
      width         : 'auto'
    }}>

      <SwitchButton
        onChange={setIndex}
        selected={index}>
        <Button color='primary' onClick={() => console.log('hola')} >click me 2</Button>
        <Button color='primary' onClick={() => console.log('hola')}>click me 2</Button>
      </SwitchButton>

      <SwitchButton
        onChange={setIndex2}
        selected={index2}>
        <Button color='krowdy' onClick={() => console.log('hola')} >click me 2</Button>
        <Button color='krowdy' onClick={() => console.log('hola')}>click me 2</Button>
        <Button color='krowdy' onClick={() => console.log('hola')}>click me 2</Button>
        <Button color='krowdy' onClick={() => console.log('hola')}>click me 2</Button>
      </SwitchButton>
    </div>
  )
}
