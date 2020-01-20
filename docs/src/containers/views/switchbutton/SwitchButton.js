import React, { useState } from 'react'
import { SwitchButton } from '@krowdy-ui/views'

export default function () {
  const [color, setColor] = useState(false)
  const onChange = (event) => {
    setColor(!event)
  }
  const titleLeft = 'titleLeft'
  const titleRight = 'titleRight'
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

      <SwitchButton
        value={color}
        titleLeft={titleLeft}
        titleRight={titleRight}
        onChange={onChange}
        color='primary'
      ></SwitchButton>
    </div>
  )
}