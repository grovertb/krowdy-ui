import React from 'react'
import { SwitchButton } from '@krowdy-ui/views'

export default function () {
  const [ color, setColor ] = React.useState(false)
  const onChange = (event) => {
    // if (event === false)
    setColor(!event)
  }
  const titleLeft = 'titleLeft'
  const titleRight = 'titleRight'

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
        active={color}
        color='primary'
        onChange={onChange}
        titleLeft={titleLeft}
        titleRight={titleRight}></SwitchButton>
    </div>
  )
}
