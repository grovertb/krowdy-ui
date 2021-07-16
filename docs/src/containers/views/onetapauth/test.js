import React, { useEffect } from 'react'
import { useAuth } from '@krowdy-ui/auth'
import { Button } from '@krowdy-ui/core'

const Test =  () => {
  const { onOpen = () => {}, onClose, successLogin, onPasswordNotify, flowFinished, logout } = useAuth()

  useEffect(()=>{
    if(successLogin)
      onClose()
  }, [ successLogin, onClose ])

  useEffect(()=>{
    if(flowFinished)
      onClose()
  }, [ flowFinished, onClose ])

  const openAlreadySession = () => {
    onPasswordNotify(true)
  }

  return (
    <>
      <Button
        color='primary'
        onClick={onOpen}
        variant='contained'>{flowFinished ? 'LOGUEADO!':'CLICK ME!'}
      </Button>
      {
        !flowFinished && successLogin ? (
          <Button color='krowdy' onClick={openAlreadySession}>
            CREAR O ACTUALIZAR CONTRASEÑA</Button>
        ) : null
      }
      {
        flowFinished ? <Button
          color='primary'
          onClick={logout}
          variant='contained'>DESLOGUEAR
        </Button> : null
      }
    </>
  )
}

export default Test
