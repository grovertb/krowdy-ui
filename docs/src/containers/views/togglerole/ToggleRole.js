import React, { useState } from 'react'
import { ToggleRole } from '@krowdy-ui/views'

export default function () {
  const [ selected , setSelected ] = useState(false)
  const _handleChangeSwich = () => setSelected(prevstate => !prevstate)

  return (
    <ToggleRole
      checked={selected}
      onchange={_handleChangeSwich}
      subtitle='El Krowder puede hacer seguimiento de los procesos.'
      title='Seguimiento'
      value='traking' />
  )
}
