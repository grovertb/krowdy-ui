import React, { useState } from 'react'
import { BackgroundAlert } from '@krowdy-ui/views'
import { Button, CardContent, CardHeader } from '@krowdy-ui/core'

export default () =>{
  const [ anchorEl, setAnchorEl ] = useState(null)

  const _handleAnchorEl = ({ currentTarget }) => {
    setAnchorEl(prev=> prev ? null: currentTarget)
  }

  return (
    <div>
      <Button color='primary' onClick={_handleAnchorEl} variant='contained'>Click me!</Button>
      <BackgroundAlert
        anchorEl={anchorEl}
        arrow
        color='primary'
        open={Boolean(anchorEl)}
        placement='top-start'>
        <div>
          <CardHeader title='Primero debes llenar tu aviso. ' />
          <CardContent>
    Luego, haz click en el botón “Publicar en bolsas”.
          </CardContent>
        </div>
      </BackgroundAlert>
    </div>
  )}
