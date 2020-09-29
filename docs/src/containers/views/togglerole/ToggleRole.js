import React, { useState } from 'react'
import { ToggleRole } from '@krowdy-ui/views'

export default function () {
  const [ selected, setSelected ] = useState(false)
  const _handleChangeSwich = active => {setSelected(active)}

  return (
    <ToggleRole
      checked={selected}
      name='toggle'
      onchange={_handleChangeSwich}
      subtitle='El Krowder puede hacer seguimiento de los procesos.'
      title='Seguimiento'
      value='traking' />
  )
}
