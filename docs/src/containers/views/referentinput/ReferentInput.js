import React from 'react'
import { ReferentInput } from '@krowdy-ui/views'

export default function () {
  return (
    <div>
      <div style={{ background: 'red' }}>
        <ReferentInput
          name='phone'
          placeholder='Nombre de usuario'
          size='medium'
          unPadding
          value='Luis Alfredo' />
      </div>
      <div style={{ background: 'blue' }}>
        <ReferentInput
          filled
          name='phone'
          placeholder='Teléfono'
          size='small'
          value='977862124' />
      </div>
    </div>
  )
}
