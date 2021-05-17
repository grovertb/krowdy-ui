import React, { useState } from 'react'
import { BackgroundAlert } from '@krowdy-ui/views'
import { Button, CardContent, CardHeader } from '@krowdy-ui/core'

export default () =>{
  const [ anchorEl, setAnchorEl ] = useState(null)

  return (
    <div>
      <Button
        color='primary' ref={setAnchorEl}
        variant='contained'>Click me!</Button>
      <BackgroundAlert
        anchorEl={anchorEl}
        arrow
        color='primary'
        open={true}
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
