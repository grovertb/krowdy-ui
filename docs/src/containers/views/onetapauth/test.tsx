import React, { useEffect } from 'react'
import { useAuth } from '@krowdy-ui/auth'
import { Button } from '@krowdy-ui/core'

const Test =  () => {
  const { onOpen = () => {}, onClose, successLogin, onPasswordNotify, flowFinished } = useAuth()
  useEffect(()=>{
    if(successLogin)
      onClose()
  }, [ successLogin, onClose ])

  const openAlreadySession = () => {
    onPasswordNotify(true)
  }

  return (
    <>
      <Button
        color='primary'
        onClick={onOpen}
        variant='contained'>CLICK ME!
      </Button>
      {
        flowFinished && successLogin ? (
          <Button color='secondary' onClick={openAlreadySession}>
            CREAR O ACTUALIZAR CONTRASEÑA</Button>
        ) : null
      }
    </>
  )
}

export default Test
