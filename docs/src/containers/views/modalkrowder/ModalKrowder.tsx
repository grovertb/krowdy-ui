import React, { useState } from 'react'
import { ModalKrowder } from '@krowdy-ui/views'
import {
  Typography
} from '@krowdy-ui/core'

export default function () {
  const [ open, setOpen ] = useState(false)

  const _handleClickOpen = () => {
    setOpen(true)
  }

  const _handleClickClose = () => {
    setOpen(false)
  }

  const TestComponent = (): JSX.Element => (<Typography>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
  Lorem Ipsum ha sido el texto de relleno estándar de las
  industrias desde el año 1500, cuando un impresor (N. del T.</Typography>)

  return (
    <div>
      <button onClick={_handleClickOpen}>open</button>
      <ModalKrowder
        collapses={[
          {
            component: <TestComponent />,
            title    : 'prueba de collapse 1'
          },
          {
            component: <TestComponent />,
            title    : 'title 2'
          }
        ]}
        onclose={_handleClickClose}
        open={open}
        user={{
          email    : 'xavi@mail.com',
          firstName: 'Xavi',
          lastName : 'Gonzalez',
          phone    : '+51 555 555 555',
          photo    : ''
        }} />
    </div>
  )}
