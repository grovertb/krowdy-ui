import React, { useState } from 'react'
import { ToggleRole } from '@krowdy-ui/views'

export default function () {
  const [ selected, setSelected ] = useState(false)
  const _handleChangeSwich = (active: boolean) => {setSelected(active)}

  return (
    <ToggleRole
      checked={selected}
      name='toggle'
      onChange={_handleChangeSwich}
      subtitle='El Krowder puede hacer seguimiento de los procesos.'
      title='Seguimiento'
      value='traking' />
  )
}
