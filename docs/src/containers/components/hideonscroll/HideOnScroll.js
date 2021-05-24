import React, { useRef } from 'react'
import { HideOnScroll } from '@krowdy-ui/core'

export default () => {
  const containerRef = useRef()

  return (
    <div ref={containerRef} style={{ height: '50vh', overflow: 'auto', width: '100%' }}>
      <HideOnScroll direction='up'>
        <div style={{
          background: 'red',
          left      : 0,
          position  : 'fixed',
          top       : 0,
          width     : '100%',
          zIndex    : 10000
        }}>
            Para arriba
        </div>
      </HideOnScroll>
      {Array.from(new Array(30)).map((_, index) => (
        <div key={index} style={{ height: 20 }}>
          texto
        </div>
      ))}
      <HideOnScroll direction='down'>
        <div style={{
          background: 'blue',
          bottom    : 0,
          left      : 0,
          position  : 'fixed',
          width     : '100%',
          zIndex    : 10000
        }}>
            Para abajo
        </div>
      </HideOnScroll>
    </div>
  )
}
